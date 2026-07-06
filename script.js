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
