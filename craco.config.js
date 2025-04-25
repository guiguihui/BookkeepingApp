const path = require('path')

module.exports ={
    //webpack配置
    webpack:{
        //配置别名
        alias:{
            //约定用@表示src
            '@':path.resolve(__dirname, 'src')
        }
    }
}