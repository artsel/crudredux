// import WebpackBundleAnalyzer from 'webpack-bundle-analyzer'

const path = require('path');
const NODE_ENV = process.env.NODE_ENV || "development";

const HtmlWebPackPlugin = require('html-webpack-plugin');

 const config = {
	mode: 'development',
	entry:{
	index:'./src/index.js',
	app:'./src/app.js'
	},

	output: {
		path: path.join(__dirname),
		filename:'index.js',
		filename: '[name].js',
		clean:true,
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use:['babel-loader'],
			},

			{
				test: /\.css$/,
				use:[
				'style-loader',
				'css-loader'
				],
			},

			{
				test: /\.html$/,
				use:['html-loader'],
			},
		]
	},

	plugins:[
		new HtmlWebPackPlugin({
			title: 'development',
			template: "./src/index.html",
			filename: "./index.html"
		}),
		// new WebpackBundleAnalyzer.BundleAnalyzerPlugin(),
	]
}

module.exports = config;