const { Router } = require('express');
const Items = require('../models/items')
const app = Router();
const isAuthorized = require('../middleware/tokenAuthorize')

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
    console.log("i am in dashboard page", req.headers.authorization)
    try {
        const data = await Items.find()
        const searchFind = await Items.find({name: req.query.q})
        if (data) {
            res.json({
                itemList: data,
                search: searchFind
            })
        }

    } catch (err) {
        console.log(err)
    }
})

app.get('/items/:id', async (req, res) => {
    console.log("i am in item detail page", req.headers.authorization)

    try {
        const data = await Items.find({ _id: req.params.id })
        if (data) {
            res.json({
                itemList: data
            })
        }
    } catch (err) {
        console.log(err)
    }
})

app.put('/items', async (req, res) => {
    try {
        const data = await Items.findByIdAndUpdate(req.body._id, req.body)
        if (data) {
            res.json({
                msg: "Item updated successfully"
            })
        } else {
            res.json({
                errMsg: "something went wrong"
            })
        }

    } catch (err) {
        console.log(err)
    }
})

app.delete('/items', async (req, res) => {
    try {
        const data = await Items.findByIdAndRemove(req.body.id)
        if (data) {
            res.json({
                msg: "deleted successfully"
            })
        } else {
            res.json({
                errMsg: "something went wrong"
            })
        }

    } catch (err) {
        console.log(err)
    }
})

module.exports = app;