# 《Vue.js快跑》
2019-4-13

## 使用ref直接访问DOM元素
传统DOM操作或jQuery操作DOM，都必须是选择器先选择对应的DOM元素。比如：
```html
<button id="btn">按钮</button>
```
```js
var dom = document.getElementById("btn");
var $dom = $("#btn")
console.log(dom === $dom[0]) // true
```
在vue中提供了更为便捷的方法，只需要在元素开始标签内添加ref特性即可。然后在js部分使用`this.$refs`获取DOM元素。这个元素完全是原生DOM元素。
```html
<button ref="btn" id="btn">按钮</button>
```
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://unpkg.com/vue"></script>
new Vue({
    mounted(){
        this.$nextTick(() => {
            let dom = document.getElementById("btn7")
            let $dom = $("#btn7")
            let v_dom = this.$refs.btn

            console.log('dom == $dom', dom === $dom[0]) // true
            console.log('dom === v_dom', dom === v_dom) // true
        })
    }
})
```
虽然 Vue.js 通常鼓励开发人员沿着“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们确实要这么做，此时使用ref是非常便利的方法。
[DEMO：ref获取dom元素](https://jsrun.net/gHXKp/edit)
