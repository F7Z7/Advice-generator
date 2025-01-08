//all the necessary constants declared
let advice = document.getElementById('Advice');
let idAdvice = document.getElementById('idAdvice');
let fetchButton = document.querySelector('.button-dice');

async function adivceFetch() {
    try {
        //first I need to fetch the api
        //first time using await async
        const response = await fetch("https://api.adviceslip.com/advice")
        const data = await response.json()//response are converted to json

        const fetchedAdvice = data.slip.advice;
        const fetchedId = data.slip.id;


        advice.innerHTML = `"${fetchedAdvice}"`;
        idAdvice.innerHTML = `"Advice#${fetchedId}"`;



    } catch (error) {
        alert(error);
    }
    fetchButton.addEventListener("click", adivceFetch);

}

adivceFetch();