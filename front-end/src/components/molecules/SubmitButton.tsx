import React, { MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { setResponse } from '../../redux/slices/response.slice'
import { setSubmit } from '../../redux/slices/submit.slice'
import { request } from '../../services/requests'

export default function SubmitButton() {
  const { answers } = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const verifyDisabled = () => {
    const values = Object.values(answers)
    const filtered = values.every(value => Boolean(value) === true)
    return !filtered
  }

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const endpoint = 'form'
    const data = await request(endpoint, answers)
    dispatch(setResponse(data))
    dispatch(setSubmit(true))
  }
  return (
    <div>
      <button
        type='submit'
        disabled={verifyDisabled()}
        className="p-2 px-4 border-2 border-black rounded-lg bg-green-600 disabled:opacity-50"
        onClick={handleClick}
      >
        Enviar
      </button>
    </div>
  )
}
