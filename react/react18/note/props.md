<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
# setProps
设置组件属性，并重新渲染组件。
props相当于组件的数据流，它总是会从父组件向下传递至所有的子组件中。
通知React.render()组件需要重新渲染，可以使用setProps()。
更新组件，我可以在节点上再次调用React.render()，也可以通过setProps()方法改变组件属性，触发组件重新渲染。

# replaceProps
replaceProps()方法与setProps类似，但它会删除原有 props。
todo 使用场景？