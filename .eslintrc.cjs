const MODE = {
	OFF: 'off',
	WARN: 'warn',
	ERROR: 'error'
}

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['google', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'react/react-in-jsx-scope': MODE.OFF,
		'require-jsdoc': MODE.OFF,
		'no-unused-vars': MODE.OFF,
		'@typescript-eslint/no-unused-vars': MODE.ERROR
	},
	settings: {
		react: {
			version: '18.0.0'
		}
	},
	overrides: [
		{
			files: ['*.jsx', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': MODE.OFF
			}
		}
	]
}
