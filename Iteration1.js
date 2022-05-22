//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const myButton = document.querySelector('.showme');

console.log(myButton);


//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const myP = document.querySelector('#pillado');
console.log(myP);


//1.3 Usa querySelector para mostrar por consola todos los p

const myPs = document.querySelectorAll('p');
console.log(myPs);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const myPokemons = document.querySelectorAll(".pokemon")
for (const pokemon of myPokemons){
    console.log(pokemon);

}


//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".

const mySpans = document.querySelectorAll('[data-function="testMe"]');
console.log(mySpans);

for (let index = 0; index < mySpans.length; index++) {
    const span = mySpans[index];
    console.log(span);
}


//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const mySpans3 = document.querySelectorAll('[data-function="testMe"]');
console.log(mySpans3[2]);
