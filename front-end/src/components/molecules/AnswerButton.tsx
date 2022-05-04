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
      dispatch(setAnswer({ question, answer: 'Sim' }))
    } else {
      setPositive('Não')
      dispatch(setAnswer({ question, answer: 'Não' }))
    }
  }

  return (
    <div className='flex flex-col my-1'>
      <p>{children}</p>
      <div className="flex justify-center">
        <button
          type='button'
          id={'positive'}
          onClick={handleClick}
          className={`${isAnswer('Sim') ? 'bg-green-500' : ''} p-1 px-6 rounded-lg mx-1 border border-black`}>
          Sim
        </button>
        <button
          type='button'
          id={'negative'}
          onClick={handleClick}
          className={`${isAnswer('Não') ? 'bg-green-500' : ''} p-1 px-6 rounded-lg mx-1 border border-black`}>
          Não
        </button>
      </div>
    </div>
  )
}
