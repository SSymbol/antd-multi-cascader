module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/__tests__/*.tsx'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
}
