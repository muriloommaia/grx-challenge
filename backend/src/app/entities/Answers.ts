import { IResponseToJSON } from '../model/IAnswerModel'
import { IResponseFormDTO } from '../ResponseForme/ResponseFormDTO'

export class Answers implements IResponseToJSON {
  public positiveQuantity: number
  public negativeQuantity: number
  public notAvailableQuantity: number
  public answer1: string
  public answer2: string
  public answer3: string
  public answer4: string
  constructor (
    props: IResponseFormDTO
  ) {
    Object.assign(this, props)
    this.positiveQuantity = 0
    this.negativeQuantity = 0
    this.notAvailableQuantity = 0
  }
}
