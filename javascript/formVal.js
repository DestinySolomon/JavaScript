const form = document.getElementById("myForm");
const nameInput = document.getElementById("fname");
const email = document.getElementById("email");


// const nameError = document.getElementById("nameError");
// const successMessage = document.getElementById("successMessage");


const result = document.createElement("p");
form.appendChild(result);




form.onsubmit = (event) =>{
  event.preventDefault();


  const nameValue = nameInput.value.trim();

 


}