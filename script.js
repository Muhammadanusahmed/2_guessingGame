`<link  href="./style.css" rel = "stylesheet">`
let guessField = document.querySelector("input")
let Submit = document.querySelector("#equal")
let result = document.querySelector("#result")
let resultline = document.querySelector("#resultline")

Submit.addEventListener("click", function(){
    let guess = Math.floor(Math.random() * 3 + 1)


    if(parseInt(guessField.value) === guess){

        result.innerHTML= `
        <figure>
            <img id = "win" src="./smile.png" alt="win">
        </figure> `
        resultline.innerHTML = "you guessed correctly"
        resultline.style.color = "green"

    } else{
        result.innerHTML = `
        <figure>
        <img id = "lose" src="./sad.png" alt="lose">
        </figure> ` 

        resultline.innerHTML = "you guessed wrong"
        resultline.style.color = "red"
    }

    console.log(guess);
    console.log(guessField.value);
    
    

})