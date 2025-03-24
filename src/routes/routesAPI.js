const express = require('express');
const router = express.Router();
const Item = require('../models/item'); // Importation du modèle Item

// Récupérer tous les objets
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des objets' });
  }
});

// Ajouter un nouvel objet
router.post('/items', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: 'Le nom et la description sont obligatoires' });
  }

  const newItem = new Item({
    name,
    description,
  });

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'objet' });
  }
});

module.exports = router;
