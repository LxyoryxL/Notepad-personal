<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <NoteHeader @tools="changePages"></NoteHeader>
    <!-- 中间内容 -->
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <!-- 左边栏 -->
    <Sidebar :is-show="tools" @openTheme="theme=true;tools=false"></Sidebar>
    <Theme :is-show="theme" @close="theme = false"></Theme>
    <Footer></Footer>
  </div>
</template>

<script>
import NoteHeader from "@/components/header";
import Sidebar from "@/components/Sidebar";
import Theme from "@/components/Theme";
import Footer from "@/components/Footer";

export default {
  name: "app",
  data() {
    return {
      tools: false,
      theme: false
    };
  },
  created() {
    this.getNote(); // 获取本地 Note 数据
    this.saveNote(); //存储本地 Note 数据
  },
  mounted() {
    this.InitBgColor(); //初始化 背景颜色
  },
  components: {
    NoteHeader,
    Sidebar,
    Theme,
    Footer
  },
  methods: {
    getNote() {
      this.$store.dispatch("getNote");
    },
    saveNote() {
      this.$store.dispatch("saveNote");
    },
    InitBgColor() {
      document
        .querySelector("body")
        .setAttribute(
          "style",
          `background-color:${this.$store.state.theme} !important;`
        );
      console.log(document.querySelector("body"));
    },
    changePages() {
      this.tools = !this.tools;
    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}

html,
body {
  height: 100%;
}

/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
menu,
nav,
section {
  display: block;
}

body {
  background: url(./assets/ginger-cat-artificial-two.png) no-repeat center
    bottom;
  background-size: 60%;
  line-height: 1;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* custom */

a {
  color: #7e8c8d;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
  text-decoration: none;
}

li {
  list-style: none;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  .container {
    height: auto;
    padding-top: 110px;
    opacity: 0.8;
  }
}

.page {
  height: auto;
  overflow: hidden;

  .icon_no_list {
    width: 150px;
    height: 30px;
    line-height: 30px;
    margin: 120px auto 0;
    padding-top: 150px;
    background: url(assets/icon_no_list.png) no-repeat center;
    text-align: center;
  }
}

.box-card {
  .time {
    color: black;
  }

  .el-icon-s-order,
  .el-icon-circle-check,
  .el-icon-delete {
    transform: scale(1.8);
    padding: 0 5px;

    &:hover {
      transform: scale(1.9);
    }
  }
}

// 粒子效果
#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
