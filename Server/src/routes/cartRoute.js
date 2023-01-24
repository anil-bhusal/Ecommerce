const { Router } = require('express');
const Cart = require('../models/cart')
const app = Router();

app.post('/cart', async (req, res) => {
    try {
        const data = new Cart(req.body);
        data.save()
        if (data) {
            res.json({
                msg: "Item has been added in cart",
            })
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err)
    }
})

app.get('/cart', async (req, res) => {
    try {
        const data = await Cart.find()
        const totalItemInCart = await Cart.count()
        if (totalItemInCart) {
            res.json({
                cartInfo : data,
                itemInCart: totalItemInCart
            })
        } else {
  
            res.json({
                msg: "something went wrong"
            })
        }
    } catch (err) {
        console.log(err)
    }
})

module.exports = app;