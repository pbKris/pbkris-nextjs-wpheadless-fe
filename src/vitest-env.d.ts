/// <reference types="vitest/globals" />

// Extend the global namespace for Vitest
declare global {
  const describe: typeof import('vitest').describe;
  const it: typeof import('vitest').it;
  const expect: typeof import('vitest').expect;
  const vi: typeof import('vitest').vi;
  const beforeEach: typeof import('vitest').beforeEach;
  const afterEach: typeof import('vitest').afterEach;
  const beforeAll: typeof import('vitest').beforeAll;
  const afterAll: typeof import('vitest').afterAll;
}

