import { readFile, writeFile } from 'fs/promises'
import { v4 } from 'uuid'
import { IResponseFormDTO } from '../../ResponseForme/ResponseFormDTO'
import { IAnswer } from '../IAnswer'
import { IAnswerModel } from '../IAnswerModel'
export class ResponseFormsModel implements IAnswerModel {
  async insertAnswer(answer: IResponseFormDTO & IAnswer): Promise<void> {
    const file = await readFile('./public/forms.json', 'utf8')
    const id = v4()
    const data = JSON.parse(file)
    const input = {
      ...data,
      [id]: answer
    }
    await writeFile('./public/forms.json', JSON.stringify(input))
  }
}
