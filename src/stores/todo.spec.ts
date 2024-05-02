import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from './todo'

describe('Todo Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds a todo', () => {
    const todoStore = useTodoStore()
    todoStore.addTodo('Learn Vue 3')
    expect(todoStore.todos).toEqual([{ id: 0, title: 'Learn Vue 3', done: false, active: true }])
  })

  it('toggles a todo', () => {
    const todoStore = useTodoStore()
    todoStore.addTodo('Learn Vue 3')
    todoStore.toggleTodo(0)
    expect(todoStore.todos[0].done).toBe(true)
  })
})
