// this is a self invoking anonymous function
// also called an IIFE

//console.log('hello from javaScript!');

// find elements in the Document
// querySelectorAll is for multiple objects
// querySelector is for a single object

// function changeColor() {
	//allIcons.textContent = "What is up? I am Script"; }

//allIcons.forEach(item => item.addEventListener("click",changeColor));

//  document.querySelector('h1').textContent = "What is up? I am Scrript"

//  (() => { })();

(() => {


let // this is a variable
	allIcons = document.querySelector(".cls-1"),
	//allIcons = document.querySelectorAll(".cls-1"),
	//allIcons = document.getElementsByClassName(".cls-1"),

	black = document.querySelector(".black"),
	pink = document.querySelector(".pink"),
	yellow = document.querySelector(".yellow"),
	green = document.querySelector(".green"),
	purple = document.querySelector(".purple"),
	blue = document.querySelector(".blue");



// when you click on the icon divs it runs change color function
	black.addEventListener("click", changeColor);
	pink.addEventListener("click", changeColor);
	yellow.addEventListener("click", changeColor);
	green.addEventListener("click", changeColor);
	purple.addEventListener("click", changeColor);
	blue.addEventListener("click", changeColor);

// changes color of all icons
	function changeColor() { allIcons.style.fill = 'red'; };


})();
