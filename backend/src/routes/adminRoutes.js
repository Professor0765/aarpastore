const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/adminController');

const adminController = new AdminController();

// Route to get all products
router.get('/products', adminController.getAllProducts);

// Route to create a new product
router.post('/products', adminController.createProduct);

// Route to update a product
router.put('/products/:id', adminController.updateProduct);

// Route to delete a product
router.delete('/products/:id', adminController.deleteProduct);

// Route to get all orders
router.get('/orders', adminController.getAllOrders);

// Route to get order by ID
router.get('/orders/:id', adminController.getOrderById);

// Route to update order status
router.put('/orders/:id', adminController.updateOrderStatus);

module.exports = router;