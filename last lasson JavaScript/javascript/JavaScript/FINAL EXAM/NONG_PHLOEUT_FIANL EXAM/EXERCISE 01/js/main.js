let card = document.createElement('div');
card.className = 'card';

let img = document.createElement('img');
img.src = 'image/image.jpg';

card.appendChild(img);

let text = document.createElement('p');
text.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat quas impedit rem labore animi itaque dignissimos earum! Rem, harum reprehenderit? A quaerat quas amet earum ipsam placeat recusandae corrupti?";

let link = document.createElement("a");
link.setAttribute("href","https://www.w3schools.com/");
link.textContent = "Google";

text.appendChild(link);
card.appendChild(text);
let body = document.body.appendChild(card);
