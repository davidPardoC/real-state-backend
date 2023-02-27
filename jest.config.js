/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper:{
    "^@routes/(.*)$": "<rootDir>/src/Routes/$1"
  }
};