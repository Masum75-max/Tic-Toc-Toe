let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");

let turn0=true;

const winPatterns=[
    [0,1,2], [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
     
];

disable=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
reset=()=>{
    for(bx of boxes){
        bx.innerText="";
        let winner=document.querySelector(".winner");
        winner.innerText="";
        bx.disabled=false;
    }
}
resetbtn.addEventListener("click",()=>{
        reset();
});


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn0==true){
        box.innerText="O";
        turn0=false;
       }
       else{
       box.innerText="X";
       turn0=true;
       }

       box.disabled=true;
     checkWinner();
    });
    const checkWinner=()=>{
      for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3 && pos3===pos1){
                let winner=document.querySelector(".winner");
                winner.innerText= `CONGRATS THE WINNER IS ${pos1} !!!!`;

              disable();
                
            }
        }
      }
    }

});