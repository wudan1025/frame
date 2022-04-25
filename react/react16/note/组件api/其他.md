<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->
# forceUpdate([function callback])

> 调用本组件及子组件的 render 方法

> 读取this.props和this.state，如果状态没有改变，那么React只会更新DOM。

> 应该尽量避免使用forceUpdate()，而仅从this.props和this.state中读取状态并由React触发render()调用
> 
todo 问题 状态不改变，dom如何改变？

# findDOMNode

> 如果组件已经挂载到DOM中，该方法返回对应的本地浏览器 DOM 元素。当render返回null 或 false时，this.findDOMNode()也会返回null。从DOM 中读取值的时候，该方法很有用，如：获取表单字段的值和做一些 DOM 操作。

# isMounted

> isMounted()方法用于判断组件是否已挂载到DOM中。可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错。

