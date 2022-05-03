import { IResponseToJSON } from '../model/IAnswerModel'

export class Answers implements IResponseToJSON {
  public readonly positiveQuantity: number
  public readonly negativeQuantity: number
  public readonly notAvailableQuantity: number
  constructor (
    public readonly answer1: string,
    public readonly answer2: string,
    public readonly answer3: string,
    public readonly answer4: string
  ) {
    this.positiveQuantity = 0
    this.negativeQuantity = 0
    this.notAvailableQuantity = 0
  }
}
