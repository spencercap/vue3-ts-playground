// eslint-disable-next-line @typescript-eslint/no-var-requires
const openInEditor = require('launch-editor-middleware');

module.exports = {
	configureWebpack: {
		devServer: {
			port: 7777,
			hot: true,
			liveReload: true,
			// lintOnSave: true, // let VSCode do this according to eslint settings in package.json

			// for Open in Editor function:
			before(app) {
				app.use('/__open-in-editor', openInEditor('code'));
			}
		}
	}
};
