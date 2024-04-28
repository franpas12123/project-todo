<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

const emit = defineEmits(['add-todo'])

const newTodo = ref('')
const todoStore = useTodoStore()
const addTodo = async () => {
  todoStore.addTodo(newTodo.value)
  emit('add-todo')
  newTodo.value = ''
}
</script>

<template>
  <div class="flex justify-around">
    <input v-model="newTodo" type="text" name="add-todo" id="add-todo" />
    <button @click="addTodo">Add Todo</button>
  </div>
</template>

<style lang="scss" scoped></style>
