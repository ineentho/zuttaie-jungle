const previous=document.querySelector(".previous");
const next=document.querySelector(".next");
const current=document.querySelector(".current");
const slides = ['screenshots/2015-06-23-01.jpg','screenshots/bluearrow.jpg','screenshots/pensharpener.jpg','screenshots/pixelemerald.jpg'];
const lefta=document.querySelector(".lefta");
let currentimg=2;
lefta.addEventListener("click",function(){
    currentimg--;
    images();
});
const righta=document.querySelector(".righta");

righta.addEventListener("click",function(){
    currentimg++;
    images();
});
document.body.addEventListener("keydown",function(e){
    if (e.keyCode==37){
        currentimg--;
        images();
    }
    if (e.keyCode==39){
        currentimg++;
        images();
     }
})
function images()
{
    previous.src = slides[currentimg-1]
    current.src = slides[currentimg]
    next.src = slides[currentimg+1]
}
images();