//////////////get element by childeelement to parentElement:>

// let container = document.querySelector(".container");
// console.log(container);
// console.log(container.firstElementChild);
// console.log(container.firstElementChild.firstElementChild);
// console.log(container.firstElementChild.firstElementChild.firstElementChild.textContent);

//////////////get element by parentElement to childeelement:>

// let h1 = document.querySelector("h1");
// console.log(h1);
// console.log(h1.parentElement)
// console.log(h1.parentElement.parentElement)
// console.log(h1.parentElement.parentElement.parentElement.parentElement.parentElement);

//////////////get element by first to nextesibling

// let h1 = document.querySelector(".title_1");
// console.log(h1.nextElementSibling);
// console.log(h1.nextElementSibling.firstElementChild.textContent);

//////////////get element by next to firstelement:> us siblings

let h2 = document.querySelector(".title_2");
h2.textContent="title_2"
console.log(h2.previousElementSibling);
// console.log(h2.previousElementSibling.firstElementChild.textContent);

//////////////get element by next to nextelement:>

// let main = document.querySelector(".main");
// console.log(main);
// console.log(main.children[1]);

// let main = document.querySelector(".main");
// console.log(main);
// console.log(main.children.item(1));


// let main = document.querySelector(".main");
// console.log(main);
// console.log(main.childNodes);

const container = document.querySelector(".container");
console.log(container.closest(".container"));


//// create element
// let container =document.querySelector(".container");
// let paragraph = document.createElement("p");
// paragraph.textContent ="hello world";
// container.appendChild(paragraph)
// // console.log(container);

// let container =document.querySelector(".container");
// let paragraph = document.createElement("p");
// paragraph.textContent ="hello world1";
// container.appendChild(paragraph);
// console.log(container);


// let container = document.querySelector (".container");
// // console.log(container)
// let paragraph = document.createElement("p");
// paragraph.textContent = "hello "
// container.appendChild(paragraph)

// createImage

// const container = document.querySelector('.container');

// const image = document.createElement('img');
// image.src = "javascript.png";
// container.appendChild(image)
// console.log(image);

// add link
// const achor = document.createElement('a');
// achor.href = 'http://www.youtube.com';
// achor.textContent="youtube"
// container.appendChild(achor);

// creat div class id ///////

// const div = document.createElement('div');
// div.className="container";
// div.classList.add('other-container'); //use this can remove and add
// div.classList.remove("container");
// console.log(div)

///create class list
// let create = document.createElement("div");
// create.classList.add('other-container');
// console.log(create.textContent="hello world!")

// let createName = document.createElement("div");
// createName.className = ('other-container');
// console.log(createName);

//create id 
// let createId = document.createElement("div");
// createId.setAttribute("id","createId");
// console.log(createId);

// can create all//////

// const div = document.createElement('div');
// // div.setAttribute('id','my-id')
// div.setAttribute('class','my-class');
// console.log(div)

// let image = document.createElement("img");
// image.src = "javascript.png";
// image.style.width="200px";
// document.body.appendChild(image)
