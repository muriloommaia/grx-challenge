import { ResponseFormController } from '../controllers/ResponseFormController'
import { ResponseFormsModel } from '../model/implementation/ResponseFormsModel'
import { ResponseFormUseCase } from '../service/ResponseFormUseCase'

export const answerFactory = (): ResponseFormController => {
  const model = new ResponseFormsModel()
  const service = new ResponseFormUseCase(model)
  const controller = new ResponseFormController(service)
  return controller
}
