
# Sidebar project
## The main point
	At first I want to remind some **targets** of this work :
	+ I begun this project to understand how to make responsive sidebars in web-design. But then, just in process, I made a little bit more :
	  + I learned how to make 'anchors' right on the page of the website
	  + I made the menu reacting on actions on the page thanks to adding this anchors
	  + I practiced a lot in positioning of the elements 
	What about other aspects of making this project, they r pretty simpleto do, so that's not important exactly there.
___

## A little about what exactly I learned
	**How to make a sidebar with `<nav>` tag**:
	1.Add to all elements of the navbar properties *d-flex*, *flex-column*: 
	```html
		<nav class="navbar navbar-expand d-flex flex-column align-item-start navbar-dark bg-dark h-100 fixed-top" id="sided">
		...
		<div class="navbar-brand text-center d-flex flex-column mt-5">
		...
		<ul class="navbar-nav navbar-collapse d-flex flex-column w-100 mt-3" id="side">
	```
	2.Give a fixed width of the sidebar to make it perfectly working with animation of appearing/disappearing:
	```css
		.navbar {
			width: 220px;
			margin-left: -220px;
			transition: 0.4s;
			overflow: scroll;
		}	
	```
	3.Add a special `<button>`, which will work with this animation:
	```html
		<button class="fixed-top" id="menubut"><span><i class="fa-solid fa-bars"></i></span></button>
	```
	
	```js
		menubut.addEventListener('click', function () {
			sided.classList.toggle("openn");
			menubut.classList.toggle("butopen");
			content.classList.toggle("contmove")
		})
	```

	**How exactly to make anchors **:
	1.Give the id to the element on the page wich we need to make an anchor. In my case, that's the div with some text. 
	```html
		<div class="text-center col-10 offset-1" id="storybeg">
	``` 
	2. Then we have to give to property *href* of the link, wich we want to make working with our anchor, the value #*id of the element*:   
	```html
		<a href="#storybeg" class="nav-link">prologue</a>
	```

	**How to make menu scrolling while scrolling the page, thanks to anchors**
	1.Give some *id* to the navbar element:
	```html
		<nav class="navbar navbar-expand d-flex flex-column align-item-start navbar-dark bg-dark h-100 fixed-top" id="sided">
	```
	2.Give to tag `<body>` such properties:
	```html
		<body data-bs-spy="scroll" data-bs-target="#sided" data-bs-offset="100" tabindex="0">
	```

