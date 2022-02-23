//
// JEST Testing CONFIG
//
module.exports = {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  verbose: true,
  collectCoverage: false,
  collectCoverageFrom: ['**/*.(t|j)s', '!src/graphql/generated/*'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testTimeout: 60000,
};
