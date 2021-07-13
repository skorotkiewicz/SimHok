module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/*.test.ts?(x)',
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '^@src/(.*)': '<rootDir>/src/$1',
    '^@tests/(.*)': '<rootDir>/tests/$1',
  },
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'html',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/tests/',
    '/tests/__mocks__',
    '/dist',
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    'tests/**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
};
