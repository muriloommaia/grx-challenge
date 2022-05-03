import { IResponseToJSON } from '../model/IAnswerModel'

export class Answers implements IResponseToJSON {
  constructor (
    public answer1: string,
    public answer2: string,
    public answer3: string,
    public answer4: string,
    public positiveQuantity: number,
    public negativeQuantity: number,
    public notAvailableQuantity: number
  ) {
    this.positiveQuantity = 0
    this.negativeQuantity = 0
    this.notAvailableQuantity = 0
  }
}
