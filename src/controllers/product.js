const Product = require("../models/productsModel")
const shortId = require('shortid')
const sligify = require('slugify')
const { default: slugify } = require("slugify")

exports.createProduct = (req, res) => {

    const { name, price, description, offers, category, createdBy, quantity } = req.body

    let productPictures = []
    if (req.files.length > 0) {
        productPictures = req.files.map(file => {
            return {
                img: file.filename
            }
        })
    }

    const product = new Product({

        name: name,
        slug: slugify(name),
        price,
        description,
        productPictures,
        category,
        quantity,
        createdBy: req.user._id
    });

    product.save(((error, product) => {
        if (error) return res.status(400).json({ error })
        if (product) {
            res.status(400).json({ product })
        }
    }))

}