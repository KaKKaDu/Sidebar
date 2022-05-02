

let sided = document.querySelector("#sided");
let content = document.querySelector("#content");
let menubut = document.querySelector("#menubut");



menubut.addEventListener('click', function () {
	sided.classList.toggle("openn");
	menubut.classList.toggle("butopen");
	content.classList.toggle("contmove")
})