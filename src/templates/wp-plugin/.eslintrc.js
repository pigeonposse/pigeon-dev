/**
 * Eslint config.
 *
 * @description Configuration for Eslint.
 *
 * @see https://eslint.org/docs/latest/rules/
 */

module.exports = {
	'plugins' : [
		'json',
	],
	'env' : {
		'jest' : true,
	},
	'parserOptions' : {
		'ecmaVersion'                 : 13,
		'sourceType'                  : 'module',
		'allowImportExportEverywhere' : true,
	},
	'extends' : [
		'@pigeon-posse/eslint-config',
		'plugin:jsdoc/recommended',
		'plugin:json/recommended',
		'plugin:import/recommended',
	],
	'rules' : {
		'json/*'              : [ 'error', { 'allowComments': false } ],
		'jsdoc/require-jsdoc' : [
			'error',
			{
				'require' : {
				},
			},
		],
		'jsdoc/require-description' : [
			'error',
			{
				'descriptionStyle' : 'body',
			},
		],
		'jsdoc/require-hyphen-before-param-description' : [
			'error',
			'always',
			{
				'tags' : {
					'returns' : 'always',
				},
			},
		],
		'jsdoc/require-file-overview' : [
			'error',
			{
				'tags' : {
					'description' : {
						'mustExist'           : true,
						'initialCommentsOnly' : true,
						'preventDuplicates'   : false,
					},
				},
			},
		],
		'jsdoc/check-line-alignment' : [
			'error',
			'always',
			{
				'tags' : [
					'version',
					'description',
					'since',
					'param',
					'returns',
				],
			},
		],
		'jsdoc/require-description-complete-sentence' : [
			'error',
			{
				'tags' : [
					'param',
					'returns',
					'description',
				],
			},
		],
		'jsdoc/tag-lines' : [
			'error',
			'never',
			{
				'noEndLines' : true,
				'tags'       : {
					'description' : {
						'count' : 1,
						'lines' : 'always',
					},
					'version' : {
						'count' : 1,
						'lines' : 'always',
					},
					'author' : {
						'count' : 1,
						'lines' : 'always',
					},
				},
			},
		],
		'align-import/trim-import' : 'error',
		'default-case-last'        : 'error',
		'indent'                   : [ 'error', 'tab', { 'SwitchCase': 1 } ],
		'switch-colon-spacing'     : 'error',
		'default-case'             : 'error',
		'semi'                     : [ 'error', 'never' ],
		'eol-last'                 : [ 'error', 'always' ],
		'no-prototype-builtins'    : 'off',
		'space-infix-ops'          : 'error',
		'no-multi-spaces'          : [
			'error', {
				'exceptions' : {
					'ImportDeclaration'    : true,
					'VariableDeclarator'   : true,
					'AssignmentExpression' : true,
				},
			},
		],
	},
	'ignorePatterns' : [ 'dist/*' ],
	'overrides'      : [
		{
			'files' : [ '*.json' ],
			'rules' : {
				'jsdoc/require-file-overview' : [
					'error',
					{
						'tags' : {
						},
					},
				],
			},
		},
		{
			'files'  : [ './src/index.js', './src/getFile.js' ],
			'parser' : '@babel/eslint-parser',
		},
	],
}
