import React, { MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

export default function SubmitButton() {
  const { answers } = useSelector((state: RootState) => state)

  const verifyDisabled = () => {
    const values = Object.values(answers)
    const filtered = values.every(value => Boolean(value) === true)
    return !filtered
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  return (
    <div>
      <button
        type='submit'
        disabled={verifyDisabled()}
        onClick={handleClick}
      >
        Enviar
      </button>
    </div>
  )
}
