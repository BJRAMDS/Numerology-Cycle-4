import { generateSeedPrompt, generatePromptBatch } from "./seeder.ts";


console.log("🔧 Testing: generateSeedPrompt for Days 1 to 3");

const daysToTest = [1, 2, 3];
const contextFactory = (day: number) => `Contextual message for Day ${day}`;

daysToTest.forEach(day => {
  const prompt = generateSeedPrompt(day, contextFactory(day), "TestRun");
  console.log(`Day ${day} →`, prompt);
});

// Optional: Full batch test
console.log("\\n🔁 Batch Test Output (label: TestRun)");

const batch = generatePromptBatch("TestRun", contextFactory);
batch.forEach(p => console.log(p));