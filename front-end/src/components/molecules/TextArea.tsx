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

  const verifyTextArea = () => {
    return value.length >= min && value.length <= max
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setValue(e.currentTarget.value)
    if (verifyTextArea()) {
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
      { !verifyTextArea() && <span>{`${value.length} / mínimo: ${min}`}</span> }
    </div>
  )
}
