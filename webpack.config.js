const path                              = require('path');
let _entry                              = `./src/scripts/app.js`;
let _output                             = `./dist`;
const ExtractTextPlugin                 = require('mini-css-extract-plugin');

module.exports = {
    entry: _entry,

    output: {
        filename: 'app.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    devtool: 'source-map',

    devServer: {
        contentBase: _output,
        hot: true
    },

    plugins: [
        new ExtractTextPlugin('style.css')
    ]

    //watch: true, //uncomment for fast develop
};
