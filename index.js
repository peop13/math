var questTxt = document.getElementById("quest");
var scoreTxt = document.getElementById("score");
var startBt = document.getElementsByClassName("button-st");
var answer = document.getElementById("answer");
var quest = "";
var num;
var score = 0;
var key;
question();
function verificate(){
    if (answer.value){
        if (num == answer.value){
            score += 1;
        }
        else {
            score -= 1;
        }
    }
    answer.value = "";
    scoreTxt.innerText = "Միավոր : " + score;
    question();
}

function question(){
    quest = "";
    quest += Math.floor(Math.random() * 2);
    console.log(quest);
    if (quest == "1"){
        quest="";
        quest = Math.floor(Math.random() * 10) + 1;
        console.log(quest);
        quest += "+";
        console.log(quest);
        quest += Math.floor(Math.random() * (10-parseInt(quest[0])));
        console.log(quest);
    }
    else if (quest == "0"){
        quest="";
        quest = Math.floor(Math.random() * 10) + 1;
        quest += "-";
        quest += Math.floor(Math.random() * parseInt(quest[0]));
        console.log(quest);
    }
    questTxt.innerText = quest;
    num = eval(quest);
}

function myFunction(event) {
    key = event.key;
    if (key == "Enter") { 
        verificate();
    }
}