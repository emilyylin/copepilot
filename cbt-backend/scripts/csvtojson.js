const fs = require("fs")
const path = require("path")
const parse = require("csv-parse/sync").parse

const fileName = process.argv[2]

if (!fileName) {
    console.error ("CSV Filename not valid")
    process.exit(1)
}

const inputPath = path.resolve(fileName);

if (!fs.existsSync(inputPath)) {
    console.error("File not found")
    process.exit(1)
}

const rawFile = fs.readFileSync(inputPath, "utf-8")

const inputFile = path.basename(inputPath, ".csv");
const outputDir = path.resolve(inputPath, "..", "..", "json")

let records

// parse through csv
try {
    records = parse(rawFile, {
        columns: true,
        skip_empty_lines: true
    })
} catch (error) {
    console.error("Failed to parse CSV", error)
    process.exit(1)
}

const cleaned = records.map((record) => {

    const out = {};

    for (const key in record) {
        const val = record[key];

        switch (key) {
        case "timestamp":
            out.timestamp = Number(val);
            break;

        case "emotions":
            if (typeof val === "string" && val.startsWith("[{")) {
                try {
                    out.emotions = JSON.parse(val);
                } catch {
                    out.emotions = [];
                }
            } else {
                out.emotions = [];
            }
            break;

        case "user_context":
            try {
                const parsed = JSON.parse(val);
                    out.user_context = Array.isArray(parsed) ? parsed.join(" ") : String(val);
                } catch {
                    out.user_context = String(val);
                }
            break;
        
        // we don't want to store embeddings in json
        case "embedding":
            break;

        default:
            out[key] = val;
        }
    }

    return out;
    
})

const outputFile = path.join(outputDir, `${inputFile}.json`)
fs.writeFileSync(outputFile, JSON.stringify(cleaned, null, 2))



