const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register a new user
router.post('/register', async (req, res) => {
 try {
 const user = new User(req.body);
 await user.save();
 const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
 res.status(201).send({ user, token });
 } catch (error) {
 res.status(400).send(error);
 }
});

// Login an existing user
router.post('/login', async (req, res) => {
 try {
    console.log(req.body);
    newEmail = req.body.email;
    newPassword = req.body.password
 const { email, password } = req.body;
 const user = await User.findOne({ email });
 if (!user || !(await user.comparePassword(password))) {
 return res.status(400).send({ error: 'Invalid login credentials' });
 }

 const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
 res.status(200).send({ user, token });
 
 } catch (error) {
 res.status(500).send(error);
 }
});

module.exports = router;
