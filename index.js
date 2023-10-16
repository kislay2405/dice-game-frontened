var random1 = Math.floor(Math.random() * 6)+1;
var randomdice = "dice" + random1 + ".png";
var randomimage = "images/" + randomdice ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimage);

var random2 = Math.floor(Math.random() * 6)+1;
var randomimage2 = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

if(random1>random2){
    document.querySelector("h1").innerHTML="Player 1 Wins !🫡🫡";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="Player 2 Wins !🫡🫡";
}
else{
    document.querySelector("h1").innerHTML="Draw !🤝🤝"
}