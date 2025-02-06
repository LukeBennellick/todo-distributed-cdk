module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!test/**',
    '!**/node_modules/**',
  ],
  coverageReporters: ['lcov', 'text'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  projects: [
    {
      displayName: 'infrastructure',
      testMatch: ['<rootDir>/test/infrastructure/**/*.test.ts'],
      preset: 'ts-jest',
      testEnvironment: 'node'
    },
    {
      displayName: 'unit',
      testMatch: ['<rootDir>/test/unit/**/*.test.ts'],
      preset: 'ts-jest',
      testEnvironment: 'node'
    },
    {
      displayName: 'integration',
      testMatch: ['<rootDir>/test/integration/**/*.test.ts'],
      preset: 'ts-jest',
      testEnvironment: 'node'
    }
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
};
