allLineThrough = () => {
	document.getElementById('all').className += 'linethrough';
	document.getElementById('some').setAttribute("style", "display: initial;")	
}
someLineThrough = () => {
	document.getElementById('some').classList.add('linethrough');
	document.getElementById('one').setAttribute("style", "display: initial;")
}
oneLineThrough = () => {
	document.getElementById('one').classList.add('linethrough');
	document.getElementById('your').classList.add('linethrough');
	document.getElementById('ok').setAttribute("style", "display: initial;")
}

var functions = [allLineThrough, someLineThrough, oneLineThrough];
var i = 0;

callsFunctions = () => {
	functions[i++]();
	if (i < functions.length) 
	setTimeout(callsFunctions, 3000);	
} 

setTimeout(callsFunctions, 1500);


var mainText = document.querySelector(".main_text");
var aboutSection = document.querySelector(".about_section");
var showAbout = document.querySelector(".display_about");
var showMain = document.querySelector(".display_main");

displayAboutText = () => {
	mainText.classList.add('hidden')
	aboutSection.classList.remove('hidden')
}

displayMainText = () => {
	aboutSection.classList.add('hidden')
	mainText.classList.remove('hidden')
	callsFunctions()
}

showAbout.addEventListener('click', displayAboutText)
showMain.addEventListener('click', displayMainText)
