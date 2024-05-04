import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import AddTodo from '@/components/todos/AddTodo.vue'

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
})
