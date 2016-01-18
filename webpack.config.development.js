const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/index.jsx')
    ],
    output: {
        path: path.resolve('./www'),
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.jsx', '.js', '.json', '.less']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    stage: 0,
                    optional: [ 'runtime' ],
                    plugins: [
                        'react-transform'
                    ],
                    extra: {
                        'react-transform': {
                            'transforms': [{
                                'transform': 'react-transform-hmr',
                                'imports': ['react'],
                                'locals': ['module']
                            }, {
                                'transform': 'react-transform-catch-errors',
                                'imports': ['react', 'redbox-react']
                            }]
                        }
                    }
                }
            },
            { 
                test: /\.less$/, 
                loader: "style!css!less"
                // loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            { test: /\.css$/, loader: 'style!css' },
        ]
    },
    plugins: [
        // new ExtractTextPlugin('[name].css'),
        // new ExtractTextPlugin('spec.css', { allChunks: true }),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ]
};