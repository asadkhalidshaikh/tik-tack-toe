let boxes = document.querySelectorAll('.box');
let newgame = document.querySelector('#newgame');
let msg = document.querySelector('#msg');
let game = document.querySelector('.game');
let turnx = true;
const winpattern = [
    [0,1,2],
    [1,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener('click', function(){
        console.log("box was clickes");
        
        if(turnx){
            box.innerText ="X";
            turnx = false;

        }
        else{
            box.innerText ="O";
            turnx = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

function checkWinner(){
    for(pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
                disablebox();
            }
            
        }
    }
    
}
newgame.addEventListener('click', enablebox);

function showwinner(winner){
    msg.innerText = `Winner is ${winner}`;
    msg.classList.remove("hide");
    game.classList.add("hide");

}
function disablebox(){
    for (box of boxes){
        box.disabled = true;
    }
}
function enablebox(){
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        game.classList.remove("hide");
    }
}