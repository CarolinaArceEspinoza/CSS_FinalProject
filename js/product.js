const watches = [
  {
    id: 1,
    name: "Delicatta Golden",
    description:
      "A timeless watch with a classic design, perfect for any occasion.",
    price: 199.99,
    image: "../images/Slider/Classic1.jpg",
  },
  {
    id: 2,
    name: "Modern Minimalism",
    description:
    "Embrace simplicity with this modern minimalist watch, a statement of contemporary style.",
    price: 249.99,
    image: "./images/Slider/Executive1.jpg",
  },
  {
    id: 3,
    name: "Sporty Chronograph",
    description:
      "For the active individual, this sporty chronograph combines style and functionality.",
    price: 159.99,
    image: "./images/Slider/Sport1.jpg",
  },
  {
    id: 4,
    name: "Black Aviator Classic",
    description:
      "Take flight with the Black Aviator, inspired by the precision instruments of aviation.",
    price: 299.99,
    image: "../images/Slider/Classic2.jpg",
  },
  {
    id: 5,
    name: "Vintage Executive",
    description:
      "Embrace the charm of the past with the Vintage Executive, a watch that captures the essence of bygone eras.",
    price: 189.99,
    image: "./images/Slider/Executive2.jpg",
  },
  {
    id: 6,
    name: "Smart Tech Companion",
    description:
      "Stay connected with the Smart Tech Companion, a watch that seamlessly integrates with your devices.",
    price: 329.99,
    image: "./images/Slider/Sport2.jpg",
  },
  {
    id: 7,
    name: "Gold Elegance",
    description:
      "Elevate your style with the Gold Elegance, a sophisticated watch with a touch of luxury.",
    price: 269.99,
    image: "../images/Slider/Classic3.jpg",
  },
  {
    id: 8,
    name: "City Explorer",
    description:
      "Navigate urban landscapes with the City Explorer, featuring a sleek design and multiple time zones.",
    price: 179.99,
    image: "./images/Slider/Executive3.jpg",
  },
  {
    id: 9,
    name: "Dive Master",
    description:
      "Explore the depths with the Dive Master, a water-resistant watch built for underwater adventures.",
    price: 219.99,
    image: "./images/Slider/Sport3.jpg",
   
  },
 
];

document.addEventListener("DOMContentLoaded", function () {
  const productId = window.location.hash.substring(1);
  const product = getProductById(productId);
  displayProductInfo(product);
});

function getProductById(productId) {
  return watches.find((product) => product.id === parseInt(productId));
}

function displayProductInfo(product) {
  const productInfoDiv = document.getElementById("product-info");

  if (product) {
    productInfoDiv.innerHTML = `
                <figure><img src="${product.image}" alt="${product.name}"></figure>
                <div class="text" >
                <h2>${product.name}</h2>
                <h4><span>$</span>${product.price.toFixed(2)}</h4>
                <p>${product.description}</p>    
                <a href="./catalog.html" class="readMore">EXPLORE MODELS</a>                
                </div> `;
  } else {
    productInfoDiv.innerHTML = "<p>Product not found</p>";
  }
}

// Load Catalog

document.addEventListener("DOMContentLoaded", function () {
  const watchCatalogSection = document.getElementById("watch-catalog");

  // Loop through the watches array and create a card for each watch
  watches.forEach((watch) => {
    const watchCard = createWatchCard(watch);
    watchCatalogSection.appendChild(watchCard);
  });
});

function createWatchCard(watch) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "watch-card";

  const img = document.createElement("img");
  img.src = watch.image;
  img.alt = watch.name;

  const nameHeader = document.createElement("h2");
  nameHeader.textContent = watch.name;

  const priceParagraph = document.createElement("p");
  priceParagraph.textContent = `$${watch.price.toFixed(2)}`;
  

  const addToCart = document.createElement("a");
  addToCart.className = "readMore";
  addToCart.textContent = "See Details";
  addToCart.href = `./product.html#${watch.id}`;

  // Append elements to the card
  cardDiv.appendChild(img);
  cardDiv.appendChild(nameHeader);
  cardDiv.appendChild(priceParagraph);
  cardDiv.appendChild(addToCart);

  return cardDiv;
}