import { MouseEvent, ReactNode, useState } from 'react'

type props = {
  children: ReactNode,
  numberAnswer: number,
}

export default function AnswerButton({ children, numberAnswer }: props) {
  const [positive, setPositive] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    if (e.currentTarget.id === 'positive') {
      setPositive(true)
    } else {
      setPositive(false)
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
