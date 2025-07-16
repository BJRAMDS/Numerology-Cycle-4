// File: src/system/runtime/writeParadoxLog.js

const fs = require('fs');
const yaml = require('yaml');

const logPath = 'identity_tracker/logs/paradox-log.yaml';

/**
 * Writes a structured paradox event to the YAML log.
 * @param {Object} entry - The paradox event to log.
 */
function writeParadoxEvent(entry) {
  if (!fs.existsSync(logPath)) {
    // Initialize YAML file if missing
    fs.writeFileSync(logPath, yaml.stringify({ events: [] }), 'utf8');
  }

  const file = fs.readFileSync(logPath, 'utf8');
  const data = yaml.parse(file);
  data.events.push(entry);

  fs.writeFileSync(logPath, yaml.stringify(data), 'utf8');
  console.log("✅ Paradox Event Logged:", entry);
}

// ⏳ 2:30 PM checkpoint
const now = new Date();
const runtimeEntry = {
  date: now.toISOString().slice(0, 10),
  time: now.toTimeString().slice(0, 5),
  timezone: "ET",
  numerology: 4, // today (May 8, 2025)
  state: "Midday Reflection",
  signal: "PhaseCore recalibration cycle active",
  symbol: "🧭",
  note: "2:30 PM checkpoint reached — system stabilized, awaiting EOD insights."
};

writeParadoxEvent(runtimeEntry);
