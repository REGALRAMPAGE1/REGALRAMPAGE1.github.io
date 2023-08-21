const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());


app.use(bodyParser.json());

app.post("/makeThingsHappenForm", (req, res) => {
    const formData = req.body;
    console.log(formData);
    
    res.status(200).json({ message: "Form data received successfully!" });
});

app.post("/consultation", (req, res) => {
    const formData = req.body;
    console.log(formData);
    
    res.status(200).json({ message: "Form data received successfully!" });
});

app.post("/contactUs", (req, res) => {
    const formData = req.body;
    console.log(formData);
    
    res.status(200).json({ message: "Form data received successfully!" });
});

app.listen(3000, () =>{
    console.log("Listening on port 3000");
});