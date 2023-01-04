const { Router } = require('express');
const Items = require('../models/items')
const app = Router();

app.post('/items', async (req, res) => {
    try {
        const data = await Items.create(req.body)
        if (data) {
            res.json({
                msg: "Item has been added"
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

app.get('/items', async (req, res) => {
    try {
        const data = await Items.find()
        if (data) {
            res.json({
                itemList: data
            })
        }

    } catch (err) {
        console.log(err)
    }
})

module.exports = app;