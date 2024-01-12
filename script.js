const slides=document.querySelectorAll(".slide");
const next=document.querySelector("#next");
const prev=document.querySelector("#prev");
// auto is for auto slide, intervaltime=5000 is for auto slide in 5 seconds
const auto=true;
const intervalTime=5000;



// next function
const nextslide=()=>
{
    const slide=document.querySelector(".current");
    slide.classList.remove("current");
    // check for next slide if present or not
    if(slide.nextElementSibling)
    {
        // if true then add current to next sibling
        slide.nextElementSibling.classList.add("current");
    }
    else
    {
        slides[0].classList.add("current");
    }
}
const prevslide=()=>
{
    const slide=document.querySelector(".current");
    slide.classList.remove("current");
    if(slide.previousElementSibling)
    {
       slide.previousElementSibling.classList.add("current");
    }
    else
    {
        slides[slides.length-1].classList.add("current");
    }
}
next.addEventListener("click",()=>
{
    nextslide();
    if(auto)
    {
        clearInterval(returnedId);
        returnedId=setInterval(nextslide,intervalTime);
    }
});
prev.addEventListener("click",()=>
{
    prevslide();
    if(auto)
    {
        clearInterval(returnedId);
        returnedId=setInterval(nextslide,intervalTime);
    }
})




// lets add auto sliding option


// if automatic slide is true then
if(auto)
{
    // use js setInterval function to call nextslide function we created after every 5 sec(intervalTime)
    var returnedId=setInterval(nextslide,intervalTime);
}