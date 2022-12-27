var randomNumber1 = Math.floor((Math.random() * 6)) + 1, randomNumber2 = Math.floor((Math.random() * 6)) + 1;

var img1 = "images/dice" + String(randomNumber1) + ".png", img2 = "images/dice" + String(randomNumber2) + ".png";

document.querySelector("img.player1").setAttribute("src", img1);

document.querySelector("img.player2").setAttribute("src", img2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}

else{
    document.querySelector("h1").innerHTML="Draw!";

}