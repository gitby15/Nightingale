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
	devtool: "source-map",
	entry:{
		index:path_js+'/index.js',
		bootstrap:path_libs+'/bootstrap/dist/css/bootstrap.css',
	},
	output:{
		path:path_output,
		filename:'[name].js',
	},
	module:{
		loaders:[
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2' },
			{ test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2' },
			{ test: /\.css$/, loader: ExtractTextPlugin.extract(
				"style-loader",
				"css-loader?sourceMap",
				{
					publicPath: "../"
				}
			)},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
			
			{test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
        
		]
	}

}