console.log("welcome to tic tac toe");
let music=new Audio("https://www.storyblocks.com/audio/stock/drum-bongo-single-hit-sgyqit2hiwsk0wxv1gl.html");
let turnmusic= new Audio("https://directory.audio/sound-effects/cartoon/957-instrument-strum");
let gameover=new Audio("https://www.storyblocks.com/audio/stock/drum-bongo-fast-beat-henzj6h2uwbk0wxv1dm.html");
let turn="X";
let isgameover = false;
//function to change turn
const changeturn=()=>{
    return turn==="X"?"0":"X";
}
//funcuion to check for a win
const checkwin =()=>{
    let boxtext=document.getElementsByClassName('boxtext');
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e =>{
if((boxtext[e[0]].innerText=== boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText=== boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won"
isgameover=true;
document.querySelector('.img').getElementsByTagName('img')[0].style.width="50px";
}
});
};

//main logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
 let boxtext=element.querySelector('.boxtext');
 element.addEventListener('click',(e)=>{
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
        turn=changeturn();
        turnmusic.play();
        checkwin();
        if(!isgameover){
        document.getElementsByClassName("info")[0].innerText="turn for " +turn;
        }
    }
 })
})
//reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn="X";
    isgameover=false
        document.getElementsByClassName("info")[0].innerText="turn for" +turn;
        document.querySelector('.img').getElementsByTagName('img')[0].style.width="0px";      
})