/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  /**
   * Absolute imports and Module Path Aliases
   */
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@/public/(.*)$': '<rootDir>/public/$1',
  },

  // Add more setup options before each test is run
  setupFilesAfterEnv: ['./jest.setup.js'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],

  clearMocks: true,
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   './src/**/*.{js,jsx,ts,tsx}',
  //   '!./src/**/_*.{js,jsx,ts,tsx}',
  //   '!**/*.d.ts',
  //   '!**/node_modules/**',
  // ],
  // coverageThreshold: {
  //   global: {
  //     branches: 30,
  //     functions: 30,
  //     lines: 30,
  //     statements: 30,
  //   },
  // },
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
