const log = (...msg) => console.log(...msg);
// IMPORTANTE LOS SIMBOLOS EN FORMATO BIDIMENSIONAL PARA SOSTENER SU PRIORIDAD
const precedents = [
    ['+', '-'], //<= MENOR PRIORIDAD
    ['*', '/'],
    ['^', '\u221A'], //<= \u221A = U+221A = √
    ['(', '[', '{'], //<= MAYOR PRIORIDAD
    ['}', ']', ')']  //<= MAYOR PRIORIDAD
];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let stackOperators = [];
let calcConverted = [];
console.clear();

/*
log("INGRESE EL CALCULO en la siguiente linea:");
process.openStdin().addListener("data", data => {
    convertToPostFix(data.toString());
    //SI SE COMENTA LA SIGUIENTE LINEA, SE CONVIERTE EN BUCLE!
    process.exit();
});
*/
log("INGRESE EL CALCULO en la siguiente linea:");
process.openStdin().addListener("data", prepareCalc);

function prepareCalc(calcInput) {
    // CONVERT STRING AND DELETE SPACES WITH RegExp!
    // NEW LET DATA WILL BE ARRAY FILTERED!

    //RegExp (?![\d()[\]{}.+\-*/^]). TODO AQUEL CARÁCTER NO SEA PARA CALCULOS
    const haveLetters = calcInput.toString().match(/(?![\d()[\]{}.+\-*/^])./gi);
    if (haveLetters) {
        log('ESTÁ PROHIBIDO LOS CARACTERES ALFABÉTICOS.');
        process.exit();
    };
    calcInput = calcInput
        .toString()
        .replaceAll(/\s/gi, '')
        .split(/([+]|[-]|[*]|[/]|[\^]|[\(]|[\)]|[\{]|[\}]|[\[]|[\]])/gi)
        .filter(letter => letter !== '');
    // log(calcInput);
    // convertToPostFix(calcInput);
    convertToPostFixUpdate(calcInput);
    //SI SE COMENTA LA SIGUIENTE LINEA, SE CONVIERTE EN BUCLE!
};

/*function convertToPostFix(calc) {
    // log(calc.length);
    if (calc.length > 0) {
        for (const digit of calc) {
            if (numbers.includes(digit)) {
                calcConverted.push(digit);
            } else {
                const validation = validateEquality(digit);
                if (validation === -2) {
                    stackOperators.push(digit);
                } else if (validation === -1) {
                    stackOperators.push(digit)
                    emptyPartialStack();
                } else if (validation === 0) {
                    stackOperators.push(digit);
                } else if (validation === 1) {
                    calcConverted.push(stackOperators.pop());
                    stackOperators.push(digit);
                } else if (validation === 2) {
                    stackOperators.push(digit);
                } else if (validation === 3) {
                    let length = stackOperators.length;
                    while (length > 0) calcConverted.push(stackOperators.pop());
                    stackOperators.push(digit);
                };
            };//<= FIN DE forOf
        };
        while (stackOperators.length > 0)
        calcConverted.push(stackOperators.pop());
    };
    log(calcConverted);
    process.exit();
};*/
function convertToPostFixUpdate(calc) {
    // log(calc.length);
    if (calc.length > 0) {
        for (const digit of calc) {
            // log(digit); continue;
            if (digit.match(/\d/gi)) {
                calcConverted.push(digit);
            } else {
                const validation = validateEquality(digit);
                // log(digit, validation);
                if (validation === -2) {
                    stackOperators.push(digit);
                } else if (validation === -1) {
                    stackOperators.push(digit)
                    emptyPartialStack();
                } else if (validation === 0) {
                    stackOperators.push(digit);
                } else if (validation === 1) {
                    calcConverted.push(stackOperators.pop());
                    stackOperators.push(digit);
                } else if (validation === 2) {
                    stackOperators.push(digit);
                } else if (validation === 3) {
                    let length = () => stackOperators.length;
                    while (length() > 0)
                        calcConverted.push(stackOperators.pop());
                    stackOperators.push(digit);
                };
            };//<= FIN DE forOf
        };
        while (stackOperators.length > 0) {
            calcConverted.push(stackOperators.pop());
        };
        log(
            '\nEL CALCULO CONVERTIDO EN POSTFIJO / SUFIJO ES:\n',
            calcConverted.join(', ')
        );
        process.exit();
    } else log('NO HAZ INGRESADO UN CALCULO CORRECTO, POR FAVOR REINTENTALO!');
};

function validateEquality(newLastOperator) {
    /* 
    ============================================================================
     * OBJETIVO DE LA FUNCIÓN
    
     * VALIDAR PRIORIDADES ENTRE NUEVO OPERADOR Y PILA
    ============================================================================
     * VALORES POSIBLES DE RETORNO:
    
     * SI ES APERTURA DE AGRUPACIÓN RETORNA -2 (EXCEPCIÓN!)
     * SI ES CIERRE DE AGRUPACIÓN RETORNA -1
     * SI PILA TIENE LONGITUD 0 RETORNA 0
     * SI NUEVO OPERADOR ES IGUAL RETORNA 1
     * SI NUEVO OPERADOR ES MAYOR RETORNA 2
     * SI NUEVO OPERADOR ES MENOR RETORNA 3
    ============================================================================
     */
    if (stackOperators.length > 0) {
        let lastOperator = stackOperators.at(-1);
        let priorityLastOP, priorityNewOP;
        //LÓGICA DE CONVERSION
        // ')'|'}'|']'
        if (precedents.at(4).includes(lastOperator)) priorityLastOP = 5;
        // '('|'{'|'['
        else if (precedents.at(3).includes(lastOperator)) priorityLastOP = 4;
        else if (precedents.at(2).includes(lastOperator)) priorityLastOP = 3;
        else if (precedents.at(1).includes(lastOperator)) priorityLastOP = 2;
        else if (precedents.at(0).includes(lastOperator)) priorityLastOP = 1;

        // ')'|'}'|']'
        if (precedents.at(4).includes(newLastOperator)) priorityNewOP = 5;
        // '('|'{'|'['
        else if (precedents.at(3).includes(newLastOperator)) priorityNewOP = 4;
        else if (precedents.at(2).includes(newLastOperator)) priorityNewOP = 3;
        else if (precedents.at(1).includes(newLastOperator)) priorityNewOP = 2;
        else if (precedents.at(0).includes(newLastOperator)) priorityNewOP = 1;

        if (priorityLastOP === 4 && (priorityNewOP < priorityLastOP)) return -2;
        else if (priorityLastOP === 5 || priorityNewOP === 5) return -1;
        else if (priorityNewOP === priorityLastOP) return 1;
        else if (priorityNewOP > priorityLastOP) return 2;
        else if (priorityNewOP < priorityLastOP) return 3;
    } else return 0;
};

function emptyPartialStack() {
    if (precedents.at(-1).includes(stackOperators.at(-1))) stackOperators.pop();
    while (precedents.at(-2).includes(stackOperators.at(-1)) === false)
        calcConverted.push(stackOperators.pop());
    if (precedents.at(-2).includes(stackOperators.at(-1))) stackOperators.pop();
};