let display;
let index = 0;
let blogs;
let sendButton;


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
}

function readFile(input){
		let reader = new FileReader();
	console.log(input.length);
	for(let i = 0; i < input.length; i++){
		index++;
		reader.readAsText(input[i]);
		let text = document.createTextNode(reader.result);
		let blogNumber = document(`Блог №${index}: `)
		let anotherBlog = document.createElement("p");
		anotherBlog.appendChild(blogNumber);
		anotherBlog.appendChild(text);
		blogs.appendChild(anotherBlog);
	}
}