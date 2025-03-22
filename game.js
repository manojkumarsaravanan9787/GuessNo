var noOfLive = document.getElementById("LivesNo");
var msg = document.getElementById("message");
var input= document.getElementById("number").value;
var submit=document.getElementById("submit");

var randomNumber=Math.round(Math.random() * 100);

var lives=5;
var message;
submit.onclick = () => {
    console.log(randomNumber);
    var userInput=document.getElementById("number").value;
    lives--;
    if(userInput==randomNumber)
        location.href="./win.html";
    else if(lives==0)
        location.href="./loss.html";
    else if(userInput > randomNumber)
        message="Oops! Your game is too high";
    else if(userInput < randomNumber)
        message="Oops! Your guess is to low";

    msg.style.display="inherit";
    msg.innerHTML=message;
    livesNo.innerHTML=lives;

}