window.onload = initialize;

function initialize() {
    var buttonCheck = document.getElementById("check");
    buttonCheck.addEventListener("click", checkWord);

    var buttonChangeColor = document.getElementById("change-color");
    buttonChangeColor.addEventListener("click", changeColor);


        fillCartonBoard();
}
function changeColor() {
    var messageParagraph = document.getElementById("message");

    var randomColorNumber = Math.floor(Math.random() * 10);

    switch (randomColorNumber) {
        case 0:
            messageParagraph.style.color = "pink";
            break;
        case 1:
            messageParagraph.style.color = "blue";
            break;
        case 2:
            messageParagraph.style.color = "green";
            break;
        case 3:
            messageParagraph.style.color = "red";
            break;
        case 4:
            messageParagraph.style.color = "yellow";
            break;
        case 5:
            messageParagraph.style.color = "cyan";
            break;
        case 6:
            messageParagraph.style.color = "magenta";
            break;
        case 7:
            messageParagraph.style.color = "brown";
            break;
        case 8:
            messageParagraph.style.color = "black";
            break;
        case 9:
            messageParagraph.style.color = "grey";
            break;


    }

}

function checkWord() {
    console.log("use has click on check button");

    var letter1 = document.getElementById("letter1");
    var letter1Value = letter1.value;

    var letter2 = document.getElementById("letter2");
    var letter2Value = letter2.value;

    var letter3 = document.getElementById("letter3");
    var letter3Value = letter3.value;

    var letter4 = document.getElementById("letter4");
    var letter4Value = letter4.value;

    var userMessage = letter1Value + letter2Value + letter3Value + letter4Value;

    var messageParagraph = document.getElementById("message");

    if (userMessage == "hola") {
        messageParagraph.innerHTML = ("That's right my friend");
        messageParagraph.style.backgroundColor = "rgb(0,255,0)";
    } else {
        messageParagraph.innerHTML = ("Try it again my dunky punky!");
        messageParagraph.style.backgroundColor = "rgb(255,0,0)";
    }
}

function fillCartonBoard(){
    for(var i = 0; i <6; i++){
        createAButton();
    }

}

function createAButton(){
    var bingoBoard = document.getElementById("bingo-board");
    var button = document.createElement("button");
    var num = Math.floor(Math.random() * 15) + 20;
    button.innerHTML = num;
    bingoBoard.appendChild(button);
    
 }

function getRandowArbitrary(min,max){
    Math.random() * max;

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

/*
git comit -m "first comit working"

git log 

 git remote add origin https://github.com/RichardVinueza/Newepository.git

 git push -u origin master

*/