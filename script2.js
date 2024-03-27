
let turn="X";
const change=()=>{
    return turn==="X"?"0":"X";
}
let isgameover=false;
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let turntext=document.getElementsByClassName('info')[0];
    let boxtext=element.querySelector('.text');
   element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            let pt=turn;
            turn=change();
            cw();
            turntext.innerHTML=turn+" Turn";
            if(isgameover){
                alert(pt+" WON ");
                for(let i=0;i<boxes.length;i++){
                    boxes[i].innerHTML='';
                }
            }
        }
    })
})
const cw=()=>{
    let boxtexts=document.getElementsByClassName('text');
    let wins=[
        [0,1,2]
        ,[3,4,5]
        ,[6,7,8]
        ,[0,3,6]
        ,[1,4,7]
        ,[2,5,8]
        ,[0,4,8]
        ,[2,4,6],
    ];
    wins.forEach(e=>{
        if(boxtexts[e[0]].innerHTML!==''&&boxtexts[e[1]].innerHTML!==''&&boxtexts[e[2]].innerText!==''&&(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)){
            isgameover=true;
            turn='X'
        }
    })
}
function fun(){
    for(let i=0;i<boxes.length;i++){
        boxes[i].innerHTML='';
    }
}