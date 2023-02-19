'use client'
import { ChangeEvent, useState } from 'react'

type todoTypes = {
  id: number
  text: string
  completed: boolean
}

export default function Todo() {
  const [todos, setTodos] = useState<todoTypes[]>([])

  const [text, setText] = useState('')

  const handelChnage = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log((e.target as HTMLInputElement).value)
    setText((e.target as HTMLInputElement).value)
  }
  const handelClick = () => {
    return setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: text,
        completed: false,
      },
    ])
  }
  console.log(todos)

  return (
    <div>
      <input
        className='border border-black'
        type='text'
        defaultValue={text}
        onKeyDown={(e) => e.key === 'Enter' && handelChnage(e)}

        // onChange={(e) => handelChnage(e)}
      />
      <button onClick={() => handelClick()}>Add todo</button>
    </div>
  )
}
