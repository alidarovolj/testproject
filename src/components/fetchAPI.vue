<template>
  <div>
    <div v-for="todo of todos" :key="todo.id">
      <p>{{ todo.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "fetchAPI",
  data() {
    return {
      errors: [],
      todos: [],
      urlTodos: "http://localhost:3001/todos",
    };
  },
  async mounted() {
    try {
      const takeData = await fetch(this.urlTodos);
      const result = await takeData.json();
      this.todos.push(...result);
      console.log(this.todos);
    } catch (error) {
      this.errors.push(error);
    }
  },
};
</script>
