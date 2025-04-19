const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

// User registration
router.post('/register', userController.register);

// User login
router.post('/login', userController.login);

// Get user order history
router.get('/orders', userController.getOrderHistory);

module.exports = router;