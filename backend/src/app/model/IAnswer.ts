import { IResponseFormDTO } from '../ResponseForme/ResponseFormDTO'

export type IAnswer = IResponseFormDTO & {
  positiveQuantity: number
  negativeQuantity: number
  notAvailableQuantity: number
}
