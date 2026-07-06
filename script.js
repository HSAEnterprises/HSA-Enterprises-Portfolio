// Smooth animation on scroll

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, {
  threshold:0.2
});

sections.forEach(section=>{
  section.classList.add("hidden");
  observer.observe(section);
});

// Header shadow on scroll

window.addEventListener("scroll",()=>{
  const header=document.querySelector("header");

  if(window.scrollY>50){
    header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";
  }else{
    header.style.boxShadow="none";
  }
});
// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("show-menu");

});
const modal=document.querySelector(".project-modal");

document.querySelectorAll(".view-project").forEach(btn=>{

btn.onclick=(e)=>{

e.preventDefault();

document.getElementById("modal-title").innerText=btn.dataset.title;

document.getElementById("modal-description").innerText=btn.dataset.description;

document.getElementById("modal-image").src=btn.dataset.image;

modal.style.display="flex";

};

});

document.querySelector(".close-modal").onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target==modal){

modal.style.display="none";

}

};
// Testimonial Slider

const testimonials = document.querySelectorAll(".testimonial");

let current = 0;

setInterval(() => {

testimonials[current].classList.remove("active");

current = (current + 1) % testimonials.length;

testimonials[current].classList.add("active");

}, 4000);

// FAQ

document.querySelectorAll(".faq-question").forEach(question=>{

question.onclick=()=>{

const answer=question.nextElementSibling;

answer.style.display=
answer.style.display==="block"?"none":"block";

};

});
