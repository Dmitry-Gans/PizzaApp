import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true }
			],
			semi: ['error', 'always', { omitLastInOneLineBlock: false }], // Указывает где я не поставил ";"
			'comma-dangle': ['error', 'never'], // Указывает где есть висячая запятая
			quotes: ['error', 'single'], // Все кавычки превращаем в одинарные
			'react/prop-types': [0], // Выключил типы для пропсов
			indent: ['error', 'tab'] // Единый стиль отступов для тапов
		}
	}
);
