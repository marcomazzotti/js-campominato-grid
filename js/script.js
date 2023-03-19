//*Consegna**
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


//dichiarazioni
const grid = document.querySelector(".grid")
const play = document.querySelector(".btn-play")

//cosa succede al click
play.addEventListener("click" , function(){
    
    let difficult = document.querySelector(".level");
    let numberOfSquare = parseInt(difficult.options[difficult.selectedIndex].value);
    let numbersArray = getNumberArray(numberOfSquare);

    grid.innerHTML = "";
    for (let i = 0; i < numbersArray.length ; i++){
      const currentNumber = numbersArray[i];
      const newItem = GridItem(currentNumber);
      grid.append(newItem);
      newItem.addEventListener("click", ItemClick);

      if (numberOfSquare === 81){
        newItem.classList.remove("easy")
        newItem.classList.add("normal")
      } else if (numberOfSquare === 49){
        newItem.classList.remove("easy")
        newItem.classList.add("hard")
      }
        
    }
})

//funzioni
function getNumberArray(numbersQuantity) {
    const array = [];

    for (let i = 1; i<=numbersQuantity; i++){
        const number = i
        array.push(number)
    }
    return array   
}

function GridItem(text) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("grid-item" , "easy");
    newSquare.innerHTML = `<span>${text}</span>`;
    return newSquare;
}

function ItemClick() {
    const clickedNumber = parseInt(this.querySelector("span").textContent);
    this.classList.add("green");
    console.log(`Hai scelto il numero ${clickedNumber}`);
}