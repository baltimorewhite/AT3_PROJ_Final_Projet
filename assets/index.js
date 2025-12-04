const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  const bars = hamburger.querySelectorAll("span");


  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden", "opacity-0", "-translate-y-10");
    menu.classList.add("opacity-100", "translate-y-0");
    hamburger.classList.toggle("bg-white");
  } else {
    menu.classList.remove("opacity-100", "translate-y-0");
    menu.classList.add("opacity-0", "-translate-y-10");
    hamburger.classList.toggle("bg-white");
    setTimeout(() => menu.classList.add("hidden"), 500);
  }

  bars[0].classList.toggle("rotate-48");
  bars[0].classList.toggle("translate-y-2");

  bars[1].classList.toggle("opacity-0");

  bars[2].classList.toggle("-rotate-48");
  bars[2].classList.toggle("-translate-y-2");
});

const moon = document.getElementById("moon");
const body = document.querySelector("body");

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
});





document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  let isValid = true;

  // Regex rules
  const nameRegex = /^[A-Za-zÀ-ÿ' -]{2,}$/; 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  const messageRegex = /^[A-Za-z0-9À-ÿ.,!?'"()\-:; ]{15,}$/;

  // Validate Name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  } else if (!nameRegex.test(name)) {
    document.getElementById('nameError').textContent = 'Valid name is required (only letters and basic characters)';
    isValid = false;
  }

  // Validate Email
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Valid email is required';
    isValid = false;
  }

  // Validate Message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message cannot be empty';
    isValid = false;
  } else if (!messageRegex.test(message)) {
    document.getElementById('messageError').textContent = 'Message must be at least 15 characters and use valid characters';
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
  }
});