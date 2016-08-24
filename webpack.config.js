var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


var path_base = './Resume_Demo/public';
var path_libs = path_base+'/libs';
var path_js = path_base+'/javascripts';
var path_ngApp = path_js+'/ngApp';
var path_output = path_base+'/bin';
var path_css = path_base+'/stylesheets';
var path_react = path_js+'/reactComponents';

module.exports = {

	plugins:[ commonsPlugin,new ExtractTextPlugin("[name].css") ],

	entry:{
		index:path_js+'/index.js'
	},
	output:{
		path:path_output,
		filename:'[name].js',
	},
	module:{
		loaders:[
			 { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2' },
			 { test: /\.css$/, loader:'style-loader!css-loader'},
			 { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	}

}