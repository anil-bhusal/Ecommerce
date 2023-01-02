const { Router } = require('express');
const Users = require('../models/users')
const app = Router();
const bcrypt = require('bcrypt');

app.post('/login', async(req, res) => {
    try{
    const data = await Users.findOne({email: req.body.email})
    if(data){
        const dbPassword = data.password
        const isValidPassword = bcrypt.compareSync(req.body.password, dbPassword); 
        const {_id, password, __v, ...refactoredData} = data.toObject()
        if(isValidPassword){
            res.json({
                msg: "login success",
                userDetails: refactoredData
            })
        }else{
            res.json({
            errMsg: "password didn't match"
            })
        }
    }else{
        res.json({
            errMsg: "email or password invalid"
        })
    }
    }
 catch(err){
        console.log(err)
    }
})

module.exports = app;