import antfu from '@antfu/eslint-config'

export default antfu(
	{
		stylistic: {
			indent: 'tab',
			quotes: 'single',
		},
		typescript: true,
		svelte:     true,
		yaml:       true,
	},
	{
		files: ['*.svelte'],
		rules: {
			'svelte/indent': [
				'error',
				{ indent: 'tab', alignAttributesVertically: true },
			],
			'svelte/block-lang': [
				'error',
				{
					enforceScriptPresent: true,
					enforceStylePresent:  false,
					script:               ['ts'],
					style:                ['scss', null],
				},
			],
			'svelte/html-self-closing': [
				'error',
				'all',
			],
			'svelte/sort-attributes': 'error',
		},
	},
	{
		rules: {
			'style/key-spacing': [
				'error',
				{
					align: 'value',
				},
			],
			'style/no-multi-spaces': [
				'error',
				{
					exceptions: {
						ArrayExpression:  true,
						TSTypeAnnotation: true,
					},
				},
			],
			'style/type-annotation-spacing': [
				'error',
				{ before: false, after: true },

			],
			'prefer-const': 'off',
		},
	},

)
