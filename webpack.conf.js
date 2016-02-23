/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// webpack --config .\webpack.conf.js --progress --colors --watch
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "./www/bundle.js"
    }
};