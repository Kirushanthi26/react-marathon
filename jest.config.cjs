/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: 'node',
};