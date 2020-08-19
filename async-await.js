require("./connectionDB");

const Product = require("./models/Product");

async function main() {
  const product = new Product({
    name: "Teclado",
    description: "1 xx Teclado mecânico RGB Radgron",
    price: 350.51,
  });
  await product.save();
  console.log(product);
}


main()