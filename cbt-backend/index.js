const express = require("express")
const fs = require("fs")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

app.post("/saveThoughtRecord", (req, res) => {
    const formData = req.body.formData

    const filePath = path.join(__dirname, "thought_records.csv")

    const headers = "timestamp,situation,thought,behavior,emotions\n"
    
    const row = [
        Date.now(),
        formData.situation,
        formData.thought,
        formData.behavior,
        JSON.stringify(formData.emotions),
    ].join(",") +"\n"

    const fileExists = fs.existsSync(filePath)

    fs.appendFileSync(filePath, fileExists ? row : headers + row)
    res.json({ message: "Saved! :)" })
});

app.listen(3001, ()=>console.log("Backend running on http://localhost:3001"))