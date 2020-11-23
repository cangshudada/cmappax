<p align="center">
  <a href="https://www.cmappax.com/">
    <img width="200" src="https://files.cmappax.com/wwwcmappaxom/images/cmp_logo.svg">
  </a>
</p>
<h1 align="center">
  <a href="https://www.cmappax.com/" target="_blank">cmappax</a>
</h1>



> ### cmappax editor by chuanve base on Vue.

[![GitHub release (latest by date)](https://img.shields.io/github/v/release/cangshudada/cmappax.svg?style=flat-square)](https://github.com/cangshudada/cmappax/releases) [![npm](https://img.shields.io/npm/v/cmappax.svg?style=flat-square)](https://www.npmjs.com/package/cmappax) [![GitHub file size in bytes](https://img.shields.io/github/size/cangshudada/cmappax/index.js?style=flat-square)](https://github.com/cangshudada/cmappax/tree/master)



## Overview

[![](https://www.cmappax.com/cmappax.png)](https://www.cmappax.com/)



## 关于cmappax

### 特性🎉

- 支持在线绘制不同个性风格的、精美的2D/3D地图，打开网页就能查看和编辑。
- vue组件开箱即用，可被第三方轻松集成。
- 云端实时保护，权限安全可控。
- 绘图工具丰富强大
- 断电保护，不怕数据丢失



### 能力✨

- **多能力 -** 具备快速拆分、合并、路径连接、布尔运算、POI设定等操作。
- **多图层 -** 根据不同业务需要，支持按需调用不同的图层信息。
- **多皮肤 -** 具备多种地图皮肤一按切换，满足不同设计需要。
- **多主题 -** 支持一个后台创建不同主题的地图，满足个性化展示需求。
- **多权限 -** 自主设定不同的权限管理，满足差异化管理需要。
- **多平台 -** 支持不同平台调用，满足多业务场景的需求。




## 支持环境

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/) Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge                                                         | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              | last 2 versions                                              |



## 安装

### 使用 npm 或 yarn 安装

```bash
$ npm install cmappax --save
```

```bash
$ yarn add cmappax
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。



## 使用

### 全局引入

```javascript
import Vue from 'vue';
import CmappaxEditor from 'cmappax';
import 'cmappax/cmappax.min.css';

Vue.use(CmappaxEditor);

new Vue({
  el: '#app',
  template: '<App/>',
});
```



### 局部引入

```vue
<template>
  <Cmappax-Editor 
     :pid="pid" 
     :interface="interface" 
     :user="user" 
     @close="close" 
     @initCompleted="initCompleted"
   />
</template>

<script>
import CmappaxEditor from 'cmappax';
import 'cmappax/cmappax.min.css';
export default {
 data(){
     return {
         pid: 1,
         interface: "https://www.cmappax.com",
         user: {
             userId: "xx",
             name: "xx"
         }
     }
 },
 methods: {
    //编辑器初始化完成钩子函数
    initCompleted() {},
    //编辑器关闭钩子函数
    close(){}
 },
 components: {CmappaxEditor}
};
</script>

```



### 配置参数

|   参数    |              说明              |      类型      | 是否必须 | 版本 |
| :-------: | :----------------------------: | :------------: | :----: | :--: |
|    pid    |      *projectID - 项目ID*      | string\|number | 是 | 2.0.0 |
| interface |       *interface - 接口*       |     string     | 是 | 2.0.0 |
|   user    |    *user info - 用户token*     | Pick<"userId"\|"name", string> | 是 | 2.0.0 |
| building  |     *buildingID - 建筑ID*      | string\|number | 否 | 2.0.0 |
| initFloor | *initFloorID - 初始显示楼层ID* | string\|number | 否 | 2.0.0 |
|  options  |  *options params - 配置参数*   | Partial<IOptions> | 否 | 2.0.0 |



```typescript
/** Component size definition for CmappaxEditorGrid */
declare type CmappaxComponentSize = "large" | "medium" | "small" | "mini";

/** IPentoolOptions interface - 钢笔工具配置 */
declare interface IPentoolOptions {
  lineWidth: number; //钢笔工具线宽
  controlStyle: {
    size?: number; //钢笔控制点大小
    fillColor?: number; //钢笔控制点填充色
    lineColor?: number; //钢笔控制点线条颜色
  };
  curveStyle: {
    fillColor?: number; //钢笔曲线填充色
    lineColor?: number; //钢笔曲线线条色
  };
}

/** IOptions interface */
declare interface IOptions {
  /** PreView page url - 预览页链接 */
  preViewUrl: string;

  /** Path grid Size - 网格大小 */
  gridSize: CmappaxComponentSize;

  /** The outermost canvas background color - 最外层canvas背景色 */
  backgroundColor: number;

  /** Stage background color - 舞台背景色 */
  stageColor: number;

  /** Stage border background color - 舞台边框颜色 */
  stageBorderColor: number;

  /** Selected block edit point and zoom box color - 编辑点以及缩放框选中颜色 */
  selectdPolygonColor: number;

  /** Point element radius - 点元素半径 */
  pointRad: number;

  /** Initial stage zoom - 初始缩放 */
  initStageScale: number;

  /** Edit point and zoom box proportional zoom ratio - 编辑点以及缩放框等比缩放比例 */
  editNodeScale: number;

  /** Menu bar visible setting - 菜单栏显示配置（文件栏、操作栏、设置栏、视图栏、管理栏、库、帮助栏） */
  menuList: Pick<
    "FILE" | "OPER" | "SET" | "VIEW" | "MANAGE" | "LIBRARY" | "HELP",
    boolean
  >;

  /** History record save interval(Less than or equal to 0 does not take effect) - 历史记录保存间隔时间（小于或等于0不生效） */
  saveGapTime: number;

  /** Polygon attribute configuration - 区块属性配置 */
  polygonOptions: Partial<Pick<"fillColor" | "lockColor", number>>;

  /** curve attribute configuration - 弧形属性配置 */
  curveOptions: Partial<
    Pick<"curveWidth" | "curveColor" | "controlSize" | "controlColor", number>
  >;

  /** path attribute configuration - 路径属性配置 */
  pathOptions: Partial<
    Pick<
      | "nodeColor"
      | "pathWidth"
      | "pathColor"
      | "selectColor"
      | "selPathColor"
      | "disabledPath"
      | "noGetOutPath"
      | "noAccessPath",
      number
    >
  >;

  /** font attribute configuration - 文字属性配置 */
  fontOptions: Partial<Pick<"fontSize" | "fontColor", number>>;

  /** outline attribute configuration - outline属性配置 */
  outlineOptions: Partial<Pick<"outlineWidth" | "outlineColor", number>>;

  /** pentool attribute configuration - 钢笔工具属性配置 */
  pentoolOptions: Partial<IPentoolOptions>;

  /** pathGrid attribute configuration - 路径网格属性配置 */
  gridOptions: Partial<Pick<"gridActiveColor" | "gridLimitColor", number>>;
}
```



### 事件

|     参数      |           说明           |    类型    | 版本 |
| :-----------: | :----------------------: | :--------: | :--: |
| initCompleted | 编辑器初始化完成钩子函数 | () => void |  -   |
|     close     |    编辑器关闭钩子函数    | () => void |  -   |



### 操作说明

#### 👉***[编辑器具体操作文档欢迎前往cmappax指南查看](https://www.cmappax.com/guide)***👈



## 其他说明

- ***有问题欢迎提交* Issue。**
- ***本项目为作者一人维护，精力有限，有限解决重大bug，望理解。***
- **用于生产环境，请使用 `release` 版本代码**
- ***暂只支持`vue2.x`版本引入***

