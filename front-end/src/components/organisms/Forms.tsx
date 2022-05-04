import { selectOptions } from '../../consts'
import AnswerButton from '../molecules/AnswerButton'
import SelectInput from '../molecules/SelectInput'
import SubmitButton from '../molecules/SubmitButton'
import TextArea from '../molecules/TextArea'

export default function Forms() {
  return (
    <form
      className='flex flex-col items-center bg-slate-200 border-2 rounded-lg border-black py-3'
    >
      <AnswerButton numberAnswer={1}>
        1) Você se considera bom em lógica?
      </AnswerButton>
      <AnswerButton numberAnswer={2}>
        2) Gosta de aprender com desafios?
      </AnswerButton>
      <SelectInput numberAnswer={3} options={selectOptions}>
        3) Gostaria de fazer parte da GRX?
      </SelectInput>
      <TextArea numberAnswer={4} max={200} min={15}>
        4) Por favor, justifique a resposta anterior
      </TextArea>
      <SubmitButton />
    </form>
  )
}
