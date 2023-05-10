//Definisci la variabile per il contenitore della griglia che creerai nel prossimo passaggio
let grigliaVeraEPropria = document.getElementById('grid-container');

//definisci la variabile per il bottone che farà apparire la griglia
let bottoneCompareGriglia = document.getElementById('btn');

//Dì al bottone che quando lo clicchi deve far apparire la griglia
bottoneCompareGriglia.addEventListener('click', 
    function(){
        //Creo la griglia in un div a cui ho già dato id nell'html
        grigliaVeraEPropria.innerHTML = '<div id = "grid"></div>';
        

        //creo i quadrati all'interno della griglia
        let numeroDiSquares;

        for (let i= 1; i <= 100; i++){
            //Voglio creare un div per 100 volte
            let createSquare = document.createElement('div');


            //a questi 100 div voglio dare classe 'square'
            createSquare.classList.add('square');


            //e voglio appenderli alla grid (selezionandola prima!)
            let selezionoGriglia = document.querySelector('#grid-container');
            selezionoGriglia.append(createSquare);


















        }
        














});