import AnswerButton from '../molecules/AnswerButton'

export default function Forms() {
  return (
    <div>
      <AnswerButton numberAnswer={1}>
        1) Você se considera bom em lógica?
      </AnswerButton>
      <AnswerButton numberAnswer={2}>
        2) Gosta de aprender com desafios?
      </AnswerButton>
    </div>
  )
}
