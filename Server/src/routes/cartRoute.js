const { Router } = require('express');
const Cart = require('../models/cart')
const app = Router();

app.post('/cart', async (req, res) => {
     console.log(req.body)
        console.log("i am called")
    // try {
    //     const data = await Cart.create(req.body)
    //     console.log("i am called")
    //     if (data) {
    //         res.json({
    //             msg: "Item has been added in cart"
    //         })
    //     } else {
    //         res.json({
    //             msg: "something went wrong"
    //         })
    //     }
    // } catch (err) {
    //     console.log(err)
    // }
})

module.exports = app;