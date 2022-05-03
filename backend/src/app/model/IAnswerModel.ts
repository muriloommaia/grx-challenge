import { IResponseFormDTO } from '../ResponseForme/ResponseFormDTO'
import { IAnswer } from './IAnswer'

type IResponseToJSON = IResponseFormDTO & IAnswer
export interface IAnswerModel {
  insertAnswer (answer: IResponseToJSON): Promise<void>
}
