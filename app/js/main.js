const lefta=document.querySelector(".lefta");
lefta.addEventListener("click",function(){
    alert ("POPUP");
});
const righta=document.querySelector(".righta");
righta.addEventListener("click",function(){
    alert ("POPUP");
});

document.body.addEventListener("keydown",function(e){
    if (e.keyCode==37){
        alert ("left!");
    }
    if (e.keyCode==39){
        alert ("right!");
    }
})
