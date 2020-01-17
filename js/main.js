// this is a self invoking anonymous function
// also called an IIFE


(() => {
  console.log('hello from javaScript!');

  // find elements in the Document
let toggleButton = document.querySelector(".switch-text"),
  //svgImg = document.querySelector("#badge1"),
  allSVGs = document.querySelectorAll(".svg"); // this is a variable

  // querySelectorAll is for multiple objects
  // querySelector is for a single object

// this function chages heading
function changeText() {
  myHeading.textContent = "What is up? I am Scrript";
}

// this function should log the id for each svg to the console
function logSVG() { // we created logSVG to log them in the console
  console.log(this.id);
}

// things a user can do to make things happen on the page
toggleButton.addEventListener("click", changeText);

// svgImg.addEventListener("click", logSVG);
// svgImg2.addEventListener("click", logSVG);

allSVGs.forEach(item => item.addEventListener("click",logSVG));

//  document.querySelector('h1').textContent = "What is up? I am Scrript"
})();
