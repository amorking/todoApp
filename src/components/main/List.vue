<template>
  <div class="todo-list">
    <div class="d-flex pa-4 align-center">
      <div class="circle mr-4">
        <v-btn icon large color="green">
          <v-icon>
            mdi-check
          </v-icon>
        </v-btn>
      </div>
      <p>{{ list.title }}</p>
      <v-spacer></v-spacer>
      <v-btn icon large>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['list'],
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
}
</style>
