import { setActivePinia, createPinia } from 'pinia'
import { useTodoStore } from './todo'
import { NO_TITLE } from '../constants/error_msg'

describe('Todo Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds a todo', () => {
    const todoStore = useTodoStore()
    todoStore.addTodo('Learn Vue 3')
    expect(todoStore.todos).toEqual([{ id: 0, title: 'Learn Vue 3', done: false, active: true }])
  })

  it('throws an error when adding a todo without a title', () => {
    const todoStore = useTodoStore()
    expect(() => todoStore.addTodo('')).toThrow(NO_TITLE)
  })

  it('toggles a todo', () => {
    const todoStore = useTodoStore()
    todoStore.addTodo('Learn Vue 3')
    todoStore.toggleTodo(0)
    expect(todoStore.todos[0].done).toBe(true)
  })

  it('removes a todo', () => {
    const todoStore = useTodoStore()
    todoStore.addTodo('Learn Vue 3')
    todoStore.removeTodo(0)
    expect(todoStore.todos).toEqual([])
  })
})
