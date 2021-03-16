$(document).ready(function() {

/* Snack 1)
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

const racingBikes = [
    {
        "nome" : "Wilier 0 SLR",
        "peso" : 6.5
    },
    {
        "nome": "Cannondale SuperSix",
        "peso": 8
    },
    {
        "nome": "Trek Emonda 2020",
        "peso": 6.8
    },
    {
        "nome": "Trek Emonda SLR",
        "peso": 4.6
    },
    {
        "nome": "SAVA Phantom 2.0 700C",
        "peso": 8.1
    }
];

let lessWeight = racingBikes[0].peso;      //Ricavo il peso della prima bici per fare il confronto con le altre
let lessBikeWeight = {};                   //Creo un oggetto vuoto dove salvare i dati della bici più leggera

racingBikes.forEach((element) => {
    if(lessWeight >= element.peso) {
        lessWeight = element.peso;
        lessBikeWeight = element;
    }
});

console.warn("ESERCIZIO 1");
console.log(lessWeight);
console.log(lessBikeWeight);

let {nome, peso} = lessBikeWeight;      //Con il destructuring dell'oggetto prelevo nome e peso e stampo in console
console.log(`La bici da corsa ${nome} è la più leggera con un peso di ${peso} kg`);

/* Snack2) Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console. */

var teams = [
    {
        "nome" : "Juventus",
        "puntiFatti" : 0,
        "falliSubiti" : 0
    },
    {
        "nome": "Milan",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Inter",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Roma",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Napoli",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Lazio",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Fiorentina",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Atalanta",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Crotone",
        "puntiFatti": 0,
        "falliSubiti": 0
    }
];

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);   //Utilizzo arrow function per creare funzione randomica

teams.forEach((element) => {
    element["puntiFatti"] = randomNumber(15,100);
    element["falliSubiti"] = randomNumber(50, 200);
});

console.warn("ESERCIZIO 2");
console.log(teams);

const newTeamsArray = [];       //Dichiaro nuovo array dove copiare proprietà che mi interessano

teams.forEach((element) => {
    var {nome, falliSubiti} = element;      //Tramite destructuring prelevo i valori relativi a nome e falli subiti
    var newTeamObj = {};                    //Dichiaro nuovo oggetto dove copio chiave e valore delle proprietà interessate
    newTeamObj.nome = nome;
    newTeamObj.falliSubiti = falliSubiti;
    newTeamsArray.push(newTeamObj);         //Pusho il nuovo oggetto nel nuovo array e tramite il ciclo forEach lo ripeto per tutti gli elementi
});

console.log(newTeamsArray);

/* Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter */

const myArray = [1,2,3,4,5,6,7,8];
const a = 2;
const b = 5;

console.warn("ESERCIZIO 3");
console.log(newArray(myArray, a, b));

function newArray(array, a, b) {
    let newArray = [];
    array.forEach((element, index) => {
        if ((index >= a) && (index < b)) {
            newArray.push(element);
        }
    });
    return newArray;
}

});