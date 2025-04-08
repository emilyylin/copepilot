const express = require("express")
const fs = require("fs")
const cors = require("cors")
const { parseJson, writeToJson } = require("./utils/jsonutils")
const { getNYCTimeData } = require("./utils/dateTimeUtils") 
const { v4: uuidv4 } = require("uuid")

const app = express()
app.use(cors())
app.use(express.json())

console.log("Backend server file has started");

// TODO: split these up into controllers, routes files

const thought_record_filepath = "./json/thought_records.json"
const llm_output_filepath = "./json/chatbot_outputs.json"
const cb_filepath = "./json/core_beliefs.json"
const distortions_filepath ="./json/distortions.json"
const message_filepath = "./json/messages.json"

app.post("/saveThoughtRecord", (req, res) => {
    const tr = parseJson(thought_record_filepath)
    const id = 'tr_' + uuidv4()
    const withID = {
        ...req.body,
        uuid: id,
    };

    tr.push(withID)
    
    try {
        writeToJson(thought_record_filepath, tr)
        res.json({ message: "Thought Record saved! :)" })
    } catch (error) {
        console.error("Thought Record failed to save: ", error)
    }
    
});

app.post("/saveMessage", (req, res) => {

    const messages = parseJson(message_filepath)

    const id = 'msg_' + uuidv4()
    const withID = {
        ...req.body,
        uuid: id,
    };

    messages.push(withID)

    try {
        writeToJson(message_filepath, messages)
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
        return res.json({chatbot_output: "I'm listening."})
    }

    res.json({ chatbot_output: match.msg_content})

})

app.get("/thoughtRecords", (_, res) => {
    const tr = parseJson(thought_record_filepath)
    res.json(tr)
})

app.get("/messages", (_, res) => {
    //message history
    const messages = parseJson(message_filepath)
    res.json(messages)
})

app.get("/insights/distortionFreq", (_ ,res) => {

    // {label, value}
    const analysis = parseJson(distortions_filepath)

    const map={}

    // frequency map to count occurence of each distortion
    analysis.forEach((line) => {
        map[line.label] = (map[line.label] || 0) +1
    })

    // change it to value that rechart wants :()
    const output = Object.entries(map).map(([label, value]) => ({ label, value }))
    res.json(output)

})

app.get("/insights/cbfreq", (_, res) => {

    // { label, value }
    const analysis = parseJson(cb_filepath)

    const map={}

    // frequency map to count occurence of each distortion
    analysis.forEach((line) => {
        map[line.text] = (map[line.text] || 0) +1
    })

    // change it to value that rechart wants :()
    const output = Object.entries(map).map(([label, value]) => ({ label, value }))
    res.json(output)

})

app.get("/insights/daysOfWeek", (_, res) => {

    const analysis = parseJson(thought_record_filepath)

    const days = {
        Monday: 0,
        Tuesday: 0,
        Wednesday: 0,
        Thursday: 0,
        Friday: 0,
        Saturday: 0,
        Sunday: 0
    }

    const time = Array(24).fill(0)

    analysis.forEach(line => {
        const { day, hour } = getNYCTimeData(line.timestamp)
        days[day]++
        time[hour]++
    })

    res.json({days, time})
})

app.listen(3001, "0.0.0.0", ()=>console.log("Backend running on http://localhost:3001"))