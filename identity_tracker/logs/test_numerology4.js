// Students: Test script for Numerology Day 4 (2025) — Structure, Stabilization
// Purpose: Run phaseClock and taskChecklist from terminal

/**
 * phaseClock(hour)
 * Returns the symbolic 6-hour phase of the current day.
 * Phases: 0–5 = Foundation, 6–11 = Structure, 12–17 = Discipline, 18–23 = Completion
 * @param {number} hour - Optional override (default: current hour)
 * @returns {string} phase name
 */
function phaseClock(hour = new Date().getHours()) {
    const phases = ["Foundation", "Structure", "Discipline", "Completion"];
    return phases[Math.floor(hour / 6) % 4];
  }
  
  /**
   * taskChecklist(date, numerology, tasks)
   * Creates a checklist object for a day’s tasks aligned with numerology.
   * @param {string} date - Format: MM/DD/YYYY
   * @param {number} numerology - Numerological vibration of the day (1–9)
   * @param {string[]} tasks - Array of task names
   * @returns {object} checklist object with markComplete() available
   */
  function taskChecklist(date, numerology, tasks) {
    return {
      date,
      numerology,
      phases: ["Foundation", "Structure", "Discipline", "Completion"],
      tasks,
      status: tasks.map(t => ({ task: t, complete: false })),
      markComplete(taskName) {
        this.status = this.status.map(entry =>
          entry.task === taskName ? { ...entry, complete: true } : entry
        );
      },
      summary() {
        const completed = this.status.filter(t => t.complete).length;
        return `${completed}/${this.status.length} tasks complete for ${this.date}`;
      }
    };
  }
  
  // Students: Test script for 2025 (Numerology 4)
  console.log("🧠 Numerology 4 Test Run (2025)");
  console.log("---");
  
  // Test phaseClock
  const currentHour = new Date().getHours();
  console.log(`Current Hour: ${currentHour}`);
  console.log(`Current Phase: ${phaseClock()}`);
  console.log(`Sample Phase (9 AM): ${phaseClock(9)}`); // Should return "Structure"
  
  
  const tasks = [
    "Set a personal goal (organize workspace or 30-min skill session)",
    "Write JS snippet with console.log(4)"
  ];
  const checklist = taskChecklist("04/18/2025", 4, tasks);
  
  console.log("\n📋 Task Checklist:");
  console.log(`Date: ${checklist.date}`);
  console.log(`Numerology: ${checklist.numerology}`);
  console.log(`Phases: ${checklist.phases.join(", ")}`);
  console.log("Tasks:");
  checklist.status.forEach((entry, i) => {
    console.log(`${i + 1}. ${entry.task} [${entry.complete ? "Complete" : "Pending"}]`);
  });
  
  // Mark a task complete
  checklist.markComplete("Set a personal goal (organize workspace or 30-min skill session)");
  console.log("\n📊 After marking personal goal complete:");
  console.log(checklist.summary());
  checklist.status.forEach((entry, i) => {
    console.log(`${i + 1}. ${entry.task} [${entry.complete ? "Complete" : "Pending"}]`);
  });