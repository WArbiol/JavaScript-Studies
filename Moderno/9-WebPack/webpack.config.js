const path = require("path")

module.exports = {
    entry: {
        index: "./src/index.js",
        galaxy: "./src/galaxy.js"
        //vai gerar o index.js quando ler o arquivo "./src/index.js"
        //npx webpack --mode development
        //--mode development é a verção de desenvolvimento
        //para ver o erro no terminal
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,  //todos que terminam com .js
                use: ['babel-loader']
            }
        ]
    },


    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
            watch: true,
        },
        open: true
    },

    mode: "development"
}