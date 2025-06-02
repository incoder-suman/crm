const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { error } = require('console');


//Run once per user
router.post('/create-user', async (req, res) =>{
    const {name, email, password, role} = req.body;
    const hashedpassword = await bcrypt.hash(password, 10);


    try {
        await User.create({name, email, password: hashedpassword, role});
        res.send('User Created');
    } catch (err) {
        res.status(400).json({error: "Error: Maybe email already exists"});
    }
});

module.exports = router;