const express = require("express")
const fs = require("fs")
const cors = require("cors")
const { parseJson, writeToJson } = require("./utils/jsonutils")

const app = express()
app.use(cors())
app.use(express.json())

console.log("Backend server file has started");

const thought_record_filepath = "./json/thought_records.json"
const llm_output_filepath = "./json/LLM_Output.json"
const analysis_filepath = "./json/TR_Analysis.json"
const message_filepath = "./json/messages.json"

app.post("/saveThoughtRecord", (req, res) => {
    const tr = parseJson(thought_record_filepath)
    tr.push(req.body.formData)
    
    try {
        writeToJson(thought_record_filepath)
        res.json({ message: "Thought Record saved! :)" })
    } catch (error) {
        console.error("Thought Record failed to save: ", error)
    }
    
});

app.post("/saveMessage", (req, res) => {

    const messages = parseJson(message_filepath)
    messages.push(req.body)

    try {
        writeToJson(message_filepath)
        res.json({ message: "Message saved! :)" })
    } catch ( error ) {
        console.error("Message failed to save: ", error )
    }

})

app.get("/llmResponse", (req, res) => {

    // TODO: fix
    // hard coded for demo: searches for the corresponding chatbot response from user input
    const input = req.query.content

    if (!input) {
        return res.status(400).json({error: "No input provided"})
    }

    const llmData = parseJson(llm_output_filepath)

    const match = llmData.find(temp => temp.user_input === input)

    if (!match) {
        res.json({chatbot_output: "Hi! I'm listening."})
    }

    res.json({ chatbot_output: match.chatbot_output})

})

app.get("/thoughtRecords", (_, res) => {
    const tr = parseJson(thought_record_filepath)
    res.json(tr)
})

app.get("/analysis", (_, res) => {
    // cognitive distortions, core beliefs from foundry llm call
    const analysis = parseJson(analysis_filepath)
    res.json(analysis)
})

app.get("/messages", (_, res) => {
    //message history
    const messages = parseJson(message_filepath)
    res.json(messages)
})

app.listen(3001, "0.0.0.0", ()=>console.log("Backend running on http://localhost:3001"))