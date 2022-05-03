import React, { ReactNode, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAnswer } from '../../redux/slices'

type props = {
  children: ReactNode,
  numberAnswer: number,
  max: number,
  min: number
}

export default function TextArea({ children, numberAnswer: question, max, min }: props) {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.currentTarget.value)
    if (e.currentTarget.value.length >= min && e.currentTarget.value.length <= max) {
      dispatch(setAnswer({ question, answer: e.currentTarget.value }))
    } else {
      dispatch(setAnswer({ question, answer: false }))
    }
  }
  return (
    <div>
      <label htmlFor='textarea'>
        {children}
      </label>
      <textarea id='textarea' maxLength={max} minLength={min} value={value} onChange={handleChange} />
    </div>
  )
}
