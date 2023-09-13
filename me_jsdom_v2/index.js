console.log("Hello, from JS!");
let innerText=document.querySelector("h1").textContent
console.log(innerText)
let practice=document.getElementsByTagName("h1")[0].innerText
console.log(practice);
document.getElementsByTagName("h1")[0].innerText="Practicing DOM Manipulation"