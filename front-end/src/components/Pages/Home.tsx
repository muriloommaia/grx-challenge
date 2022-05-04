import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import Forms from '../organisms/Forms'
import Result from '../organisms/Result'
import '../style/index.css'
export default function Home() {
  const { submit: { isSubmit } } = useSelector((state: RootState) => state)
  return (
    <div>
      <h1>Desafio Coleta - GRX</h1>
      { !isSubmit ? <Forms /> : <Result /> }
    </div>
  )
}
