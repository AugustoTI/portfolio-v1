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
  modulePaths: ['<rootDir>/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '~/components/(.*)': '<rootDir>/src/components/$1',
    '~/templates/(.*)': '<rootDir>/src/templates/$1',
    '~/stores/(.*)': '<rootDir>/src/stores/$1',
    '~/utils/(.*)': '<rootDir>/src/utils/$1',
    '~/styles/(.*)': '<rootDir>/src/styles/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
