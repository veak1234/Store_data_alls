// Function ========================================
function addCard() {
  let card = document.createElement("div");
  card.className = "card";

  let image = document.createElement("img");
  image.src = "image/image.jpg";

  let a = document.createElement("a");
  a.href = "https://www.w3schools.com/";
  a.textContent = "Google";

  let p = document.createElement("p");
  p.textContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat quas impedit rem labore animi itaque dignissimos earum! Rem, harum reprehenderit? A quaerat quas amet earum ipsam placeat recusandae corrupti?";
  p.append(a);

  card.appendChild(image);
  card.appendChild(p);

  document.body.appendChild(card);
}

// Main ==============================================
addCard();
