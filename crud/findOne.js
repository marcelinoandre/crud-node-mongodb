require('../connectionDB')

const Product = require('../models/Product')

async function main(){
    const product = await Product.findOne({_id:'5f3c9504b79fa847a53e76a4'})

    console.log(product)
}

main()