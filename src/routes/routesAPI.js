const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// GET /items - Récupérer tous les objets
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// POST /items - Ajouter un nouvel objet
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: "Données invalides" });
  }
});

module.exports = router;