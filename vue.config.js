// eslint-disable-next-line @typescript-eslint/no-var-requires
const openInEditor = require("launch-editor-middleware");

module.exports = {
    configureWebpack: {
        devServer: {
            port: 7777,
            hot: true,
            liveReload: true,

            // for Open in Editor function:
            before(app) {
                app.use("/__open-in-editor", openInEditor("code"));
            }
        }
    }
};
