const webpack = require('webpack');

module.exports = {
    // ... diğer konfigürasyonlar
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            }),
        ],
    },
};
