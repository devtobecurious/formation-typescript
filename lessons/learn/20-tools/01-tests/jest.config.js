/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    './node_modules',
    './coverage',
    './dist',
    './build'
  ],
  testRegex: '\\.spec\\.ts'
};