



let sided = document.querySelector("#sided");
let content = document.querySelector("#content");
let menubut = document.querySelector("#menubut");
let drop = document.querySelector("#drop");
let lidrop = document.querySelector("#lidrop");
let epi = document.querySelector("#epi");



menubut.addEventListener('click', function () {
	sided.classList.toggle("openn");
	menubut.classList.toggle("butopen");
	content.classList.toggle("contmove")
})

document.addEventListener("click", function () {
	if (drop.classList.contains('show') == false) {
		epi.classList.remove('underdrop');
	} else if (drop.classList.contains('show') == true) {
		epi.classList.add('underdrop');
	}
})
