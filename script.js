var heads = 0;
var tails = 0;

function toss() {
    coin = (Math.floor(Math.random() * 2) == 0);
    if(coin){
        flip("heads");
    }else{
        flip("tails");
    }
}

function flip(coin) {
    document.getElementById("result").innerHTML = coin;
}

function headsChoice() {
    toss();
    document.getElementById("guess").innerHTML = "heads";
    document.getElementById("result");
}

function tailsChoice() {
    toss();
    document.getElementById("guess").innerHTML = "tails";
    document.getElementById("result");
}


/*
    Need to:
        1.) heads or tails selection connects to the buttons
*/
