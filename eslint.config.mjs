import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,vue}'] },
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				wx: true,
				uni: true,
				UniApp: true,
				Tmui: true,
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...pluginVue.configs['flat/essential'],
	{
		ignores: [
			'**/*.config.js',
			'dist/**',
			'node_modules/**',
			'**/tmui/**',
			'package-lock.json',
			'**/*.d.ts',
		],
	},
	{
		// files: ['**/*.vue', '**/*.ts'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
		rules: {
			// 禁止使用 any 类型
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			// v-for 指令的元素必须有 v-bind:key
			'vue/require-v-for-key': 'error',
			// 强制元素内容换行
			'vue/singleline-html-element-content-newline': 'off',
			// 组件传参使用横杠命名 <innerMain :problem-list="problemList">
			'vue/attribute-hyphenation': 'off',
			// 没有子元素或不需要子元素的 HTML 标签，写成其自闭合的形式
			'vue/html-self-closing': 'error',
			// template中禁止出现多个根节点
			'vue/no-multiple-template-root': 'off',
			// props里每个prop都要有默认值
			'vue/require-default-prop': 'error',
			// watch选项内不应该使用箭头函数
			'vue/no-arrow-functions-in-watch': 'off',
			// 不允许组件 prop的改变
			'vue/no-mutating-props': 'error',
			'vue/no-parsing-error': 'off',
			'vue/multi-word-component-names': 'off',
			// template中禁止出现多个根节点
			'no-multiple-template-root': 'off',
			// 禁止出现没必要的转义
			'no-useless-escape': 'off',
			// 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
			'no-prototype-builtins': 'off',
			// 禁止使用指定的全局变量
			'no-restricted-globals': 'off',
			// 禁止使用特定的语法
			'no-restricted-syntax': 'off',
			// 使用 let 或 const 而不是 var
			'no-var': 'error',
			// 定义过的变量必须使用
			'no-unused-vars': [
				'error',
				{
					vars: 'all',
					args: 'none',
					caughtErrors: 'none',
					ignoreRestSiblings: true,
				},
			],
			// 变量必须先定义后使用
			'no-use-before-define': [
				'error',
				{ functions: false, classes: false, variables: false },
			],
			// 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
			'for-direction': 'error',
			// getter 必须有返回值，并且禁止返回空，比如 return;
			'getter-return': ['error', { allowImplicit: false }],
			// 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
			// @off 要求太严格了，有时需要在循环中写 await
			'no-await-in-loop': 'off',
			// 禁止使用 console
			'no-console': 'off',
			// 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
			'no-cond-assign': ['error', 'except-parens'],
			// 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
			'no-constant-condition': ['error', { checkLoops: false }],
			// 禁止在函数参数中出现重复名称的参数
			'no-dupe-args': 'error',
			// 禁止在对象字面量中出现重复名称的键名
			'no-dupe-keys': 'error',
			// 禁止在 switch 语句中出现重复测试表达式的 case
			'no-duplicate-case': 'error',
			// 禁止出现空代码块，允许 catch 为空代码块
			'no-empty': ['error', { allowEmptyCatch: true }],
			// 禁止在正则表达式中使用空的字符集 []
			'no-empty-character-class': 'error',
			// 禁止将 catch 的第一个参数 error 重新赋值
			'no-ex-assign': 'error',
			// @fixable 禁止不必要的布尔类型转换，比如 !! 或 Boolean
			'no-extra-boolean-cast': 'error',
			// @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
			'no-extra-parens': ['error', 'functions'],
			// 禁止在数组中出现连续的逗号，如 let foo = [,,]
			'no-sparse-arrays': 'error',
			// 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
			'no-template-curly-in-string': 'error',
			// 禁止出现难以理解的多行表达式，如：
			// let foo = bar
			// [1, 2, 3].forEach(baz);
			'no-unexpected-multiline': 'error',
			// 禁止在 return, throw, break 或 continue 之后还有代码
			'no-unreachable': 'error',
			// 禁止在 finally 中出现 return, throw, break 或 continue
			'no-unsafe-finally': 'error',
			// 必须使用 isNaN(foo) 而不是 foo === NaN
			'use-isnan': 'error',
			// typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
			'valid-typeof': 'error',
			// setter 必须有对应的 getter，getter 可以没有对应的 setter
			'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: false }],
			// 数组的方法除了 forEach 之外，回调函数必须有返回值
			'array-callback-return': 'error',
			// 将 var 定义的变量视为块作用域，禁止在块外使用
			'block-scoped-var': 'error',
			// 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
			complexity: ['error', { max: 20 }],
			// @fixable if 后面必须要有 {，除非是单行 if
			curly: ['error', 'multi-line', 'consistent'],
			// @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
			'dot-location': ['error', 'property'],
			// @fixable 禁止出现 foo['bar']，必须写成 foo.bar
			// @off 当需要写一系列属性的时候，可以更统一
			'dot-notation': 'off',
			// @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
			eqeqeq: ['error', 'always', { null: 'ignore' }],
			// for in 内部必须有 hasOwnProperty
			'guard-for-in': 'error',
			// switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
			'no-case-declarations': 'error',
			// 不允许有空函数，除非是将一个空函数设置为某个项的默认值
			'no-empty-function': ['error', { allow: ['functions', 'arrowFunctions'] }],
			// 禁止解构中出现空 {} 或 []
			'no-empty-pattern': 'error',
			// 禁止修改原生对象
			'no-extend-native': 'error',
			// @fixable 禁止出现没必要的 bind
			'no-extra-bind': 'error',
			// @fixable 禁止出现没必要的 label
			'no-extra-label': 'error',
			// switch 的 case 内必须有 break, return 或 throw
			'no-fallthrough': 'error',
			// @fixable 表示小数时，禁止省略 0，比如 .5
			'no-floating-decimal': 'error',
			// 禁止对全局变量赋值
			'no-global-assign': 'error',
			// @fixable 禁止使用 !! ~ 等难以理解的运算符, 仅允许使用 !!
			'no-implicit-coercion': ['error', { allow: ['!!'] }],
			// 禁止在全局作用域下定义变量或申明函数
			'no-implicit-globals': 'error',
			// 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
			'no-implied-eval': 'error',
			// 禁止使用没必要的 {} 作为代码块
			'no-lone-blocks': 'error',
			// 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
			// for (var i = 0; i < 10; i++) {
			//     (function () { return i })();
			// }
			'no-loop-func': 'error',
			// @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
			'no-multi-spaces': [
				'error',
				{
					ignoreEOLComments: true,
					exceptions: {
						Property: true,
						BinaryExpression: false,
						VariableDeclarator: true,
						ImportDeclaration: true,
					},
				},
			],
			// 禁止直接 new 一个类而不赋值
			'no-new': 'error',
			// 禁止对函数的参数重新赋值
			'no-param-reassign': 'error',
			// 禁止重复定义变量
			'no-redeclare': 'error',
			// 禁止在 return 语句里赋值
			'no-return-assign': ['error', 'always'],
			// 禁止在 return 语句里使用 await
			'no-return-await': 'error',
			// 禁止将自己赋值给自己
			'no-self-assign': 'error',
			// 禁止将自己与自己比较
			'no-self-compare': 'error',
			// 禁止使用逗号操作符
			'no-sequences': 'error',
			// 禁止 throw 字面量，必须 throw 一个 Error 对象
			'no-throw-literal': 'error',
			// 禁止无用的表达式
			// 'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }],
			// 禁止出现没必要的字符串连接
			'no-useless-concat': 'error',
			// Promise 的 reject 中必须传入 Error 对象，而不是字面量
			'prefer-promise-reject-errors': 'off',
			// @fixable 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
			'wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
			// @fixable 必须使用 if (foo === 5) 而不是 if (5 === foo)
			yoda: ['error', 'never', { onlyEquality: true }],
			// 禁止使用 delete
			'no-delete-var': 'error',
			// 禁止 label 名称与定义过的变量重复
			'no-label-var': 'error',
			// 禁止使用保留字作为变量名
			'no-shadow-restricted-names': 'error',
			// 禁止使用未定义的变量
			'no-undef': ['error', { typeof: false }],
			//
			//
			// 风格问题
			// 这些规则与代码风格有关，所以是非常主观的
			//
			// @fixable 数组的括号内的前后禁止有空格
			'array-bracket-spacing': ['error', 'never'],
			// @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
			'block-spacing': ['error', 'always'],
			// @fixable 逗号前禁止有空格，逗号后必须要有空格
			'comma-spacing': ['error', { before: false, after: true }],
			// @fixable 禁止在行首写逗号
			'comma-style': ['error', 'last'],
			// @fixable 用作对象的计算属性时，中括号内的首尾禁止有空格
			'computed-property-spacing': ['error', 'never'],
			// @fixable 函数名和执行它的括号之间禁止有空格
			'func-call-spacing': ['error', 'never'],
			// @fixable 一个缩进必须用四个空格替代
			indent: ['off', 2, { SwitchCase: 1, flatTernaryExpressions: true }],
			// @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
			'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
			// @fixable 关键字前后必须有空格
			'keyword-spacing': ['error', { before: true, after: true }],
			// 代码块嵌套的深度禁止超过 5 层
			'max-depth': ['error', 5],
			// 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
			'max-nested-callbacks': ['error', 3],
			// 函数的参数禁止超过 7 个
			'max-params': ['error', 7],
			// 禁止混用空格和缩进
			'no-mixed-spaces-and-tabs': 'error',
			// @fixable 禁止出现超过两行的连续空行
			'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 1 }],
			// @fixable 禁止行尾有空格
			'no-trailing-spaces': 'error',
			// 禁止变量名出现下划线
			'no-underscore-dangle': 'off',
			// @fixable 禁止属性前有空格，比如 foo. bar()
			'no-whitespace-before-property': 'error',
			// @fixable 禁止 if 后面不加大括号而写两行代码
			'nonblock-statement-body-position': [
				'error',
				'beside',
				{
					overrides: { while: 'below' },
				},
			],
			// @fixable 大括号内的首尾必须有换行
			'object-curly-newline': ['error', { multiline: true, consistent: true }],
			// @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
			'object-curly-spacing': [
				'error',
				'always',
				{ arraysInObjects: true, objectsInObjects: false },
			],
			// 禁止变量申明时用逗号一次申明多个
			'one-var': ['error', 'never'],
			// @fixable 变量申明必须每行一个
			'one-var-declaration-per-line': ['error', 'always'],
			// @fixable 必须使用单引号，禁止使用双引号
			quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
			// @fixable 结尾必须有分号
			semi: ['error', 'always', { omitLastInOneLineBlock: true }],
			// @fixable 禁止出现多余的分号
			'no-extra-semi': 'error',
			// @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
			'semi-spacing': ['error', { before: false, after: true }],
			// @fixable 分号必须写在行尾，禁止在行首出现
			'semi-style': ['error', 'last'],
			// @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
			'space-before-blocks': ['error', 'always'],
			// @fixable function 的小括号之前必须要有空格
			'space-before-function-paren': [
				'error',
				{ anonymous: 'ignore', named: 'never', asyncArrow: 'always' },
			],
			// @fixable 小括号内的首尾禁止有空格
			'space-in-parens': ['error', 'never'],
			// @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
			'space-infix-ops': 'error',
			// @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
			// let foo = new Person();
			// bar = bar++;
			'space-unary-ops': ['error', { words: true, nonwords: false }],
			// @fixable 注释的斜线或 * 后必须有空格
			'spaced-comment': [
				'error',
				'always',
				{
					block: {
						exceptions: ['*'],
						balanced: true,
					},
				},
			],
			// @fixable case 的冒号前禁止有空格，冒号后必须有空格
			'switch-colon-spacing': ['error', { after: true, before: false }],
			// 链式调用必须换行
			'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
			//
			//
			// ECMAScript 6
			// 这些规则与 ES6（即通常所说的 ES2015）有关
			//
			// @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
			'arrow-body-style': 'error',
			// @fixable 箭头函数的箭头前后必须有空格
			'arrow-spacing': ['error', { before: true, after: true }],
			// constructor 中必须有 super
			'constructor-super': 'error',
			// 禁止对使用 const 定义的常量重新赋值
			'no-const-assign': 'error',
			// 禁止重复定义类
			'no-dupe-class-members': 'error',
			// 禁止重复 import 模块
			'no-duplicate-imports': 'error',
			// 禁止在 super 被调用之前使用 this 或 super
			'no-this-before-super': 'error',
			// @fixable 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
			'no-useless-computed-key': 'error',
			// @fixable 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
			'no-useless-rename': 'error',
			// @fixable 申明后不再被修改的变量必须使用 const 来申明
			'prefer-const': 'error',
			// @fixable ... 的后面禁止有空格
			'rest-spread-spacing': ['error', 'never'],
			// @fixable ${name} 内的首尾禁止有空格
			'template-curly-spacing': ['error', 'never'],
		},
	},
];
