// checkImages.js
const fs = require("fs");
const path = require("path");
const products = require("./src/data/newProducts.js");

// Define the path where images are stored
const imageDir = path.join(__dirname, "public");

// Function to check for missing images
function checkMissingImages() {
  const missingImages = [];

  products.forEach((product) => {
    const imagePath = path.join(imageDir, product.image);

    if (!fs.existsSync(imagePath)) {
      missingImages.push(product.name);
    }
  });

  if (missingImages.length > 0) {
    console.log("Products with missing images:");
    missingImages.forEach((productName) => console.log(productName));
  } else {
    console.log("All products have associated images.");
  }
}

// Execute the function
checkMissingImages();
