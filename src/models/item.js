const mongoose = require('mongoose');

// Définition du schéma pour un "Item"
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Création du modèle "Item" à partir du schéma
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
