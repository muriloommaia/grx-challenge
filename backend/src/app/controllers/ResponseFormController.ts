import { Request, Response } from 'express'
import { IResponseFormDTO } from '../ResponseForme/ResponseFormDTO'
import { ResponseFormUseCase } from '../service/ResponseFormUseCase'

export class ResponseFormController {
  constructor(
    private readonly ResponseFormUseCase: ResponseFormUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<any> {
    const answers = request.body as IResponseFormDTO
    const result = await this.ResponseFormUseCase.execute(answers)
    response.status(201).json(result)
  }
}
