import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import Forms from '../organisms/Forms'
import Result from '../organisms/Result'
export default function Home() {
  const { submit: { isSubmit } } = useSelector((state: RootState) => state)
  return (
    <div className="flex flex-col items-center pt-4 w-10/12 md:min-w-[500px] md:w-5/12">
      <h1 className='text-4xl py-3'>Desafio Coleta - GRX</h1>
      { !isSubmit ? <Forms /> : <Result /> }
    </div>
  )
}
