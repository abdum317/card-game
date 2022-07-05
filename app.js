
var king = document.querySelector("#imges");
var head1 = document.querySelector("#head1");
var firsth2 = document.querySelector("#first-h2")
var secondh2 = document.querySelector("#second-h2")
var thirdh2 = document.querySelector("#third-h2")
var kingCount = 0;
var queenCount = 0;
var jokerCount = 0;
function cardGame(){
    var num = Math.floor(Math.random()*3);
    if(num === 0){
        king.src = "images/king.jpg"
        kingCount++ ;
        firsth2.innerHTML = kingCount;
    }
    else if(num === 1){
        king.src = "images/queen.png"
        queenCount++ ;
        secondh2.innerHTML = queenCount;
    }
    else if(num === 2){
        king.src = "images/joker.jpg"
        jokerCount++ ;
        thirdh2.innerHTML = jokerCount;
    }    
}
