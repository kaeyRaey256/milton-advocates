// mobile nav

const hamburger=document.getElementById("hamburger")
const mobileNav=document.getElementById("mobileNav")

hamburger.onclick=()=>{

mobileNav.classList.toggle("open")

}



// reveal animation

const reveals=document.querySelectorAll(".reveal")

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible")

}

})

})

reveals.forEach(el=>observer.observe(el))
