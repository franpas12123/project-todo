import { ref } from 'vue'
import { defineStore } from 'pinia'
import { NO_TITLE } from '@/constants/error_msg'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const addTodo = (title: string): Todo => {
    if (!title) {
      throw new Error(NO_TITLE)
    }
    const todo = { id: todos.value.length, title, done: false, active: true }
    todos.value.push(todo)
    return todo
  }
  const toggleTodo = (index: number) => {
    todos.value[index].done = !todos.value[index].done
  }
  const removeTodo = (index: number) => {
    todos.value.splice(index, 1)
  }
  const seedTodos = () => {
    console.log('Seeding todos')
    addTodo('Learn Vue 3')
    addTodo('Build something awesome')
    addTodo('Take a break')
  }

  return { todos, addTodo, toggleTodo, removeTodo, seedTodos }
})
