const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})


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