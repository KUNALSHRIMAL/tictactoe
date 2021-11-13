console.log("Welcome to tic tac too");
let music=new Audio("./img/music.mp3");
let go=new Audio("./img/gameover.mp3");
let aturn=new Audio("./img/ting.mp3");
var p1=prompt("enter 1st player name");
var p2=prompt("Enter second player name");

let turn=p1;
let tu="x";
let gameover=false;
const changeturn =()=>{
    return turn === p1?p2:p1;
    
}
const chinbox =()=>{
    return tu === "x"?"0":"x";
}

const checkwin=()=>{
    let boxtext =document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,5,15],
        [6,7,8,5,15,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON";
            gameover=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            // document.querySelector(".line").style.width="25vw";
            // document.querySelector(".line").style.transform=`translate(${e[3]}vm,${e[4]}vm) rotate(${e[5]}deg)`;
        }
        
    })
}

// game logic
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext= element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            
            boxtext.innerText = tu;
            turn= changeturn();
            tu = chinbox();
            aturn.play();
            checkwin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }
        }
    }) 
})
//reset
reset.addEventListener('click', ()=>{
    let boxtext= document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText = "";
    })
    turn = p1;
    isgameover=false;

    tu="x";
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
        // document.querySelector(".line").style.width="0";
    
})