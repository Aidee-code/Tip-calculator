"use strict"
const billText = document.querySelector('.billinput');
const buttonPercentage = document.querySelectorAll('.btn');
const custom = document.querySelector('.inp-num');
const noOfPeople = document.querySelector('#no-of-people');
const tipAmount = document.querySelector('.tipAmtFigure');
const totalAmount = document.querySelector('.total-amount');
const resetButton = document.querySelector('.reset-btn');
let x;
let tipPer;
let totalP;
console.log(buttonPercentage);

buttonPercentage.forEach((buttonPercentage) => {
buttonPercentage.addEventListener('click', (e) =>{
    e.preventDefault() 
    if(
        billText.value>=1 && noOfPeople.value >=1
    )
    {
     tipPer=(billText.value/noOfPeople.value)*(Number(buttonPercentage.textContent)/100)   
    console.log(tipPer.toFixed(3));
    tipAmount.textContent=tipPer.toFixed(2);

totalP=(billText.value/noOfPeople.value)+tipPer
console.log(totalP);
totalAmount.textContent = totalP.toFixed(2)
}})});

custom.addEventListener('click', (e) => {
    e.preventDefault()
    if(custom.value >=1 ){

     tipPer = (custom.value / 100) * (billText.value/noOfPeople.value)
   console.log(tipPer); 
   tipAmount.textContent = tipPer.toFixed(3)

   totalP=(billText.value/noOfPeople.value)+tipPer
console.log(totalP);
totalAmount.textContent = tipPer.toFixed(2)
}

    
})

resetButton.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === "escape" || resetButton.value) {
        console.log("Reset button entered")
    }
})