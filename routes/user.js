const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

//User Routes - simplified for now
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;
