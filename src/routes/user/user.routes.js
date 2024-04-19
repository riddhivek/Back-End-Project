const express = require('express');
const userRoutes = express.Router();
const {verifyToken} = require('../helpers/verifyToken')
const { 
    registerUser,
    loginUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    addNewUser
} = require('../controller/user.controller');

userRoutes.post('/register-user', registerUser);
userRoutes.post('/login-user', loginUser);
userRoutes.get('/get-all-user', verifyToken,getAllUsers);
userRoutes.get('/get-user', verifyToken,getUser);
// userRoutes.put('/update-user', updateUser);
// userRoutes.put('/delete-user', deleteUser);
userRoutes.post('/add-user', upload.single('profileImage'), addNewUser);

module.exports = userRoutes;