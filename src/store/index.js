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
    editTask(state, payload) {
      let targetTask = state.todoList.find((el) => el.id === payload.id);
      // targetTask.complete = payload.complete;
      // targetTask.title = payload.title;
      // 매번 여러 값에 접근하면 코드가 지저분해진다.
      Object.assign(targetTask, payload); //(A,B) A를 B로 덮어씌운다.
    },
    delTask(state, payload) {
      let targetTask = state.todoList.indexOf(
        state.todoList.find((el) => el.id === payload.id)
      );
      state.todoList.splice(targetTask, 1);
    },
  },
  actions: {},
  modules: {},
});
