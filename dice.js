var player1="player 1";
var player2="player 2";

function changename(){
    player1=prompt("change player 1 name");
    player2=prompt("change player 2 name");
    document.querySelector("p.p1").innerHTML=player1;
    document.querySelector("p.p2").innerHTML=player2;
}

function rollthedice(){
    setTimeout(function(){
    var randomnumber1=Math.floor(Math.random()*6)+1;
    var randomnumber2=Math.floor(Math.random()*6)+1;
    document.querySelector(".img1").setAttribute("src","pic/dice"+randomnumber1+".png");
    document.querySelector(".img2").setAttribute("src","pic/dice"+randomnumber2+".png");
    if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML=("DRAW!!");}
    else if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=(player1+" WINS!!");}
    else{
    document.querySelector("h1").innerHTML=(player2+" WINS!!");}
    },1);
}
