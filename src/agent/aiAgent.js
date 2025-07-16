// File: src/agent/aiAgent.js

const EgoModule = require('../modules/egoModule');
const ShadowModule = require('../modules/shadowModule');
const ContextAnalyzer = require('../modules/contextAnalyzer');
const IntegrationLayer = require('../modules/integrationLayer');
const { writeParadoxEvent } = require('../system/runtime/writeParadoxLog');

class AIAgent {
  constructor() {
    this.ego = new EgoModule();
    this.shadow = new ShadowModule();
    this.contextAnalyzer = new ContextAnalyzer();
    this.integration = new IntegrationLayer(this.shadow);
  }

  /**
   * Processes input using ego + shadow logic and logs a paradox event.
   * @param {string} input - The user's runtime input string.
   * @returns {Promise<string>} - The final AI response.
   */
  async processInput(input) {
    try {
      const egoResponse = this.ego.generateResponse(input);
      const contextVector = this.contextAnalyzer.analyze(input);
      const { influence: shadowInfluence, score: shadowScore } = await this.shadow.injectInfluence(input);
      const finalResponse = await this.integration.blendResponses(egoResponse, shadowInfluence, shadowScore);

      // Log event to paradox-log.yaml
      writeParadoxEvent({
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toTimeString().slice(0, 5),
        timezone: "ET",
        numerology: contextVector[1] * 9, // Example numerology estimate
        state: "Agent Insight",
        signal: finalResponse.slice(0, 40) + "...", // Truncated summary
        symbol: "🧠",
        note: `Input processed with shadowScore=${shadowScore.toFixed(2)}`
      });

      await this.integration.reflect(shadowScore);
      return finalResponse;
    } catch (error) {
      console.error("Error in AI Agent:", error);
      return "⚠️ Error processing input.";
    }
  }
}

module.exports = AIAgent;
