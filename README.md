# 基于 vue2.0+vuex+localStorage 开发的本地记事本
<a href="http://mona2544.gitee.io/notepad-personal/dist/#/all">演示地址</a>

> 本文采用 vue2.0+vuex+localStorage+scss+element-ui+vue-router+webpack，实现一个本地存储的记事本。

## 功能说明

- 支持回车添加事件
- 支持导出/导入数据
- 支持本地化存储
  支持编辑事件
  支持事件状态切换
  添加事件 -> 进入未完成列表
  未完成 -> 已完成(勾选 checkbox)
  未完成 -> 已取消(点击取消按钮)
  已完成 -> 未完成(取消勾选 checkbox)
  已取消 -> 未完成(点击恢复按钮)
  支持筛选事件
  支持删除事件
  支持清空所有事件
  支持折叠面板
  支持切换主题颜色

## 主要难点

**1. 回车添加事件**

```javascript
@keyup.enter="addNote"
```

**2. 支持导出/导入数据**

```javascript
@click="downloadData('notepad.txt',getDate)"

getNote() {
    this.$store.dispatch("getNote");
}

downloadData(fileName, content) {
    let aTag = document.createElement("a");
    let blob = new Blob([content]);
    aTag.download = fileName;
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
},
```

**3. 本地存储**
采用 HTML5 提供的在客户端存储数据的新方法，数据永久存储
用法：

- 存储数据：localStorage.setItem("state", JSON.stringify(state));
- 获取数据：JSON.parse(localStorage.getItem("state"));

```javascript
created() {
    this.getNote();// 获取本地 Note 数据
    this.saveNote();//存储本地 Note 数据
}

SAVE_NOTE: function (state) { //存储数据
    localStorage.setItem("state", JSON.stringify(state));
}
GET_NOTE: function (state) { //获取本地数据
    if (JSON.parse(localStorage.getItem("state")).todoList) {
        state.todoList = JSON.parse(localStorage.getItem("state")).todoList;
    }
    state.todoInfo = JSON.parse(localStorage.getItem("state")).todoInfo;
    state.detail = JSON.parse(localStorage.getItem("state")).detail;
    state.isShow = JSON.parse(localStorage.getItem("state")).isShow;
    state.theme = JSON.parse(localStorage.getItem("state")).theme;
}
```
