var playerOne = Math.floor(Math.random() * 6) + 1;
var playerTwo = Math.floor(Math.random() * 6) + 1;

switch(playerOne){
    case 1: 
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        break;
}

switch(playerTwo){
    case 1: 
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;
}


if(playerOne > playerTwo){
    document.querySelector("h1").textContent = "Player One Wins!";
}

else if (playerOne < playerTwo){
    document.querySelector("h1").textContent = "Player Two Wins!";
}

else if(playerOne === playerTwo){
    document.querySelector("h1").textContent = "Draw!";
}