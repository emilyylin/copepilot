const express = require("express")
const fs = require("fs")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json());

app.post("/saveThoughtRecord", (req, res) => {
    const formData = req.body.formData
    
    const row = [
        formData.situation,
        formData.thought,
        formData.behavior,
        JSON.stringify(formData.emotions),
    ].join(",") +"\n";

    fs.appendFileSync("thought-records.csv", row);
    res.json({ message: "Saved! :)" })
});

app.listen(3001, ()=>console.log("Backend running on http://localhost:3001"))