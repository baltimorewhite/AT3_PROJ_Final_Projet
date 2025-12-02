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


const form = document.querySelector("#contact form");

    form.addEventListener("submit", function(event) {
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name === "" || email === "" || message.length < 30) {
      event.preventDefault();
      alert("Please complete each field or write a longer message.");
    }
  });