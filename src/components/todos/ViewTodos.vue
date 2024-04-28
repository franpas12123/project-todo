<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'
import type { Todo } from '@/types/Todo'

const todoStore = useTodoStore()

todoStore.seedTodos()
const todos: Todo[] = todoStore.todos
console.log(todoStore.todos)
</script>

<template>
  <section>
    <div v-if="todos.length" class="my-auto">
      <h2>My Todos</h2>
      <p>Here are the things I want to accomplish.</p>
      <div class="todos">
        <div v-for="(todo, index) in todos" :key="`todo-${index}`" class="todo">
          <input v-model="todo.done" type="checkbox" :id="`todo-${index}`" />
          <label :for="`todo-${index}`">{{ todo.title }}</label>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No todos yet. Add one above!</p>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
