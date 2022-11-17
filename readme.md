## Primeros pasos con html5

Esta carpeta git es para empezar a hacer pruebas con html en el curso de front end de iron hack.

---

Los archivos que encontramos en [section-01](#section01)

1. Basic layout
2. Meta tags
3. Typography
4. Links
5. Images
6. Lists
7. Layout structure
8. Layout example

### Pasos para hacer un push a git

`Añadir` todos tus cambios

git add .

> el . significa todos los archivos modificados

`Añadir` solo cambios en archivos concretos

git add <filename.html>

Despues haremos un `commit` que significa que todos los archivos pasan al stage area, es importante añadir el -m en el commit para mandar un mensaje cuando hagamos el commit.

git commit -m "mensaje"

Para hacer el push y que los cambios se vean modificados en nuestro github, hemos de hacer `push`.

git push origin master

## Primeros pasos CSS

1. Link
<link rel="stylesheet" href="style.css">
2. Selectors and pseudoselectors

   #### Pseudoclasses

   `a:link{} a:visited{} a:hoover{} a:visited{}`

   `a:nth-child{} a:nth-last-child{} a:nth-first-child{} a:last-child{}`

### Pseudoelements

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s).

`selector::pseudo-element { property: value; }`

3. Fonts
   Import fonts from https://fonts.google.com/knowledge
   inside HTML file:
   `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');`

4. Box model

5. Forms

6. Exercise forms

7. Float and clear

Primero, hemos de linkar en nuestro archivo html el link.
esta línea de código se escribe al principio del head en html

  <link rel="stylesheet" href="style.css">

## Float and clear

## Pseudoselectors and links

`a:link{} a:visited{} a:hoover{} a:visited{}`

`nth-child() -- number of lines firstchild `

## Seguimos con CSS

### Grid template

display: grid or inline grid (block element vs inline element)
grid-template-columns
gridtemplate-rows
repeat(4, 25% or px, [col-start])
grid-gap
grid-column-start: col-start 2;
grip-template-areas: "header header header header"

You can also justify items

- start
- end
- center
- stretch

Align items

- start
- end
- center
- stretch

## First Steps JS

DOM - Document Object Model(script - html)

1. Link with html file or add inside html with script tag.

```
 <script src="index.js">
    </script>
```

1. Variable Declaration: type upperCase.
   querySelector().innerHTML
   getElementByID().innerHTML

### Properties and methods

document.domain --- dan la source de la página

### Datos Primitivos y Noprimitivos

Primitivos controlados por typeof

- undefined
- boolean
- number
- string
- bight
- symbol

### String methods
slice(start,end)
If you omit the second parameter, the method will slice out the rest of the string:
If a parameter is negative, the position is counted from the end of the string:
substring(start,end)
The difference is that start and end values less than 0 are treated as 0 in substring().
If you omit the second parameter, substring() will slice out the rest of the string.
substr(start,length)
The difference is that the second parameter specifies the length of the extracted part.

### Number methods

.toString
The toString() method returns a number as a string.
toExponential()
Returns a string, with a number rounded and written using exponential notation.
toFixed()
Returns a string, with the number written with a specified number of decimals:
toPrecision()
Returns a string, with a number written with a specified length:
valueOf()
Returns a number as a number.
a number can be a primitive value (typeof = number) or an object (typeof = object).
All JavaScript data types have a valueOf() and a toString() method.

### Convert a variable into a number

The Number() method can be used to convert JavaScript variables to numbers:
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
If the number cannot be converted, NaN (Not a Number) is returned.

arr.push
arr.shifted
arr.unshifted
