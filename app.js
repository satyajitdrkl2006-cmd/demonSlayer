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

let index=0;

const slides = document.querySelectorAll(".slides img");
let l=slides.length;

const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");


function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

//left
prevBtn.addEventListener("click",()=>{
    if(index<=0){
        index=l-1;
        showSlide(index);
        console.log(index);
        
    }
    else{
    index--;
    showSlide(index);
    }
    

})
function next(){
   
    if(index>=l-1){
        index=0;
        showSlide(index);
        console.log(index);
        
    }else{
        
    index++;
            console.log(index,"by else");

    showSlide(index)}

}
nextBtn.addEventListener("click",()=>{
    next();
});

// setInterval(next,6000);

