// ==================== Countdown ====================
const countdownDate = new Date("September 4, 2025 00:00:00").getTime();
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if(distance < 0){
    document.getElementById("timer").innerHTML = "🎉 Happy Birthday Goluu! 🎂";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// ==================== Confetti ====================
const confettiBtn = document.getElementById("confettiBtn");
if(confettiBtn){
  confettiBtn.addEventListener("click", () => {
    confetti({ particleCount: 150, spread:70, origin:{y:0.6} });
  });
}

// ==================== Music ====================
const music = document.getElementById("bgMusic");
const startMusic = () => music.play().catch(()=>console.log("Autoplay blocked"));
document.body.addEventListener("click", startMusic, {once:true});

// ==================== Candle Blow ====================
function blowCandle(el){ el.classList.add("out"); }

// ==================== Scroll Animations ====================
const scrollElements = document.querySelectorAll(".scroll-animate, .photos figure, .wish-card, .cake");
const observerOptions = { root:null, rootMargin:"0px", threshold:0.2 };
const scrollObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
scrollElements.forEach(el=>scrollObserver.observe(el));

// ==================== Floating Hearts ====================
const heartsContainer = document.querySelector(".hearts");
if(heartsContainer){
  for(let i=0;i<30;i++){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (4+Math.random()*3) + "s";
    heart.style.opacity = Math.random();
    heartsContainer.appendChild(heart);
  }
}

// ==================== Navbar Hamburger ====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
if(hamburger){
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("active");
  });
}
