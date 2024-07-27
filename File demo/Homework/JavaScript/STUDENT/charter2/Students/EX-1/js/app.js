let post = {
    id: 1,
    title: "Natural in the world",
    image: "https://www.pure-leisure.co.uk/wp-content/uploads/2019/03/3-Reasons-Why-Conservation-Is-So-Important.jpg",
    description: "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid,",
    date: "14 / April / 2021",
    author: "Rady Cody"
};
//1. create div with class name "container" and append it to "body"
let body = document.querySelector('body');
let div1 = document.createElement('div');
div1.className='container';
body.appendChild(div1);

//2. create div with class name "card" and append it to "container" div
let div2 = document.createElement('div');
div2.className='card';
div1.appendChild(div2);

//3. create div with class name "card-img" and append it to "card" div
let div3 = document.createElement('div');
div3.className ='card-img';
div2.appendChild(div3);

//4. create img tags with class name "img", use "src" attribute to display image and append it to "card-img" div
// example: sample.src = post.image;
let img = document.createElement('img');
img.className ='img';
img.src = post.image;
div3.appendChild(img);

//5. create div with class name "card-body" and append it to "card" div
let div4 = document.createElement('div');
div4.className='card-body';
div2.appendChild(div4);

//6. create h2 tags with class name "card-title", textContent = post.title and append it to "card-body" div
let h2 = document.createElement('h2');
h2.className='card-title';
h2.textContent= post.title;
div4.appendChild(h2);

//7. create p tags with class name "description",
// textContent = post.description
let p = document.createElement('p');
p.className ='description';
p.textContent = post.description;

// and then apppend it to "card-body" div
div4.appendChild(p);

//8. create div with class name "card-footer" and append it to "card" div
let div5 = document.createElement('div');
div5.className = 'card-footer';
div2.appendChild(div5);

//9. create span tags with id name "date", textContent = post.date and append it to "card-footer" div 
let span1 = document.createElement('span');
span1.setAttribute("id","date");
span1.textContent=post.date;
div5.appendChild(span1);

//10. create span tags with id name "author", textContent = post.author  and append it to "card-footer" 
let span2 = document.createElement('span');
span2.setAttribute('id','author');
span2.textContent = post.author;
div5.appendChild(span2);