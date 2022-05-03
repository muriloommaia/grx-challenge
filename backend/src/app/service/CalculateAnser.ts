import { Answers } from '../entities/Answers'

export class CalculateAnswer {
  calculate(answer: Answers): Answers {
    switch (answer.answer1) {
      case 'Sim':
        answer.positiveQuantity += 1
        break
      case 'Não':
        answer.negativeQuantity += 1
        break
      default:
        break
    }
    switch (answer.answer2) {
      case 'Sim':
        answer.positiveQuantity += 1
        break
      case 'Não':
        answer.negativeQuantity += 1
        break
      default:
        break
    }
    switch (answer.answer3) {
      case 'Sim':
        answer.positiveQuantity += 1
        break
      case 'Não':
        answer.negativeQuantity += 1
        break
      case 'Não Sei':
        answer.notAvailableQuantity += 1
        break
      case 'Agora!!':
        answer.positiveQuantity += 2
        break
      default:
        break
    }
    return answer
  }
}
