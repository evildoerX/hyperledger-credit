# 指南

基于[vuepress](https://v1.vuepress.vuejs.org/zh/)，

关于[plantuml](http://plantuml.com/zh/class-diagram)

## 添加header

### 1. 修改路径

``` bash
1. cd docs/.vuepress/nav
2. vim index.js

```

### 2. 说明

|字段|说明|
|---|---|
|text|名称|
|link|路径|
|items|子|

### 3. 示例

``` js
{
  text: '主题',
  link: '/zh/theme/'
},
{
  text: '了解更多',
  items: [
    {
      text: 'API',
      items: [
        {
          text: 'CLI',
          link: '/zh/api/cli.html'
        },
        {
          text: 'Node',
          link: '/zh/api/node.html'
        },
      ]
    },
  ]
}
  
```

## siderbar

### 1.文件路径

``` bash
1. cd docs/.vuepress/
2. vim config.js

```

### 2. 方法
> 自行参考实现
```js
sidebar: {
      "/guide/": getGuideSidebar("指南", "深入"),
    }
```