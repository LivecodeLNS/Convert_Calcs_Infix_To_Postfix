# LiveCodeLNS - JavaScript - NodeJS
## CLI | Command Line Interface
## Conversor de Cálculos Infijos A PostFijos

---
## ÍNDICE {#indice}
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
### INTRODUCCIÓN {#intro}
---

Este script basado en JavaScript, ejecutado con NodeJS permite introducir por teclado un [cálculo infijos](#infijo_glosario) a [Cálculo postfijos](#postfijo_glosario), incluyendo actualmente la posibilidad de ingresarlo con decimales y agrupaciones, es decir, entre `paréntesis ()`. `llaves {}` y `corchetes []`.

---
### DEPENDENCIAS: {#dependencies}
---

La única dependencia sin modificar el código es NodeJS instalado previamente para ejecutar el archivo JavaScript en la consola o terminal.

---
### DESCARGA y EJECUCIÓN DE SCRIPT {#download_install}
---

La forma más sencilla de descargarlo es mediante [`git`](downloadGIT) o [`gh`](downloadGHCLI).

#### PASOS A SEGUIR {#steps}
1. Nos posicionamos en el directorio donde estara la carpeta del repo.{#step_1}
2. Para clonar tenemos 2 opciones:{#step_2}
    - USAR `git`:{#step_2_1}
        - `$ git clone https://github.com/LivecodeLNS/Convert_Calcs_Infix_To_Postfix.git`
    - USAR `gh` (GitHub CLI Oficial):{#step_2_2}
        - `$ gh repo clone LivecodeLNS/Convert_Calcs_Infix_To_Postfix`
3. Ingresamos a la nueva carpeta.{#step_3}
    - `$ cd Convert_Calcs_Infix_To_Postfix\n`
    ---
    - `$ cd .\Convert_Calcs_Infix_To_Postfix`
4. Ejecutamos e interactuamos en la TERMINAL.{#step_4}
    - `$ node convertInfixToPostfixCalculation.js`

---
### IDEAS / NOVEDADES {#improvements}
---

Más adelante las ideas que me gustaria implementar en algun momento (SIN COMPROMISO) son:
- [] EVALUAR LAS EXPRESIONES POSTFIJAS.
- [] CONVERSION INFIJA A PREFIJA.
- [] EVALUAR LAS EXPRESIONES PREFIJAS
- [] AGREGAR POSIBILIDAD DE DETALLES (verbosity)

---
## A TENER EN CUENTA {#tenerEnCuenta}
---

ES IMPORTANTE TENER EN CUENTA:
Al momento de realizar los cálculos, para evitar errores inesperados.
¡Se debe colocar explícitamente todos aquellos operadores que se usan en los cálculos!
Si alguno de estos se omite puede lanzar errores o dar una expresión final errónea.
¡NO USAR LETRAS, SE LANZARA ERROR Y SALDRA DEL CLI!

---
### BUGS | PROBLEMAS | FALLAS GRAVES {#issues}
---

Si llegan a experimentar bugs, fallos, o cualquier tipo de inconvenientes, con mucho gusto aceptaré #issues para revisiones y arreglar todos los fallos que vayan surgiendo... SE LOS VOY AGRADECER MUCHO POR LA AYUDA!

---
### ¡GLOSARIO DE PALABRAS! {#glosario}
##### (Se obvian los básicos de programación)
---

CÁLCULOS INFIJOS {#infijo_glosario}
: CÁLCULOS CON LOS SIGNOS ARITMÉTICOS, O OPERADORES, EN MEDIO DE LOS NÜMEROS, O OPERANDOS, QUE DESEAMOS OPERAR 
> EJEMPLO SIMPLE: "25+50" 
---
> EJEMPLO COMPLEJO: "(25 + 50) * 3 / 2 ^ 2 - 4"

CÁLCULOS POSTFIJOS {#postfijo_glosario}
: CÁLCULOS CON LOS SIGNOS ARITMÉTICOS, O OPERADORES, UBICADOS DESPUES DE LOS 2 NÜMEROS, O OPERANDOS, QUE DESEAMOS OPERAR 
> EJEMPLO SIMPLE: "25,50,+" 
---
> EJEMPLO COMPLEJO: "25, 50, +, 3, *, 2, 2, ^, /, 4, -"

[downloadGIT]: ""
[downloadGHCLI]: ""