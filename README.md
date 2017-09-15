# vue-component-template
### 本vue组件开发模板实现功能：
* 能够实现组件化开发，并且打包
* 也能实现丑陋化压缩
* 第三方引用和引用正常的开源地方组件一样，能够提供import，require等使用方式

### 主要目录介绍：
* lib是打包后的组件内容（包括样式，图片，js等），第三方使用入口为lib/common.js。
* packages/index.js是导出组件的入口js。

### 操作指令介绍：
* 安装本地开发环境:

```
$ npm install
```

* 本地测试服务启动:

```
$ npm run dev
```

* 项目产品打包:

```
$ npm run build

```


* 组件打包:

```
$ npm run pub

```