const express = require('express');
const router = express.Router();
const multer = require('multer')
const shortId = require('shortid')
const path = require('path')

const { requireSignin, adminMiddleware } = require('../common-middleware');
const { createProduct } = require('../controllers/product')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null,path.join(path.dirname(__dirname),"uploads"))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, shortId.generate() + '-' + file.originalname)
    }
})


const upload = multer({storage})




router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPicture'), createProduct)

module.exports = router;