const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            "vue-router": 'vue-router/dist/vue-router.js'
        },
    },
	
	entry: {
		app: [
		"@babel/polyfill",
		'./src/app/index.js'
		] 
	},

	output: {
		path: path.resolve(__dirname, './'),
		filename: 'js/app.js'
	},

	devServer: {
		port: 4000
	},

	module: {
		rules: [
		{
			test: /\.js$/,
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			use: [
			MiniCssExtractPlugin.loader,
			'css-loader'
			]
		},
		{
			test: /\.vue$/,
			loader: 'vue-loader'
		}
		],
	},

	plugins: [
	new HtmlWebpackPlugin({
		template: './src/index.html',
		minify: {
			collapseWhitespace: true,
			removeComments: true,
			removeRedundantAttributes: true,
			removeScriptTypeAttributes: true,
			removeStyleLinkTypeAttributes: true,
			useShortDoctype: true
		}
	}),
	new MiniCssExtractPlugin({
		filename: 'css/app.css'
	}),
	new VueLoaderPlugin()
	]
}