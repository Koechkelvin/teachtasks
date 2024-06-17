const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const update = async (req, res) => {
    const id = req.params.id;
    const newAge = req.body.age;
    try {
      const updatedUser = await prisma.user.update({
        where: { id: parseInt(id) },
        data: { age: newAge }
      });
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user', details: error.message });
    }
  };
  
  const get = async (req, res) => {
    try {
      const allUsers = await prisma.user.findMany();
      res.json(allUsers);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve users', details: error.message });
    }
  };
  
  const post = async (req, res) => {
    try {
      const newUser = await prisma.user.create({ data: req.body });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user', details: error.message });
    }
  };
  
  const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedUser = await prisma.user.delete({
        where: { id: parseInt(id) }
      });
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user', details: error.message });
    }
  };
  
  module.exports = { update, get, post, deleteUser };