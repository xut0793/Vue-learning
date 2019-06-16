# Vue-learning
vue.js学习路径
![map](./image/渐近式1.png)

## Vue的API地图
[vue的API地图](https://marozed.ma/vue-cheatsheet/)

## 视图层
点击可直接到达详情页面

**指令**
- [`{{ }}` / `v-html`](https://www.cnblogs.com/webxu20180730/p/10890377.html)
- [`v-if` / `v-else` / `v-else-if`](https://www.cnblogs.com/webxu20180730/p/10890502.html)
- [`v-show`](https://www.cnblogs.com/webxu20180730/p/10890502.html)
- [`v-for`](https://www.cnblogs.com/webxu20180730/p/10890524.html)
- [`v-bind` / `:`](https://www.cnblogs.com/webxu20180730/p/10890557.html)
- [`v-on` / `@`](https://www.cnblogs.com/webxu20180730/p/10890593.html)
- [`v-model`](https://www.cnblogs.com/webxu20180730/p/10890653.html)

**样式**
- [`v-bind:class`](https://www.cnblogs.com/webxu20180730/p/10890572.html)
- [`v-bind:style`](https://www.cnblogs.com/webxu20180730/p/10890572.html)

**特殊特性**
- [`key`](https://www.cnblogs.com/webxu20180730/p/10890524.html)
- [`ref`](https://www.cnblogs.com/webxu20180730/p/10890710.html)

**过渡动画**

- [css过渡：`<transition name="">`]()
- [js过渡： `<transition v-on:method`]()

**模板形式**
- [`HTML`](https://www.cnblogs.com/webxu20180730/p/10890790.html)
- [`template`](https://www.cnblogs.com/webxu20180730/p/10890790.html)
- [`render`方法：`createElement`](https://www.cnblogs.com/webxu20180730/p/10890790.html)
- [`render`方法：`JSX`](https://www.cnblogs.com/webxu20180730/p/10890790.html)

## 逻辑层
**通用配置选项option**

- [`data`](https://www.cnblogs.com/webxu20180730/p/10891560.html)
- [`computed`](https://www.cnblogs.com/webxu20180730/p/10891568.html)
- [`methods`](https://www.cnblogs.com/webxu20180730/p/10891585.html)
- [`watch`](https://www.cnblogs.com/webxu20180730/p/10891604.html)
- [`filters`](https://www.cnblogs.com/webxu20180730/p/10891616.html)
- [`mixins`](https://www.cnblogs.com/webxu20180730/p/10891639.html)
- [`directives`](https://www.cnblogs.com/webxu20180730/p/10891658.html)

**生命周期钩子函数**
- [`beforeCreate`](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [**` created`**](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [` beforeMount`](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [**` mounted`**](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [`beforeUpdate`](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [**` updated`**](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [`beforeDestory`](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [`destory`](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [`activated` (`keep-alive`)](https://www.cnblogs.com/webxu20180730/p/10891671.html)
- [`deactivated` (`keep-alive`)](https://www.cnblogs.com/webxu20180730/p/10891671.html)

## 组件 `Component`

1. **组件的概念**
1. **组件的构建和注册**
    - 构建：`com = Vue.extend(option)`
    - 注册：`Vue.component('my-com', com)` / `vm.components: {'my-com': com}`
    - 语法糖： `Vue.component('my-com',option)`   `vm.components('my-com': option)`
    - 组件命名规范

1. **组件三大API： `prop`  /  `event`  /  `slot`**
    **prop**

    - 字符串数组形式： `props: ['prop1', 'prop2', ...]`
    - 对象形式： `type / required / defalut / validator`
    - prop的命名规范
    - 动态prop（除字符串外，其它类型传入都需要使用动态prop，即v-bind绑定）
    - 单向数据流
    - 非prop特性: `inheritAttr: false;  / $attrs` 

    **event**
    - `v-on  /  $on` 监听事件
    - `$once`  一次性事件
    - `$emit` 触发事件
    - `$off`  卸载事件监听
    - `$listeners` v-on绑定监听器集合（除原生监听事件）
    - `.native` 原生事件修饰符
    - `.sync`  双向绑定修饰符
    - `model` 属性

    **slot**
    - 普通插槽 
        ```html
        <slot></slot>
        ```
    - 插槽提供默认值 
        ```html
        <slot>default content</slot>
        ```
    - 具名插槽 
        ```html
        <slot name="someName"></slot>
        <!-- 组件调用 -->
        <my-com>
            <template v-slot:somName></template>
        <my-com>
        ```
    - 作用域插槽 
        ```html
        <slot :prop="value"></slot>
        <!--组件调用 -->
        <my-com>
            <template v-slot='childValue'>{{ cilidValue.value}}</template>
        </my-com>
        ```
    - 独占默认插槽的写法
        ```html
        <some-component v-slot="childValue"> {{ childValue.value }}</some-component>
        <some-component v-slot:default="childValue"> {{ childValue.value }}</some-component>
        ```
    - 解构插槽prop
        ```html
        <my-com v-slot="{value}">{{ value }}</my-com>
        <!-- 重命名 -->
        <my-com v-slot="{value: otherName}">{{ otherName }}</my-com>
        <!-- 重命名并提供默认值 -->
        <my-com v-slot="{value: {otherName: defaultValue}}">{{ otherName }}</my-com> 
        ```
    - 动态插槽名
        ```html
        <my-com>
            <template v-slot:[dynamicSlotName]></template>
        </my-com>
        ```
    - `v-slot` 的简写 `#`
        ```html
        <my-com>
            <template #:somName></template>
        <my-com>
        ```
    - 模板编译作用域 和 插槽作用域

1. **组件实例的调用**
    - `ref`
    - `$root`
    - `$parent`
    - `$children`

1. **组件间的通信**
    - 父子组件通信 `prop / $emit`
    - 三层嵌套组件 `$attrs` / `$liteners`
    - 后代组件通信 `provide / inject`
    - 组件实例引用 `$root` / `$parent` / `$children` / `$refs`
    - 事件总线 `const Bus = new Vue()`
    - 状态管理器 `Vuex`
1. **动态组件`is`**
1. **异步组件`工厂函数`**
1. **函数式组件`functional`**
1. **内置组件`transiton` / `keep-alive`**


1. **其它**
    - 组件的递归调用
    - 组件的循环引用
    - `v-once`创建静态组件


## 路由 `Vue-router`

1. 前端路由历史
    1. 服务端渲染(SSR:server side render)
    1. 客户端路由(client side routing)
1. 前端路由实现原理
    1. hash模式: location.hash 和 hashChange事件
    1. history模式： history 和 popstate事件
1. vue-router
    1. const router = new VueRouter(option)中的选项对象option
    1. 路由器实例对象router
    1. 路由对象route
    1. router-link标签的特性
    1. router-view标签的特性
1. 路由传参的5种方式
    1.路由动态参数: '/user/:userId'和params
    ```js
    const route = {path: '/user/:userId'}
    this.$router.push({path:`/user/${userId}`})
    this.$route.params.userId
    ```
    2.命名路由传参,使用name和params
    ```js
    const route = {name:'home',...}
    this.$router.push({name:'Login',params:{id:'leelei'}})
    this.$route.params.id
    ```
    3.查询参数传参，使用path和query
    ```js
    this.$router.push({path:'/login',query:{id:'leelei'})
    this.$route.query.id
    ```
    4.prop形式：布尔/对象/函数
    ```js
    const route = [{prop:true, ...}]
    const route = [{prop: {someProp:'someValue'}] 
    const routes =[{props: (route) => ({ query: route.query.q }),...}]
    ```
    5. meta元信息定义数据
    ```js
    // 定义路由时，定义元信息
    const routes = [
    {meta: {someData:'someData'},... },
    // 获取数据
    this.$route.meta.someData
    ```
1. 从路由中获取组件实例
    ```js
    const matchedComponents: Array<Component> = this.$router.getMatchedComponents(location?)
    ```

## 状态管理 `Vuex`
1. 状态管理的概念
1. vuex基本使用
1. Vuex对象
1. option选项
1. store实例对象的属性: state, getters
1. store实例对象的方法
    1. commit / dispatch
    1. 注册和卸载plugin的方法
    1. 注册和卸载Module的方法
    1. vuex的辅助函数: mapState / mapGetters / mapMutaions / mapActions
1. vuex的项目结构组织
## 单元测试 `Vue-test-utils`
## 项目构建`vue-cli`
## 项目插件：`vue-loader` `vue-devtools`

## 进阶内容
- 响应式原理
- 虚拟DOM
- 模板编译原理
- `Vue API`和`vm API`