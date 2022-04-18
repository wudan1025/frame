<!--
 * @LastEditors: wudan01
 * @description: 文件描述
-->

# keep-alive
> 让动态组件不被释放

# activated 组件更新时刷新
> activated : 被 keep-alive 缓存的组件激活时调用。

> onActivated(function)
```
import { ref, onActivated } from 'vue'

// 处理导入用户后数据不重新加载的问题
onActivated(getListData)
```

# deactivated 组件失活时调用
deactivated