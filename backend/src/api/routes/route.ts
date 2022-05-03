import { Router } from 'express'
import { answerFactory } from '../../app/factory/answer.factory'

const router = Router()

const controller = answerFactory()

router.post('/form', async (request, response) => {
  await controller.handle(request, response)
})

export { router }
