import Vue from "vue"
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList: [{
        isDone: false,
        date: "2019/8/19 上午7:16:17",
        id: 0,
        title: "localStorage：",
        content: "是一种你不主动清除它，它会一直将存储数据存储在客户端的存储方式，即使你关闭了客户端（浏览器)，属于本地持久层储存"
      },
      {
        isDone: false,
        date: "2019/8/20 上午7:16:17",
        id: 1,
        title: "模板字符串",
        content: "指的是用反引号 `` 代替原来的 “” ‘’来表示字符串"
      },
      {
        isDone: false,
        date: "2019/8/20 上午7:16:17",
        id: 2,
        title: "箭头函数",
        content: "箭头函数是函数的一种简写形式"
      },
      {
        isDone: false,
        date: "2019/8/20 上午7:16:17",
        id: 3,
        title: "背单词",
        content: "今天背50个英文单词"
      },
      {
        isDone: false,
        date: "2019/8/20 上午7:16:17",
        id: 4,
        title: "viewport 视口",
        content: "visual 视口指的是可见视口"
      }
    ],
    todoInfo: {
      id: 0,
      date: "",
      title: "",
      content: "",
      isDone: false
    },
    detail: {},
    isShow: false,
    theme: 'blue'
  },
  actions: actions,
  mutations: mutations,
  getters: {
    filterAll: function (state) {
      let todoList = state.todoList;
      return todoList;
    },
    filterDoned: function (state) {
      let todoList = state.todoList.filter(function (item) {
        if (item.isDone) {
          return item
        }
      })
      return todoList;
    },
    filterNoDoned: function (state) {
      let todoList = state.todoList.filter(function (item) {
        if (!item.isDone) {
          return item;
        }
      })
      return todoList;
    }
  }
})
