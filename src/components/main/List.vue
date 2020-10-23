<template>
  <div
    class="todo-list"
    @mouseenter="isShow = true"
    @mouseleave="isShow = false"
  >
    <div class="d-flex pa-4 align-center">
      <div
        class="circle mr-4"
        :style="{
          border: list.complete ? '1px solid green' : '',
        }"
      >
        <v-btn icon large color="green" @click="editTask()">
          <v-icon v-show="list.complete">
            mdi-check
          </v-icon>
        </v-btn>
      </div>
      <p :class="{ 'txt-complete': list.complete }">{{ list.title }}</p>
      <v-spacer></v-spacer>
      <v-btn icon large v-show="isShow" color="red" @click="delTask()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['list'],
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    editTask() {
      this.list.complete = !this.list.complete;
      //ID를 제외한 다른 값의 변경에 대응할 수 있는 함수여야 효율이 좋다.
      this.$store.commit('editTask', this.list);
    },
    delTask() {
      this.$store.commit('delTask', this.list);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  p {
    margin: 0;
  }
  .circle {
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 50%;
  }
  .txt-complete {
    opacity: 0.6;
    text-decoration: line-through;
  }
}
</style>
