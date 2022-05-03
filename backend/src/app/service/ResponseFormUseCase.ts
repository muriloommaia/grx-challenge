import { Answers } from '../entities/Answers'
import { IAnswer } from '../model/IAnswer'
import { IAnswerModel } from '../model/IAnswerModel'
import { IResponseFormDTO } from '../ResponseForme/ResponseFormDTO'
import { CalculateAnswer } from './CalculateAnser'

export class ResponseFormUseCase extends CalculateAnswer {
  constructor (private readonly model: IAnswerModel) {
    super()
  }

  async execute (responseFormDTO: IResponseFormDTO): Promise<IAnswer> {
    const answers = new Answers(responseFormDTO)
    this.calculate(answers)
    await this.model.insertAnswer(answers)
    return answers
  }
}
