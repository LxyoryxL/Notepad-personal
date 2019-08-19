<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        :timestamp="item.date"
        placement="top"
        :color="'#aabbc'+item.id"
        v-for="item in todoList"
        :key="item.id"
      >
        <el-card>
          <h4>{{item.title}}</h4>
          <p>{{item.content}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reverse: true
    };
  },
  computed: {
    todoList: function() {
      //获取本地数据
      return this.$store.getters.filterAll;
    }
  }
};
</script>

<style >
</style>

