import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  //export default >>> const store =
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
    initializeStore(state) {
      if (localStorage.getItem('store')) {
        //localStorage에서 가져올 아이템이 있다면 true
        //저장되어 있는 localStorage의 데이터를 가져온다.
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
        //JSON.parse는 텍스트로된 json파일을 javascript객체로 바꾸어준다.
        //실행은 main.js에서
      }
    },
  },
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
  //localStorage에는 가볍게 텍스트로만 저장한다.
  //JSON은 기본적으로 text를 전달한다.
});

export default store;
