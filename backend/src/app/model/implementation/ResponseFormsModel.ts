import { appendFile } from 'fs/promises'
import { IResponseFormDTO } from '../../ResponseForme/ResponseFormDTO'
import { IAnswer } from '../IAnswer'
import { IAnswerModel } from '../IAnswerModel'

export class ResponseFormsModel implements IAnswerModel {
  async insertAnswer(answer: IResponseFormDTO & IAnswer): Promise<void> {
    await appendFile('forms.json', JSON.stringify(answer))
  }
}
