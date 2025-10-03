// 📦 ARCHONIX :: Prompt Seeder Module
// Purpose: Generate structured seed prompts aligned with numerology, cycle, and context.
// Used by: runtime.ts, bridgeLogic, rippleRouter

export interface SeedPrompt {
  prompt: string;
  context: string;
  action: string;
  tag: string;
  createdAt?: string;
}

export const generateSeedPrompt = (
  day: number,
  context: string,
  label: string = "Seed"
): SeedPrompt => {
  const promptText = `What is today (Day ${day}) asking you to notice, create, or release?`;

  return {
    prompt: promptText,
    context,
    action: "Reflect and respond with clarity or connection.",
    tag: `CycleDay_${day}_${label}`,
    createdAt: new Date().toISOString()
  };
};

// Optional: batch generation for full 1–9 numerology cycle
export const generatePromptBatch = (
  label: string,
  contextFactory: (day: number) => string
): SeedPrompt[] => {
  return Array.from({ length: 9 }, (_, i) => {
    const day = i + 1;
    return generateSeedPrompt(day, contextFactory(day), label);
  });
};