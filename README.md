# WikiQuery (frontend)
这里是 WikiQuery 项目的前端仓库, WikiQuery 是一款用于轻松查询和浏览维基百科资料的应用，主要面向移动端。


## 前端开发技术栈
- Vue3
- Antd

## 如何加入
参与贡献前，请详细阅读 [Wiki页面](https://github.com/chameeer/wikiquery_frontend/wiki) 中 “开发规约与建议” 和 “Commit 规范” 的内容。

### 前置需求
需要有 Node.js 14+ 运行环境

需要安装 yarn，在 Node 已安装的情况下，可以通过

``` 
npm install -g yarn
```
安装 yarn

### 安装依赖
通过
```
yarn install
```

### 编译发布
#### 热加载（develop模式）
```
yarn serve
```

#### 编译（为生产环境准备）
```
yarn build
```

### 语法 LinT
```
yarn lint
```
