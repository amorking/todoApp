import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
    //식별자, 상태, 제목
  },
  mutations: {
    addList(state, payload) {
      state.todoList.push(payload);
    },
  },
  actions: {},
  modules: {},
});
