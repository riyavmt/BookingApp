const path = require('path');
const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.get('/add-user', userController.getAddUser);
router.post('/add-user', userController.postAddUser);
router.delete('/delete-user/:id', userController.deleteUser);
router.get('/edit-user/:id', userController.editUser);

module.exports = router;