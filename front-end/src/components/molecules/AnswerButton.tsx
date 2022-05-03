import { MouseEvent, ReactNode, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAnswer } from '../../redux/slices'

type props = {
  children: ReactNode,
  numberAnswer: number,
}

export default function AnswerButton({ children, numberAnswer: question }: props) {
  const [positive, setPositive] = useState(false)
  const dispatch = useDispatch()

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.id === 'positive') {
      setPositive(true)
      dispatch(setAnswer({ question, answer: 'Sim' }))
    } else {
      setPositive(false)
      dispatch(setAnswer({ question, answer: 'Não' }))
    }
  }
  return (
    <div>
      <p>{children}</p>
      <button type='button' id={'positive'} onClick={handleClick} className={`${positive ? 'bg-green' : ''}`}>
        Sim
      </button>
      <button type='button' id={'negative'} onClick={handleClick} className={`${!positive ? 'bg-green' : ''}`}>
        Não
      </button>
    </div>
  )
}
