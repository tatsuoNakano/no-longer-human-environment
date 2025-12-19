import type { Config } from 'jest';

/**
 * NO-LONGER-HUMAN-ENVIRONMENT
 * Absolute Testing Configuration
 */
const config: Config = {
    // Use ts-jest to handle TypeScript files with strict type checking
    preset: 'ts-jest',

    // Execution environment (Pure Node.js, no browser pollution)
    testEnvironment: 'node',

    // Define the sanctuary: only files in src and tests are recognized
    roots: ['<rootDir>/src', '<rootDir>/tests'],

    // Absolute coverage: No untested logic shall exist in this world
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',

    // Strict matching for test files
    testMatch: [
        '**/tests/**/*.test.ts',
        '**/tests/**/*.spec.ts'
    ],

    // Transform instructions for ts-jest
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                tsconfig: 'tsconfig.json',
            },
        ],
    },

    // Verbose output to show every single result with cold precision
    verbose: true,
};

export default config;