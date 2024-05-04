import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import AddTodo from '@/components/todos/AddTodo.vue'
import HomeTodos from '@/views/HomeTodos.vue'
import { useTodoStore } from '@/stores/todo'

describe('AddTodo.vue', () => {
  test('add a todo after clicking button', async () => {
    const wrapper = mount(AddTodo, {
      global: {
        plugins: [createTestingPinia()]
      }
    })
    const input = wrapper.find('input')

    await input.setValue('Learn Vue 3')
    await wrapper.find('button').trigger('click')
    wrapper.vm.$nextTick()

    expect(wrapper.emitted('add-todo')).toBeTruthy()
  })

  test('line-through style when todo is done', async () => {
    const wrapper = mount(HomeTodos, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              todo: { todos: [{ id: 0, title: 'Learn Vue 3', done: false, active: true }] }
            }
          })
        ]
      }
    })
    const todo = wrapper.find('label')
    expect(todo.classes()).not.toContain('line-through')

    const store = useTodoStore()
    store.todos[0].done = true
    await wrapper.vm.$nextTick()
    expect(todo.classes()).toContain('line-through')
  })
})
