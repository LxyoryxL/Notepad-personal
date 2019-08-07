<template>
  <div class="page">
    <div class="icon_no_list" v-if="todoList.length==0">暂无记录</div>
    <detailDialog v-if="isShow"></detailDialog>

    <el-card
      class="box-card"
      v-for="(item,index) in todoList"
      :key="index"
      v-if="todoList.length>0"
    >
      <div slot="header" class="clearfix">
        <em>{{item.id+1}}.&nbsp;</em>
        <span>{{item.title}}</span>
        <el-button style="float: right; padding: 0 5px" type="text">
          <time class="time">{{ item.date }}&nbsp;&nbsp;&nbsp;&nbsp;</time>
          <span @click="viewDetail(item)" class="el-icon-s-order"></span>
          <span v-if="!item.isDone" @click="doneNote(item.id)" class="el-icon-circle-check"></span>
          <!-- <span>编辑</span> -->
          <span @click="delNote(item)" class="el-icon-delete"></span>
        </el-button>
      </div>
      <div class="text item">{{item.content}}</div>
    </el-card>
  </div>
</template>

<script>
import detailDialog from "@/components/detailDialog";
export default {
  computed: {
    todoList: function() {
      return this.$store.getters.filterNoDoned;
    },
    isShow: function() {
      return this.$store.state.isShow;
    }
  },
  components: {
    detailDialog
  },
  methods: {
    viewDetail: function(item) {
      this.$store.dispatch("viewDetail", item);
    },
    doneNote: function(id) {
      this.$store.dispatch("doneNote", id);
    },
    delNote: function(item) {
      this.$store.dispatch("delNote", item);
    }
  }
};
</script>

<style lang="less" scoped>
</style>

