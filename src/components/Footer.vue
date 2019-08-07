<template>
  <footer class="footer">
    © 2019 |&nbsp;&nbsp;This Notebook by lxy &nbsp;|&nbsp;
    <a
      href="https://lxyoryxl.github.io/"
      target="_blank"
    ></a>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: rgb(240, 240, 240);
  text-align: center;
  font-size: 14px;
  color: #666;
  z-index: 9999;
  border-top: 1px solid #ddd;

  a {
    color: #666;
    display: inline-block;
    background: url(https://img.icons8.com/material-rounded/20/000000/github.png)
      no-repeat center;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
  }
}
</style>