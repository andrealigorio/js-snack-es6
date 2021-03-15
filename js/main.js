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

racingBikes.forEach((element, index, array) => {
    if(lessWeight >= element.peso) {
        lessWeight = element.peso;
        lessBikeWeight = (array[index]);    //Con array[index] salvo l'oggetto bici con peso minore
    }
});

console.warn("ESERCIZIO 1");
console.log(lessWeight);
console.log(lessBikeWeight);

let {nome, peso} = lessBikeWeight;      //Con il destructuring dell'oggetto prelevo nome e peso e stampo in console
console.log(`La bici da corsa ${nome} è la più leggera con un peso di ${peso} kg`);



