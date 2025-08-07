
const express = require("express");
const studentRoute=require("./routes/studentRoute")
const app = express();

app.use(express.json());

app.use("/student",studentRoute);

const port = 80;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});