import React, { ReactNode, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAnswer } from '../../redux/slices'

type props = {
  children: ReactNode,
  numberAnswer: number,
  options: string[]
}

export default function SelectInput({ children, numberAnswer: question, options }: props) {
  const [selected, setSelected] = useState('selecione')
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelected(e.currentTarget.value)
    dispatch(setAnswer({ question, answer: e.currentTarget.value }))
  }

  return (
    <div>
      <label htmlFor='select'>
        {children}
      </label>
      <select id='select' value={selected} onChange={handleChange}>
        <option value="selecione" disabled>Selecione</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
