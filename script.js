var floops = 0;
var correct = 0;
var totalPercent = 0;

function toss() {
    coin = (Math.floor(Math.random() * 2) + 1);
    if (coin === 1) {
        flip("heads");
    } else if (coin === 2) {
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
    if (coin === 1) {
        correct += 1;
        document.getElementById("correct").innerHTML = correct;
    }
}

function tailsChoice() {
    toss();
    document.getElementById("guess").innerHTML = "tails";
    document.getElementById("result");
    if (coin === 2) {
        correct += 1;
        document.getElementById("correct").innerHTML = correct;
    }
}

function psyPercent() {
    totalPercent = correct / floops * 100;
    document.getElementById("psyPercent").innerText = Math.round(totalPercent);
}

function totalFloops() {
    floops += 1;
    document.getElementById("totalFloops").innerHTML = floops;
}
