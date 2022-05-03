import React, { MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { request } from '../../services/requests'

export default function SubmitButton() {
  const { answers } = useSelector((state: RootState) => state)

  const verifyDisabled = () => {
    const values = Object.values(answers)
    const filtered = values.every(value => Boolean(value) === true)
    return !filtered
  }

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const endpoint = 'form'
    const data = await request(endpoint, answers)
    console.log(data)
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
