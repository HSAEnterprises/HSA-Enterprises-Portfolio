// ==============================
// HSA Enterprises Portfolio
// script.js
// ==============================

// ==============================
// SCROLL ANIMATION
// ==============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

sections.forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});


// ==============================
// HEADER SHADOW
// ==============================

window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";
  } else {
    header.style.boxShadow = "none";
  }

});


// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    nav.classList.toggle("show-menu");

  });

}


// ==============================
// PROJECT MODAL
// ==============================

const modal = document.querySelector(".project-modal");

if (modal) {

  document.querySelectorAll(".view-project").forEach((btn) => {

    btn.addEventListener("click", function (e) {

      e.preventDefault();

      document.getElementById("modal-title").innerText = this.dataset.title;
      document.getElementById("modal-description").innerText = this.dataset.description;
      document.getElementById("modal-image").src = this.dataset.image;

      modal.style.display = "flex";

    });

  });

  const closeBtn = document.querySelector(".close-modal");

  if (closeBtn) {

    closeBtn.addEventListener("click", () => {

      modal.style.display = "none";

    });

  }

  window.addEventListener("click", (e) => {

    if (e.target === modal) {

      modal.style.display = "none";

    }

  });

}


// ==============================
// TESTIMONIAL SLIDER
// ==============================

const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {

  let current = 0;

  setInterval(() => {

    testimonials[current].classList.remove("active");

    current = (current + 1) % testimonials.length;

    testimonials[current].classList.add("active");

  }, 4000);

}


// ==============================
// FAQ
// ==============================

document.querySelectorAll(".faq-question").forEach((question) => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if (answer.style.display === "block") {

      answer.style.display = "none";

    } else {

      answer.style.display = "block";

    }

  });

});


// ==============================
// EMAILJS
// ==============================

emailjs.init("sjuwfOnyjgPpyBULR");

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    formStatus.innerHTML = "Sending...";
    formStatus.style.color = "#d4af37";

    emailjs.sendForm(
      "service_28u5z9c",
      "template_yyexrrh",
      this
    )

    .then(() => {

      formStatus.innerHTML = "✅ Message sent successfully!";
      formStatus.style.color = "#4CAF50";

      contactForm.reset();

    })

    .catch((error) => {

      console.error(error);

      formStatus.innerHTML = "❌ Failed to send message.";
      formStatus.style.color = "#ff4d4d";

    });

  });

}
// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

});
// Progress Bar

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=
progress+"%";

});
// Counter Animation

const counters=document.querySelectorAll(".stat-card h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=counter.innerText;

const num=parseInt(target);

if(!isNaN(num)){

let current=0;

const update=()=>{

current+=Math.ceil(num/40);

if(current>=num){

counter.innerText=target;

}else{

counter.innerText=current+"+";

requestAnimationFrame(update);

}

};

update();

}

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));
// ===============================
// Active Navigation
// ===============================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

document.querySelectorAll("section").forEach(section => {

const sectionTop = section.offsetTop - 120;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});
// ===========================
// Scroll To Top
// ===========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// Cursor Glow

const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});
