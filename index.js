var playerOne = Math.floor(Math.random() * 6) + 1;
var playerTwo = Math.floor(Math.random() * 6) + 1;


document.querySelector(".img1").setAttribute("src", "images/dice" + playerOne + ".png");

document.querySelector(".img2").setAttribute("src", "images/dice" + playerTwo + ".png");


if(playerOne > playerTwo){
    document.querySelector("h1").textContent = "Player One Wins!";
}

else if (playerOne < playerTwo){
    document.querySelector("h1").textContent = "Player Two Wins!";
}

else if(playerOne === playerTwo){
    document.querySelector("h1").textContent = "Draw!";
}
