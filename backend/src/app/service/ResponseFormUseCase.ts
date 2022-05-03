import { Answers } from '../entities/Answers'
import { IAnswerModel } from '../model/IAnswerModel'
import { IResponseFormDTO } from '../ResponseForme/ResponseFormDTO'
import { CalculateAnswer } from './CalculateAnser'

export class ResponseFormUseCase extends CalculateAnswer {
  constructor (private readonly model: IAnswerModel) {
    super()
  }

  async execute (responseFormDTO: IResponseFormDTO): Promise<void> {
    const answers = new Answers(responseFormDTO)
    this.calculate(answers)
    const response = await this.model.insertAnswer(answers)
    console.log(response)
  }
}
