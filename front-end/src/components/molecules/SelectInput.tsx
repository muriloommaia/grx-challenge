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
    <div className='flex flex-col my-1'>
      <label htmlFor='select'>
        {children}
      </label>
      <select
        id='select' value={selected} onChange={handleChange}
        className='border border-black p-1 px-6 rounded-lg mx-1 text-center bg-slate-200'
      >
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
