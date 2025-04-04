const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "login.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "register.html"));
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta 3000`);
});
