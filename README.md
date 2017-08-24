# antd-mobile with webpack
```shell
basic proj demo with webpack@1
这是一个基于React+antd-mobile的一个移动端手机音乐播放器。
```
### Install & Start

```shell
npm i
npm start
```

open http://127.0.0.1:8100/或者更改package.json中的ip和端口号并重新npm start

### Build

```sh
npm run build  # then see dist dir
# Note: you should remove `webpack-visualizer-plugin / webpack-bundle-analyzer` code in webpack.config.js file for production environment.
```

bundle analyzer tools: 
[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) / 
[webpack-visualizer-plugin](https://www.npmjs.com/package/webpack-visualizer-plugin) 
(Note: [just for dist bundle file analyse](https://github.com/th0r/webpack-bundle-analyzer/issues/86))
