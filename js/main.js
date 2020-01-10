// this is a self invoking anonymous function
// also called an IIFE


(() => {
  console.log('hello from javaScript!');

  // find elements in the Document
let toggleButton = document.querySelector(".switch-text"),
  myHeading = document.querySelector('h1')
  svgImg = document.querySelector("#badge");

// this function chages heading
function changeText() {
  myHeading.textContent = "What is up? I am Scrript";
}

// this function should log the id for each svg to the console
function logSVG() {
  console.log(this.id);
}

toggleButton.addEventListener("click", changeText);
svgImg.addEventListener("mouseover", logSVG);


//  document.querySelector('h1').textContent = "What is up? I am Scrript"
})();
