const fs = require("fs")

function parseJson(filePath) {
    if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`);
        return [];
    }

    try {
        const raw = fs.readFileSync(filePath, "utf-8");
        return JSON.parse(raw);
    } catch (err) {
        console.error(`Failed to read JSON from ${filePath}:`, err);
        return [];
    }

}

function writeToJson(filePath, data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        return true;
    } catch (err) {
        console.error(`Failed to write JSON to ${filePath}:`, err);
        return false;
    }
}

module.exports = {
  parseJson,
  writeToJson,
};