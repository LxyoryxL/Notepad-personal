<template>
  <div class="page">
    <div class="icon_no_list" v-if="todoList.length==0">暂无记录</div>
    <detailDialog v-if="isShow"></detailDialog>

    <el-row>
      <el-col :span="8" offset="8">
        <el-card :body-style="{ padding: '10px'  }" v-for="(item, index) in todoList" :key="index">
          <div style="padding: 5px">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.date }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import detailDialog from "@/components/detailDialog";
export default {
  computed: {
    todoList: function() {
      return this.$store.getters.filterDoned;
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
    delNote: function(item) {
      this.$store.dispatch("delNote", item);
    }
  }
};
</script>

<style lang="less" scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

