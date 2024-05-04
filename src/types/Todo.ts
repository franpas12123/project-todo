interface Todo {
  id: string | number
  title: string
  done: boolean
  active: boolean
}

interface Todos extends Array<Todo> {
  [index: number]: Todo
}

export type { Todo, Todos }
