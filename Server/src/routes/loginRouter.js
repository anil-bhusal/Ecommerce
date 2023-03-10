const { Router } = require('express');
const Users = require('../models/users')
const app = Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
    try {
        const data = await Users.findOne({ email: req.body.email })
        //jwt
        var token = jwt.sign({ email: req.body.email }, process.env.SECRET_KEY);

        if (data) {
            const dbPassword = data.password
            const isValidPassword = bcrypt.compareSync(req.body.password, dbPassword);
            const { _id, password, __v, ...refactoredData } = data.toObject()
            if (isValidPassword) {
                res.json({
                    msg: "login success",
                    userDetails: refactoredData,
                    token: token
                })
            } else {
                res.json({
                    errMsg: "password didn't match"
                })
            }
        } else {
            res.json({
                errMsg: "email or password invalid"
            })
        }
    }
    catch (err) {
        console.log(err)
    }
})

app.put("/changepassword", async (req, res, next) => {
    try {
        const data = await Users.findOne({ email: req.body.email });
        const dbPassword = data.password;
        const isValidPassword = bcrypt.compareSync(req.body.currentPassword, dbPassword);

        if (isValidPassword && req.body.newPassword) {
            const salt = bcrypt.genSaltSync(saltRounds);
            const hash = bcrypt.hashSync(req.body.newPassword, salt);
            if (hash) {
                data.password = hash;
                // console.log(data.password)
                const response = await Users.findByIdAndUpdate(data._id, data);
                if (response) {
                    res.json({ msg: "Password Changed" });
                } else {
                    res.json({ errMsg: "something went wrong" });
                }
            }
        } else {
            res.json({ errMsg: "Old Password doesn't matched" });
        }
        next();
    } catch (error) {
        console.error(error);
    }
});

module.exports = app;