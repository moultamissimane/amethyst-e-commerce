const express = require('express');

const { updateUser, deleteUser, getUser, getUsers, getUsersStats } = require('../Controllers/UserController');
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../Middlewares/VerifyToken');

const router = express.Router();

// PUT => /api/users/:id
router.patch('/:id', verifyTokenAndAuthorization, updateUser);

// DELETE => /api/users/:id
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

// // GET => /api/users/stats
// router.get('/stats', verifyTokenAndAdmin, getUsersStats);   // must be here

// GET => /api/users/:id
router.get('/:id', verifyTokenAndAdmin, getUser);           // must be here

// GET => /api/users
router.get('/', verifyTokenAndAdmin, getUsers);

module.exports = router;