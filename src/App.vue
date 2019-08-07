<template>
  <div id="app">
    <NoteHeader @tools="changePages"></NoteHeader>
    <div class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
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
  components: {
    NoteHeader,
    Sidebar,
    Theme,
    Footer
  },
  methods: {
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
    // overflow: hidden;
    padding-top: 110px;
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
</style>
