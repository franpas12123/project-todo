<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'
import type { Todos } from '@/types/Todo'

const todoStore = useTodoStore()

todoStore.seedTodos()
const todos: Todos = todoStore.todos

const todoLabelClass = (done: boolean) => {
  return done ? 'line-through text-gray-400' : ''
}
</script>

<template>
  <section>
    <div v-if="todos.length" class="my-auto card p-8">
      <p class="font-medium text-3xl pb-3">Here are the things I want to accomplish...</p>
      <div class="todos">
        <div
          v-for="(todo, index) in todos"
          :key="`todo-${index}`"
          class="todo flex justify-between py-2"
        >
          <div class="flex justify-between items-center">
            <input v-model="todo.done" class="mr-2" type="checkbox" :id="`todo-${index}`" />
            <label :for="`todo-${index}`" class="text-lg" :class="todoLabelClass(todo.done)">{{
              todo.title
            }}</label>
          </div>
          <i class="fi fi-rr-trash" @click="todoStore.removeTodo(index)" alt="remove a todo" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>No todos yet. Add one above!</p>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
