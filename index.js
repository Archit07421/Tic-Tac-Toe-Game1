let boxes=document.querySelectorAll('.box');
let turnO=true;
let yourturn;
let msg_container =document.querySelector('.msg-container');
let new_game=document.querySelector('#newgame');
let message=document.querySelector('#msg');
let reset=document.querySelector('#Reset');

const winning_pattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO){
             yourturn="O";
            turnO=false; 
        }else{
             yourturn="X";
            turnO=true;
        }
        box.innerText=yourturn;
        box.disabled=true;

        checkWinner();
        
    });
});


const reset_game = ()=>{
    turnO=true;
    msg_container.classList.add("hide");
    enable_btn();

}

const disable_btn =()=>{
    for(let box of boxes){
        box.disabled= true;
    };
};

const enable_btn =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};

let getWinner=(winner)=>{
    message.innerText=`Congratulations ,Winner is: ${winner}`;
    msg_container.classList.remove("hide");
    disable_btn();
}

let checkWinner=()=>{
    for(let pattern of winning_pattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;


        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if (pos1val === pos2val && pos2val===pos3val){
                console.log('winner',pos2val);
                
                getWinner(pos2val);
                
                
            };
        };
    };


};

new_game.addEventListener('click',reset_game);
reset.addEventListener('click',reset_game );



