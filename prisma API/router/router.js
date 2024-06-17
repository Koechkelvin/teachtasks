const express = require('express');
const { update, get, post, deleteUser } = require('../controllers/userController');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.put('/:id', update);        
router.get('/', get);              
router.post('/', post);            
router.delete('/:id', deleteUser); 

// Export the router
module.exports = router;
