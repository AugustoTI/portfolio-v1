const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/*.ts(x)?',
    '!src/**/*.stories.ts(x)',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts(x)?',
    '!src/templates/**/*.ts(x)',
    '!src/**/*.d.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
}

module.exports = createJestConfig(customJestConfig)
