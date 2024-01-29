const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js', // Dẫn tới file index.js ta đã tạo
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // Thư mục chứa file được build ra
		filename: 'bundle.js', // Tên file được build ra
	},
	module: {
		rules: [
			{
				test: /\.(js|tsx|jsx|ts)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	// Chứa các plugins sẽ cài đặt trong tương lai
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	devServer: {
		port: 3000,
		historyApiFallback: true,
	}
};
