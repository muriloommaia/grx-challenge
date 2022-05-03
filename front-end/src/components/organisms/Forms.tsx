import { selectOptions } from '../../consts'
import AnswerButton from '../molecules/AnswerButton'
import SelectInput from '../molecules/SelectInput'

export default function Forms() {
  return (
    <div>
      <AnswerButton numberAnswer={1}>
        1) Você se considera bom em lógica?
      </AnswerButton>
      <AnswerButton numberAnswer={2}>
        2) Gosta de aprender com desafios?
      </AnswerButton>
      <SelectInput numberAnswer={3} options={selectOptions}>
        3) Gostaria de fazer parte da GRX?
      </SelectInput>
    </div>
  )
}
