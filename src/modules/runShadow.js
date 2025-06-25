// runShadow.js
import Shadow from './Shadow.js';

const shadow = new Shadow();

shadow.storeMemory('Cycle4/Foundation', {
  thought: 'I must build from truth, not illusion.',
  tag: 'stability',
  timestamp: Date.now(),
});

shadow.registerDoubt('Am I building for validation or purpose?');

shadow.injectInfluence('social-media', {
  signal: 'envy spike',
  effect: 'comparison loop initiated',
});

console.log('🧠 Shadow State Snapshot:');
console.log(shadow.getDiagnosticSnapshot());

