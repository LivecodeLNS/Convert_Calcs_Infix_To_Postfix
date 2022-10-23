# LiveCodeLNS - JavaScript - NodeJS
## CLI | Command Line Interface
## Conversor de Cálculos Infijos A PostFijos

---
## ÍNDICE <a name="indice"></a>
- [INTRODUCCIÓN](#intro)
- [DEPENDENCIAS](#dependencies)
- [DESCARGA y EJECUCIÓN DE SCRIPT](download_install)
    - [PASOS A SEGUIR](#steps)
        - [PASO 1](#step_1)
        - [PASO 2](#step_2)
            - [PASO 2](#step_2_1)
            - [PASO 2](#step_2_2)
        - [PASO 3](#step_3)
        - [PASO 4](#step_4)
- [IDEAS A FUTURO](#improvements)
- [A TENER EN CUENTA](#tenerEnCuenta)
- [BUGS / PROBLEMAS](#issues)
- [GLOSARIO](#glosario)
---

---
### INTRODUCCIÓN <a name="intro"></a>
---

Este script basado en JavaScript, ejecutado con NodeJS permite introducir por teclado un [cálculo infijos](#infijo_glosario) a [Cálculo postfijos](#postfijo_glosario), incluyendo actualmente la posibilidad de ingresarlo con decimales y agrupaciones, es decir, entre `paréntesis ()`. `llaves {}` y `corchetes []`.

---
### DEPENDENCIAS: <a name="dependencies"></a>
---

La única dependencia sin modificar el código es NodeJS instalado previamente para ejecutar el archivo JavaScript en la consola o terminal.

---
### DESCARGA y EJECUCIÓN DE SCRIPT <a name="download_install"></a>
---

La forma más sencilla de descargarlo es mediante [`git`](downloadGIT) o [`gh`](downloadGHCLI).

#### PASOS A SEGUIR <a name="steps"></a>

<a name="step_1"></a>
1. Nos posicionamos en el directorio donde estara la carpeta del repo.
<a name="step_2"></a>
2. Para clonar tenemos 2 opciones:
<a name="step_2_1"></a>
    - USAR `git`:
        - `$ git clone https://github.com/LivecodeLNS/Convert_Calcs_Infix_To_Postfix.git`
<a name="step_2_2"></a>
    - USAR `gh` (GitHub CLI Oficial):
        - `$ gh repo clone LivecodeLNS/Convert_Calcs_Infix_To_Postfix`
<a name="step_3"></a>
3. Ingresamos a la nueva carpeta.
    - `$ cd Convert_Calcs_Infix_To_Postfix\n`
    ---
    - `$ cd .\Convert_Calcs_Infix_To_Postfix`
<a name="step_4"></a>
4. Ejecutamos e interactuamos en la TERMINAL.
    - `$ node convertInfixToPostfixCalculation.js`

---
### IDEAS / NOVEDADES <a name="improvements"></a>
---

Más adelante las ideas que me gustaria implementar en algun momento (SIN COMPROMISO) son:
- [ ] EVALUAR LAS EXPRESIONES POSTFIJAS.
- [ ] CONVERSION INFIJA A PREFIJA.
- [ ] EVALUAR LAS EXPRESIONES PREFIJAS
- [ ] AGREGAR POSIBILIDAD DE DETALLES (verbosity)

---
## A TENER EN CUENTA <a name="tenerEnCuenta"></a>
---

ES IMPORTANTE TENER EN CUENTA

Al momento de realizar los cálculos, para evitar errores inesperados.

¡Se debe colocar explícitamente todos aquellos operadores que se usan en los cálculos!

Si alguno de estos se omite puede lanzar errores o dar una expresión final errónea.

¡NO USAR LETRAS, SE LANZARA ERROR Y SALDRA DEL CLI!

---
### BUGS | PROBLEMAS | FALLAS GRAVES <a name="issues"></a>
---

Si llegan a experimentar bugs, fallos, o cualquier tipo de inconvenientes, con mucho gusto aceptaré #issues para revisiones y arreglar todos los fallos que vayan surgiendo... SE LOS VOY AGRADECER MUCHO POR LA AYUDA!

---
### ¡GLOSARIO DE PALABRAS! <a name="glosario"></a>
##### (Se obvian los conceptos básicos de programación)
---

<a name="infijo_glosario"></a>
CÁLCULOS INFIJOS
: CÁLCULOS CON LOS SIGNOS ARITMÉTICOS, O OPERADORES, EN MEDIO DE LOS NÜMEROS, O OPERANDOS, QUE DESEAMOS OPERAR 
> EJEMPLO SIMPLE: "25+50" 
---
> EJEMPLO COMPLEJO: "(25 + 50) * 3 / 2 ^ 2 - 4"

<a name="postfijo_glosario"></a>
CÁLCULOS POSTFIJOS
: CÁLCULOS CON LOS SIGNOS ARITMÉTICOS, O OPERADORES, UBICADOS DESPUES DE LOS 2 NÜMEROS, O OPERANDOS, QUE DESEAMOS OPERAR 
> EJEMPLO SIMPLE: "25,50,+"
---
> EJEMPLO COMPLEJO: "25, 50, +, 3, *, 2, 2, ^, /, 4, -"

[downloadGIT]: ""
[downloadGHCLI]: ""