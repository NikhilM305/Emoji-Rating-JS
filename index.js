const starsEl=document.querySelectorAll(".fa-star")
const emojisEl=document.querySelectorAll(".fa-regular")
const emojicontainer=document.querySelector(".emoji-container")
const colorsArray=["red","orange","lightblue","lightgreen","green"];
// console.log(emojicontainer)
console.log(emojicontainer.children)
// console.log(emojicontainer.childNodes)


updateRating(0)
starsEl.forEach((starEL,index)=>{
starEL.addEventListener("click",()=>{
    
updateRating(index)
})

})

function updateRating(index){
starsEl.forEach((starEl,idx)=>{
if(idx<index+1){
    starEl.classList.add("active")
}
else{
    starEl.classList.remove("active")
}

})
// emojisEl.forEach((emojiEl)=>{
//     emojiEl.style.transform=`translateX(${index* -50 +"px"})`;
// })
for(let i=0;i<emojicontainer.children.length;i++){
    emojicontainer.children[i].style.transform=`translateX(${index* -50 +"px"})`;
    emojicontainer.children[i].style.color=colorsArray[index];
    
}



}