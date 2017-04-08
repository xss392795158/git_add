var webpack = require('webpack');
module.exports = {
    entry: __dirname + '/app/main.js',//ҳ������ļ�����
    //�ļ��������
    output: {
        path: __dirname+'/public',//��ǰ�ļ�package.json��·��
        filename: 'bundle.js'//���֮��������ļ�����dist�µ�index.js
    },
    module: {
        //����������
        loaders: [{
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader"
        }]
    }
}