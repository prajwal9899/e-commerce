const express = require('express')
const app = express()
const env = require('dotenv')
const mongoose = require('mongoose')
PORT = process.env.PORT || 8000
const User = require('./models/userModel')
var cors = require('cors')


// app.use(cors())

// routes
const userRoutes = require('./routes/auth')
const adminRoutes = require('./routes/Admin/auth')
const categoryRoutes = require('./routes/category')
const productsRoutes = require('./routes/products')
const cartRoutes = require('./routes/cart')
const path = require('path')

// enviroment variable
env.config()

// mongodb connection
mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // createIndexes:true
}).then(() => {
    console.log('database connected successfully');
}).catch((err) => {
    console.log(err);
})



app.use(express.json())
app.use('public',express.static(path.join(__dirname, 'uploads')))

app.use('/api', userRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);


app.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
})