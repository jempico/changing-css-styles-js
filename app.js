 /*1. First select all the inputs:*/

 const inputs = document.querySelectorAll(".controls input");
 const image = document.querySelector("img");
 const hl = document.querySelector(".hl");

 /*2. Create a function that updates each input. This function will grab the input value ("this.value"), attach it the corresponding measurement unit ("px" or nothing at all) and change the style of the corresponding element.*/

function triggerChange() {
  if (this.name == "padding") {
  image.style.padding = `${this.value}px`;
} else if (this.name == "blur") {
  image.style.filter = `blur(${this.value}px)`;
} else if (this.name == "base") {
  image.style.background = `${this.value}`;
  hl.style.color = `${this.value}`;
}
}

  /*3. Let's add an event listener for each element, so as to trigger the changes above whenever we change the input.
  We are using the forEach method to add the event listener because using "querySelectorAll" retrieves a nodelist.*/


 inputs.forEach(input => input.addEventListener('change', triggerChange)); 
 inputs.forEach(input => input.addEventListener('mousemove', triggerChange)); 

  