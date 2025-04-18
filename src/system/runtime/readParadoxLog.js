// src/system/runtime/writeParadoxLog.js
const fs = require('fs');
const yaml = require('yaml');

const logPath = 'identity_tracker/logs/paradox-log.yaml';

function writeParadoxEvent(entry) {
  const file = fs.readFileSync(logPath, 'utf8');
  const data = yaml.parse(file);
  data.events.push(entry);
  fs.writeFileSync(logPath, yaml.stringify(data), 'utf8');
  console.log("✅ Event written:", entry);
}

writeParadoxEvent({
  date: "2025-04-18",
  time: "15:33",
  timezone: "ET",
  numerology: 2,
  state: "Test",
  signal: "Script-generated event",
  symbol: "🌀",
  note: "Testing write logic to YAML."
});
