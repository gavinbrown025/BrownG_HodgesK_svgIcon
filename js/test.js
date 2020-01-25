(() => {

// this is my module pattern also called IIFE
const 
	mySpan = document.querySelector('main span');
	theSVG = document.querySelector('object')


function toggleSelected() {
	//we want to ad some kind of indicator that someone has selected an icon

	this.classList.toggle('selected');
	//debugger;
}



// set up our triggers here
mySpan.addEventListener('click', toggleSelected);




})();