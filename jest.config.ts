module.exports = {
	// The root of your source code
	roots: ['<rootDir>/src'],

	// A list of file extensions your modules use
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/test/styleMock.js',
		'^@store(.*)$': '<rootDir>/src/store$1',
	},
	// Jest transformations
	transform: {
		'^.+\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
	},

	// Test environment setup
	testEnvironment: 'jsdom',
	preset: 'react-native',

	// Test match patterns
	testMatch: [
		'**/__tests__/**/*.test.(ts|tsx|js|jsx)',
		'**/?(*.)+(spec|test).(ts|tsx|js|jsx)',
	],

	// Ignore specific files or directories in test runs
	testPathIgnorePatterns: ['/node_modules/', '/build/'],

	// Code coverage configuration
	collectCoverage: true,
	coverageReporters: ['json', 'lcov', 'text', 'clover'],
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!**/__tests__/**'],

	// Setup for TypeScript projects
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json',
		},
	},
};
