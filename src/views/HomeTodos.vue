<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import ViewTodos from '@/components/todos/ViewTodos.vue'
import AddTodo from '@/components/todos/AddTodo.vue'
</script>

<template>
  <main>
    <BaseHeader />
    <AddTodo />
    <ViewTodos />
  </main>
</template>
