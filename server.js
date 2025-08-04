
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("jay shree krishn");
});

app.post("/show/:id", (req, res) => {
    res.send(`id : ${req.params.id}`);
});

app.put("/update/:id", (req, res) => {
    res.send(`update id : ${req.params.id}`);
});

app.delete("/delete/:id", (req, res) => {
    res.send(`deleted id : ${req.params.id}`);
});

const port = 80;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});