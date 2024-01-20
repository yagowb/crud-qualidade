 //[Dar bons nomes de variáveis]
 
 var n1 = 10;
 var n2 = 20;


console.log(n1 + n2);


// contexto é extremamente importante!
// como devs, o que mais fazemos é LER código!

const userFirstInputNumber = 10;
const userSecondInputNumber = 10;

console.log(userFirstInputNumber + userSecondInputNumber);


// ========================================= //

var inputDoUsuario;

// no browser
// - string
// elemento do DOM (campo de busca do google)

const inputUsuario = document.querySelector('input').value;
const $inputUsuario = document.querySelector('input');


// booleanos
// <input value="" />
document.querySelector('input').hasAttribute('value'); // true OR false

if(hasSomething || isSomething) {} 
if(!hasSomething) {}



// should
if(shouldOpen) {}