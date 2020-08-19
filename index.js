const DB = require('./connectionDB')

const Product = require('./models/Product')

const product = new Product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carbon 6th genaration',
    price: 2450.98
})


product.save((err, document) =>{
    if(err) console.log('deu erro :(')

    console.log(document)
})

console.log(product)