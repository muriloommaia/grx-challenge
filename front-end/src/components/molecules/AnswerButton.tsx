import { MouseEvent, ReactNode, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAnswer } from '../../redux/slices'

type props = {
  children: ReactNode,
  numberAnswer: number,
}

export default function AnswerButton({ children, numberAnswer: question }: props) {
  const [answer, setPositive] = useState('')
  const dispatch = useDispatch()

  const isAnswer = (str: string) => answer === str

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.id === 'positive') {
      setPositive('Sim')
      dispatch(setAnswer({ question, answer }))
    } else {
      setPositive('Não')
      dispatch(setAnswer({ question, answer }))
    }
  }

  return (
    <div>
      <p>{children}</p>
      <button
        type='button'
        id={'positive'}
        onClick={handleClick}
        className={`${isAnswer('Sim') ? 'border selected' : ''}`}>
        Sim
      </button>
      <button
        type='button'
        id={'negative'}
        onClick={handleClick}
        className={`${isAnswer('Não') ? 'border selected' : ''}`}>
        Não
      </button>
    </div>
  )
}
