var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/app/main.js',//页面入口文件配置
    //文件输出配置
    output: {
        path: __dirname+'/public',//当前文件package.json的路径
        filename: 'bundle.js'//打包之后输出的文件，即dist下的index.js
    },
    module: {
        //加载器配置
        loaders: [{
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }]
    }
}