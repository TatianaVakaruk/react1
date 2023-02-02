const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {

module: {
    rules: [
        {
            test: /.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test:/.js$/,
            use:["babel-loader"]
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
    }),
]
};