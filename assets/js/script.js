const hamburger=document.querySelector(".hamburger");
const mobileMenu=document.querySelector(".mobile-menu");

if(hamburger){
hamburger.addEventListener("click",()=>{
mobileMenu.classList.toggle("open");
});
}

const cards=document.querySelectorAll(".practice-card");
const modal=document.getElementById("modal");

const modalImage=document.getElementById("modal-image");
const modalTitle=document.getElementById("modal-title");
const modalText=document.getElementById("modal-text");

const closeModal=document.querySelector(".close-modal");

const practiceData={

construction:{
title:"Construction Law",
image:"assets/images/construction.jpg",
text:"Advising contractors and developers on construction disputes."
},

commercial:{
title:"Commercial Transactions",
image:"assets/images/commercial.jpg",
text:"Structuring complex commercial agreements."
},

arbitration:{
title:"Arbitration",
image:"assets/images/arbitration.jpg",
text:"International arbitration representation."
},

litigation:{
title:"Litigation",
image:"assets/images/litigation.jpg",
text:"Strategic dispute resolution in court."
}

};

cards.forEach(card=>{
card.addEventListener("click",()=>{
let key=card.dataset.modal;

modalImage.src=practiceData[key].image;
modalTitle.textContent=practiceData[key].title;
modalText.textContent=practiceData[key].text;

modal.style.display="flex";

if(typeof gsap!=="undefined"){
gsap.from(".modal-content",{scale:0.8,opacity:0,duration:0.4});
}

});
});

if(closeModal){
closeModal.addEventListener("click",()=>{
modal.style.display="none";
});
}

const teamModal=document.querySelector(".team-modal");
const openTeam=document.querySelector(".open-team");
const closeTeam=document.querySelector(".close-team");

if(openTeam){
openTeam.addEventListener("click",()=>{
teamModal.style.display="flex";
});
}

if(closeTeam){
closeTeam.addEventListener("click",()=>{
teamModal.style.display="none";
});
}

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/height)*100;

document.querySelector(".scroll-progress").style.width=progress+"%";

});

document.querySelector(".scroll-top").addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

document.querySelector(".floating-contact")
.addEventListener("click",()=>{

document.querySelector("#contact")?.scrollIntoView({
behavior:"smooth"
});

});