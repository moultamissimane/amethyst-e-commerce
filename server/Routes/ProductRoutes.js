const express = require('express');

const { addProduct, updateProduct, deleteProduct, getProduct, getProducts } = require('../Controllers/ProductController');
const { verifyTokenAndAdmin } = require('../Middlewares/VerifyToken');

const router = express.Router();

// POST => /api/products
router.post('/', verifyTokenAndAdmin, addProduct);

// PATCH => /api/products/:id
router.patch('/:id', verifyTokenAndAdmin, updateProduct);

// DELETE => /api/products/:id
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

// GET => /api/products/:id
router.get('/:id', getProduct);

// GET => /api/products
router.get('/', getProducts);
module.exports = router;