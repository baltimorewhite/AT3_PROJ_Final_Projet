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

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate Email using Regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    }

    if (isValid) {
        alert('Form submitted successfully!');
        
    }
    if (isValid) {
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
  }
});