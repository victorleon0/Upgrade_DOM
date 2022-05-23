//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const myDiv = document.createElement('div');
document.body.appendChild(myDiv);


//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const myDiv2 = document.createElement('div');
document.body.appendChild(myDiv2);

const myP = document.createElement('p');
document.body.appendChild(myP);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const myDiv3 = document.createElement("div")
const myP = document.createElement("p")


for (let i = 0; i <= 6, i++) {
    const myP = document.createElement("p")
    myDiv.appendChild(myP)
}

document.body.appendChild(myDiv)


//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const p = document.createElement('p');
    p.innerText = '¡Soy dinámico!';
    document.body.appendChild(p);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const myH2 = document.querySelector(".fn-insert-here")
myH2.innerText = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const myUl = document.createElement('Ul')
document.body.appendChild(myUl)
for (const app of apps) {
    const myLi = document.createElement('li');
    myUl.appendChild(myLi);
    myLi.innerText = app;
}

document.body.appendChild(myUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const myPs = document.querySelectorAll('.fn-remove-me');


for (const myP of myPs) {
    myP.remove();
}


//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const myDivs = document.querySelectorAll('div');
const myP = document.createElement('p');
myP.innerText = 'Voy en medio';


document.body.insertBefore(myP, myDivs[1]);


//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const allDivs = document.querySelectorAll('.fn-insert-here');

for (const div of allDivs) {
    const myP = document.createElement('p');
    myP.innerText = "Voy dentro";
    div.appendChild(myP);
}
