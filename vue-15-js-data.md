#《Vue.js快跑》

2019-4-14

### `data`
`data`属性是一个对象，存放最纯粹的数据，这些数据可以在模板`template`、计算属性`computed`、方法`methods`、监听器`watch`、过滤器`filters`、生命周期函数中使用，并且可能会更新它。

`vue`在实例创建过程中，对`data`数据解析时会对每个定义的数据变量作**响应式**封装，以便在其它地方改变它时能触发该数据变量所相关联的其它内容的更新。(具体见响应式原理章节)

在`new Vue()`实例化中，`data`是作为一个对象属性传入，区别于自定义组件时`data`作为函数形式的写法，具体见**组件**。

```js
// 实例化
new Vue({
    el: "#app",
    data: {
        count:0
    }
})

// 组件，具体原因见组件章节
export default {
    data: function(){
        return {
            count: 0
        }
    }
}
```