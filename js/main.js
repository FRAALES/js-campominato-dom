//Definisci la variabile per il contenitore della griglia che creerai nel prossimo passaggio
let creaGriglia = document.getElementById('grid-container');
console.log(creaGriglia);

//Creo la griglia in un div a cui ho già dato id nell'html
let grigliaVeraEPropria = document.createElement('div');
grigliaVeraEPropria.innerHTML = '<div id = grid></div>';


//definisci la variabile per il bottone che farà apparire la griglia
let bottoneCompareGriglia = document.getElementById('btn');

//Dì al bottone che quando lo clicchi deve far apparire la griglia
bottoneCompareGriglia.addEventListener('click', 
    function(){
        grigliaVeraEPropria.style.display = 'block';

});