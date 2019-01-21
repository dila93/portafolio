const path = require('path');
var APP_DIR = path.resolve(__dirname, 'src/app');

module.exports = {
	mode: 'development',
	entry: './src/app/index.js',
	output: {
		path: __dirname + '/src/public/js',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				include: APP_DIR,
				exclude: /node_modules/
			},
			{
				test: /\.(jpg|png)$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 25000,
					},
				}
			},
			{ 
				test: /(\.css$)/, 
				loaders: ['style-loader', 'css-loader'] 
			}, 
			{ 
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
				loader: 'url-loader?limit=100000' 
			}
		]
	}
};