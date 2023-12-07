const watches = [
  {
    id: 1,
    name: "Classic Elegance",
    description:
      "A timeless watch with a classic design, perfect for any occasion.",
    price: 199.99,
    image: "../images/Slider/Slider1.jpg",
  },
  {
    id: 2,
    name: "Sporty Chronograph",
    description:
      "For the active individual, this sporty chronograph combines style and functionality.",
    price: 249.99,
    image: "../images/Slider/Slider2.jpg",
  },
  {
    id: 3,
    name: "Modern Minimalism",
    description:
      "Embrace simplicity with this modern minimalist watch, a statement of contemporary style.",
    price: 159.99,
    image: "../images/Slider/Slider3.jpg",
  },
  {
    id: 4,
    name: "Dive Master",
    description:
      "Explore the depths with the Dive Master, a water-resistant watch built for underwater adventures.",
    price: 299.99,
    image: "../images/Slider/Slider4.jpg",
  },
  {
    id: 5,
    name: "Aviator Series",
    description:
      "Take flight with the Aviator Series, inspired by the precision instruments of aviation.",
    price: 219.99,
    image: "../images/Slider/Slider5.jpg",
  },
  {
    id: 6,
    name: "City Explorer",
    description:
      "Navigate urban landscapes with the City Explorer, featuring a sleek design and multiple time zones.",
    price: 179.99,
    image: "../images/Slider/Slider6.jpg",
  },
  {
    id: 7,
    name: "Rose Gold Elegance",
    description:
      "Elevate your style with the Rose Gold Elegance, a sophisticated watch with a touch of luxury.",
    price: 269.99,
    image: "rose_gold_elegance.jpg",
  },
  {
    id: 8,
    name: "Smart Tech Companion",
    description:
      "Stay connected with the Smart Tech Companion, a watch that seamlessly integrates with your devices.",
    price: 329.99,
    image: "smart_tech_companion.jpg",
  },
  {
    id: 9,
    name: "Vintage Explorer",
    description:
      "Embrace the charm of the past with the Vintage Explorer, a watch that captures the essence of bygone eras.",
    price: 189.99,
    image: "vintage_explorer.jpg",
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
                <h2>${product.name}</h2>
                <h4><span>$</span>${product.price.toFixed(2)}</h4>
                <p>${product.description}</p>                    
                <img src="${product.image}" alt="${
      product.name
    }" style="max-width: 300px;">
            `;
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

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = watch.description;

  const priceParagraph = document.createElement("p");
  priceParagraph.textContent = `Price: $${watch.price.toFixed(2)}`;

  // Add more details or styles as needed

  // Append elements to the card
  cardDiv.appendChild(img);
  cardDiv.appendChild(nameHeader);
  cardDiv.appendChild(descriptionParagraph);
  cardDiv.appendChild(priceParagraph);

  return cardDiv;
}
