module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0'],

            }

        },
            { test: /\.css$/, loader: 'style-loader!css-loader' }]
    }
}