<template>
  <div class="main d-flex justify-center py-12">
    <div class="todos-container">
      <h1>Todos</h1>
      <v-card elevation="10">
        <v-text-field
          class="input"
          placeholder="오늘 뭐해?"
          prepend-inner-icon="mdi-check-bold"
          type="text"
          height="80"
          hide-details="auto"
          clearable
          single-line
          solo
          flat
          v-model="newTitle"
          @keyup.enter="addList()"
        >
        </v-text-field>
        <List
          v-for="(listItem, i) in filteredTodos"
          :key="i"
          :list="listItem"
        ></List>
        <div class="todo-footer d-flex align-center justify-center pa-2">
          <p class="mr-4">{{ filteredTodos.length }} item left</p>
          <v-btn
            :class="{ active: filter === 'all' }"
            @click="filter = 'all'"
            text
            >all</v-btn
          >
          <v-btn
            :class="{ active: filter === 'active' }"
            @click="filter = 'active'"
            text
            >active</v-btn
          >
          <v-btn
            :class="{ active: filter === 'completed' }"
            @click="filter = 'completed'"
            text
            >completed</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
    List: () => import('@/components/main/List.vue'),
  },
  computed: {
    ...mapState(['todoList']),
    filteredTodos() {
      switch (this.filter) {
        case 'active':
          return this.todoList.filter((el) => !el.complete);
        case 'completed':
          return this.todoList.filter((el) => el.complete);
        default:
          return this.todoList;
      }
    },
    newId() {
      return (
        //리스트에서 가장 큰 값을 찾고, 그 값에 1을 더해준다.
        this.todoList.reduce((acc, cur) => {
          return Math.max(acc, cur.id); //두 개의 인자 중 큰 값을 반환
        }, 0) + 1
      );
    },
  },
  data() {
    return {
      newTitle: '',
      filter: '',
    };
  },
  methods: {
    addList() {
      this.$store.commit('addList', {
        id: this.newId,
        complete: false,
        title: this.newTitle,
      });
      this.newTitle = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  p {
    margin: 0;
  }
  width: 100%;
  .todos-container {
    width: 60%;
    h1 {
      text-align: center;
      font-size: 5rem;
      color: rgba(175, 47, 47, 0.15);
    }
    .input {
      border: 1px solid #ccc;
    }
    .todo-footer {
      border: 1px solid #ccc;
      .v-btn.active {
        border: 1px solid red;
      }
    }
  }
}
</style>
