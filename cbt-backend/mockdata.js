const fs = require("fs")

const fakeRow = (
    timestamp,
    situation,
    thought,
    behavior,
    emotions
    ) => `${timestamp},"${situation}","${thought}","${behavior}","${JSON.stringify(emotions)}"\n`

// used chatgpt dkm
const data = [
    fakeRow(
      Date.now(),
      "Had a meeting with my manager and they looked distracted the whole time.",
      "They must be disappointed in me. I probably messed something up again.",
      "Kept my responses short, avoided eye contact, left the call early.",
      [{ label: "anxiety", intensity: 8 }, { label: "shame", intensity: 6 }]
    ),
    fakeRow(
      Date.now(),
      "Woke up and saw I had 12 missed messages from work Slack.",
      "I'm falling behind. Everyone is waiting on me. They're annoyed.",
      "Scrolled through them but avoided replying for 2 hours.",
      [{ label: "overwhelm", intensity: 7 }, { label: "guilt", intensity: 5 }]
    ),
    fakeRow(
      Date.now(),
      "Shipped a bug to production and the team had to hotfix it.",
      "I'm a terrible engineer. I always ruin things when I'm moving too fast.",
      "Apologized in the thread and muted notifications after.",
      [{ label: "shame", intensity: 9 }, { label: "embarrassment", intensity: 7 }]
    ),
    fakeRow(
      Date.now(),
      "Got a compliment on my last project during standup.",
      "They probably didn't mean it. They're just being polite.",
      "I smiled, but immediately changed the topic.",
      [{ label: "discomfort", intensity: 5 }, { label: "doubt", intensity: 6 }]
    ),
  ];

const filePath = "./cbt-backend/thought_records.csv"
const headers = "timestamp,situation,thought,behavior,emotions\n"

fs.writeFileSync(filePath, headers + data.join(""))
console.log("Wrote fake CSV data to ", filePath)