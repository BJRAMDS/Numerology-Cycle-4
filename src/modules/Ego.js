// File: src/modules/Ego.js

/**
 * Ego Module
 * Handles task-oriented reasoning and structured outputs.
 * Acts as the primary executor of conscious commands like 'onStart', 'onUpdate', 'onTask'.
 */

class Ego {
  constructor() {
    this.taskPatterns = [
      { keyword: 'onStart', response: '✅ System initialized.' },
      { keyword: 'onUpdate', response: '🔄 System updated.' },
      { keyword: 'onTask', response: '📌 Task started.' },
      { keyword: 'onStop', response: '🛑 System stopped.' },
    ];
  }

  /**
   * Parses a string input and matches against known task patterns.
   * @param {string} input - The raw input command.
   * @returns {string} - Matched response or fallback message.
   */
  generateResponse(input) {
    for (const pattern of this.taskPatterns) {
      if (input.includes(pattern.keyword)) {
        return pattern.response + ` [Ego recognized: ${pattern.keyword}]`;
      }
    }
    return '🤖 No recognizable ego task found.';
  }
}

module.exports = Ego;
