# vue3-ts-playground

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### ESLint, TSLint, Prettier and Vetur
- TSLint: helps VSCode?


- ESLint: for vue-cli-service + compiler?


- VSCode + ESLint:

(better approach for format on Save)
```
	"editor.codeActionsOnSave": {
		"source.fixAll": true
	},
```


- VSCode + Prettier (dont do this way...): in `settings.json` turn on:

(helps w format on Save)
```
	"vetur.format.defaultFormatterOptions": {
		"prettier": {
			"singleQuote": true,
			"useTabs": true,
			"semi": true
		}
	},
```


- Vetur: see settings.json



### Vue Dev Tools
these can be super help

#### setup "Open in Editor" function
1. make sure "Launching from the command line" is setup in VSCode [https://vscode-eastus.azurewebsites.net/docs/setup/mac#_launching-from-the-command-line]
2. install `launch-editor-middleware` npm package
3. ensure `vue.config.js` has correct setup



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
