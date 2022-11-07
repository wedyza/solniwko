let display;
let index = 0;
let blogs;
let sendButton;
let photoBlock;

document.addEventListener('DOMContentLoaded', ready);

function addBlog(){
	index++;
	let anotherBlog = document.createElement("p");
	anotherBlog.className = "newBlog";
	let blogNumber = document.createTextNode(`Блог №${index}: `)
	let text = document.createTextNode(display.value);
	anotherBlog.appendChild(blogNumber);
	anotherBlog.appendChild(text);
	blogs.appendChild(anotherBlog);
	toClear();
}

document.addEventListener('keydown', (e) => {
	if (e.keyCode == 13){
		addBlog();
	}
	console.log('im working');
})

function toClear(){
	display.value = '';
}

function ready(){
	display = document.querySelector('#comment');
	blogs = document.querySelector('#blogi');
	sendButton = document.querySelector('#sendButton');
	photoBLock = document.querySelector('#photo');
}

function readFile(input){
	let reader = new FileReader();
	
	let file = input.files[0];

	reader.readAsText(file);

	reader.onload = () => {
		index++;
		let text = document.createTextNode(reader.result);
		let blogNumber = document.createTextNode(`Блог №${index}: `);
		let anotherBlog = document.createElement("p");		
		anotherBlog.appendChild(blogNumber);
		anotherBlog.appendChild(text);
		anotherBlog.className = "newBlog";
		blogs.appendChild(anotherBlog);
	}
}

function readPhotos(input){
	let reader = new FileReader();

	let file = input.files[0];

	reader.readAsDataURL(file);
	console.log(file);
	reader.onload = () => {
		let tag = document.createElement("img");
		tag.className = "newPhoto";
		tag.src = reader.result;
		photoBLock.appendChild(tag);
	}
}