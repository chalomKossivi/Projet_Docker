require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
connectDB();


const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connecté"))
.catch(err => console.error(err));

app.get("/items", (req, res) => {
    res.json([{ name: "Objet 1" }, { name: "Objet 2" }]);
});

app.post("/items", (req, res) => {
    console.log(req.body);
    res.json({ message: "Objet reçu" });
});

app.listen(3000, () => console.log("Serveur démarré sur le port 3000"));
