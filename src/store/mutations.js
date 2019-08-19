export default {
  ADD_NOTE: function (state, item) {
    if (item.title && item.content) {
      let todoInfo = {}
      todoInfo.isDone = false;
      todoInfo.date = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();
      if (state.todoList.length == 0) {
        todoInfo.id = 0
      } else {
        let todoFirst = state.todoList[state.todoList.length - 1];
        todoInfo.id = todoFirst.id + 1;
      }
      todoInfo.title = item.title;
      todoInfo.content = item.content;
      state.todoList.push(todoInfo);
    }
    localStorage.setItem("state", JSON.stringify(state));
  },
  SAVE_NOTE: function (state) { //存储数据
    localStorage.setItem("state", JSON.stringify(state));
  },
  GET_NOTE: function (state) { //获取本地数据
    if (JSON.parse(localStorage.getItem("state")).todoList) {
      state.todoList = JSON.parse(localStorage.getItem("state")).todoList;
    }
    state.todoInfo = JSON.parse(localStorage.getItem("state")).todoInfo;
    state.detail = JSON.parse(localStorage.getItem("state")).detail;
    state.isShow = JSON.parse(localStorage.getItem("state")).isShow;
    state.theme = JSON.parse(localStorage.getItem("state")).theme;
  },
  VIEW_DETAIL: function (state, item) {
    state.isShow = true;
    state.detail = item;
    localStorage.setItem("state", JSON.stringify(state));
  },
  HIDE_DETAIL: function (state) {
    state.isShow = false;
    state.detail = {};
    localStorage.setItem("state", JSON.stringify(state));
  },
  DONE_NOTE: function (state, id) {
    state.todoList.map((item) => {
      if (item.id == id) {
        item.isDone = !item.isDone;
      }
    });
    localStorage.setItem("state", JSON.stringify(state));
  },
  DEL_NOTE: function (state, item) {
    let id = item.id;
    state.todoList = state.todoList.filter(function (item) {
      if (item.id != id) {
        return item;
      }
    })
    localStorage.setItem("state", JSON.stringify(state));
  },
  Switch_Theme: function (state, color) {
    state.theme = color;
    localStorage.setItem("state", JSON.stringify(state));
  }
}
