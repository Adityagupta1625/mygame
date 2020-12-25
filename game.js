let player_score=0;
let comp_score=0;
let Rock_btn=document.querySelector('#Rock');
let Paper_btn=document.querySelector('#Paper');
let Scissor_btn=document.querySelector('#Scissor');
let myname=prompt('Enter your Name:');
let setname=document.getElementbyId("myname");
setname.innerHTML=myname;
// Rock_btn.addEventListener('click',generate_1());
// Paper_btn.addEventListener('click',generate_2());
// Scissor_btn.addEventListener('click',generate_3());

function generate_1(){
    let comp=Math.round(1+2*Math.random());
    if(comp==2){
        comp_score=comp_score+1;
        confirm("Computer Wins!");
    }
    else if(comp==3){
        player_score=player_score+1;
        confirm("You Wins!");
    }
    else{
        confirm("A Tie!");
    }
    let elem=document.getElementById("myscore");
    let elem1=document.getElementById("compscore");
    elem.innerHTML=player_score;
    elem1.innerHTML=comp_score;
}
function generate_2(){
    let comp=Math.round(1+2*Math.random());
    if(comp==1){
        player_score=player_score+1;
        confirm("You Wins!");
    }
    else if(comp==3){
        comp_score=comp_score+1;
        confirm("Computer Wins!");
    }
    else{
        confirm("A Tie!");
    }
    let elem=document.getElementById("myscore");
    let elem1=document.getElementById("compscore");
    elem.innerHTML=player_score;
    elem1.innerHTML=comp_score;
    
}
function generate_3(){
    let comp=Math.round(1+2*Math.random());
    if(comp==1){
        comp_score=comp_score+1;
        confirm("Computer Wins!");
    }
    else if(comp==2){
        player_score=player_score+1;
        confirm("You Wins!");
    }
    else{
        confirm("A Tie!");
    }
    let elem=document.getElementById("myscore");
    let elem1=document.getElementById("compscore");
    elem.innerHTML=player_score;
    elem1.innerHTML=comp_score;
}
