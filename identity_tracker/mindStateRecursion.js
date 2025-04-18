/**
 * phaseClock(hour)
 * ----------------------------------------
 * Returns the symbolic 6-hour phase of the current day.
 * Used for aligning logic flows with temporal quadrants.
 *
 * Phases:
 * - 0–5   = Foundation
 * - 6–11  = Structure
 * - 12–17 = Discipline
 * - 18–23 = Completion
 *
 * @param {number} hour - Optional override (default: current hour)
 * @returns {string} phase name
 */
function phaseClock(hour = new Date().getHours()) {
    const phases = ["Foundation", "Structure", "Discipline", "Completion"];
    return phases[Math.floor(hour / 6) % 4];
  }
  
  /**
   * taskChecklist(date, numerology, tasks)
   * ----------------------------------------
   * Creates a checklist object for a day’s tasks aligned with numerology.
   * Includes tracking status, temporal phases, and completion state.
   *
   * @param {string} date - Format: MM/DD/YYYY
   * @param {number} numerology - Numerological vibration of the day (1–9)
   * @param {string[]} tasks - Array of task names
   * @returns {object} checklist object with `markComplete()` available
   */
  function taskChecklist(date, numerology, tasks) {
    return {
      date,
      numerology,
      phases: ["Foundation", "Structure", "Discipline", "Completion"],
      tasks,
      status: tasks.map(t => ({ task: t, complete: false })),
      /**
       * Mark a task as complete by name
       * @param {string} taskName
       */
      markComplete(taskName) {
        this.status = this.status.map(entry =>
          entry.task === taskName ? { ...entry, complete: true } : entry
        );
      },
      /**
       * Returns string summary of current completion state
       */
      summary() {
        const completed = this.status.filter(t => t.complete).length;
        return `${completed}/${this.status.length} tasks complete for ${this.date}`;
      }
    };
  }
  
  /** 📚 Codex Umbra — The Book That Whispers Back */
  