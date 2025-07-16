// Handles end-of-cycle analysis + what we learned
export const reflectionModule = {
  prompt: "What part of this cycle are you bringing forward?",
  action: () => {
    // Archive prompts + prepare summary for restart
    generateCycleSummary();
    prepareSeedPromptForNextCycle();
  },
  tag: "Cycle9_Reflect"
};
