# 基于 vue2.0+vuex+localStorage 开发的本地记事本
<a href="http://mona2544.gitee.io/notepad-personal/dist/#/all">演示地址</a>

<a href="http://mona2544.gitee.io/notepad-personal/dist/#/all">演示地址</a>

> 本文采用 vue2.0+vuex+localStorage+scss+element-ui+vue-router+webpack，实现一个本地存储的记事本。

## 功能说明

- 支持回车添加事件
- 支持导出/导入数据
- 支持本地化存储
- 支持切换背景颜色
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

**4. 切换背景颜色**
通过点击切换颜色按钮，使按钮栏 transfrom 改变（移出），使颜色栏 transfrom 也改变（移入）  
通过点击相应的颜色按钮，改变记事本背景颜色，并通过子组件向父组件传值达到：点击颜色按钮自动关闭的效果
通过 commit 一个事件，把颜色永久存储在 localStorage,下一次刷新页面时，从本地获取颜色数据

```javascript
    <Sidebar :is-show="tools" @openTheme="theme=true;tools=false"></Sidebar>
    <Theme :is-show="theme" @close="theme = false"></Theme>


Theme.vue代码:
    <div class="theme-list" @click="switchTheme('#26b6be')">
    <span style="background: #26b6be"></span>#26b6be
    </div>

    methods: {
        switchTheme(color) {
            document
                .querySelector("body")
                .setAttribute("style", `background-color:${color} !important;`);
            this.$emit("close");
            this.$store.commit("Switch_Theme", color);
        }
    }

```

刷新后背景颜色不变的实现代码：

```javascript

注意：一定要在dom元素都挂载到页面上时初始化，因为这时候就有dom元素并可以操作dom元素了
  mounted() {
    this.InitBgColor(); //初始化 背景颜色
  },

 InitBgColor() {
      document
        .querySelector("body")
        .setAttribute(
          "style",
          `background-color:${this.$store.state.theme} !important;`
        );
    },
```
