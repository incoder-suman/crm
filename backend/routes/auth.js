const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async(req,res) =>{
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.ststus(404).json({ error: 'Invalid Password'});


    const token = jwt.sign({ userID: user._id, role: user.role},process.env.jwt_SECRET, {expiresIn: "1h"});

    res.json({ token, role: user.role });
});


module.exports = router;