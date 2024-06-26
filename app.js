let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn =document.querySelector("#newbtn");
let msg = document.querySelector("#Winner");
let msgContainer=document.querySelector(".msg-container");
let turnO = true;
let count = 0;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const drawgame = () =>{
    if (count == 9){
    msg.innerText= `Game Draw`;
    msgContainer.classList.remove("hide");

    }
}

const resetgame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO){
            box.innerText="O";
            turnO = false;
            count ++;
        }
        else{
            box.innerText="X";
            turnO = true;
            count ++;
        }
        box.disabled = true;
        checkwinner();
    })
});

const enableboxes = () =>{
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText="";
    })
}

const disableBoxes = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
    })
}
const showWinner =(winner)=>{
msg.innerText= `Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
}

const checkwinner = ()=>{
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val ){
             showWinner(pos1val);  
            }
            else{
                drawgame();
            }
            
        }
    }

};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click",resetgame);

