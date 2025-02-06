module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
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
