import { IAnswer } from './IAnswer'

export interface IAnswerModel {
  insertAnswer (answer: IAnswer): Promise<void>
}
