let x=0;
const label=document.querySelector("label");
const ball=document.querySelector(".ball");
const content=document.querySelector(".contentd");

label.addEventListener("click",()=>{
    
    if(x%2==0){
        
        ball.classList.add("on");
        content.classList.add("contentl");
    }else{
        ball.classList.remove("on");
        content.classList.remove("contentl");

      
    };
    x++;
})