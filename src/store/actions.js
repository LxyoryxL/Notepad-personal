export default {
  addNote: function (context, item) {
    context.commit('ADD_NOTE', item);
  },
  saveNote: function (context, item) {
    context.commit('SAVE_NOTE', item);
  },
  getNote: function (context, item) {
    context.commit('GET_NOTE', item)
  },
  viewDetail: function (context, item) {
    context.commit('VIEW_DETAIL', item);
  },
  hideDetail: function (context) {
    context.commit('HIDE_DETAIL');
  },
  doneNote: function (context, id) {
    context.commit('DONE_NOTE', id)
  },
  delNote: function (context, item) {
    context.commit('DEL_NOTE', item)
  },
}
