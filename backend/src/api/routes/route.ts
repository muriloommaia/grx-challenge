import { Router } from 'express'
import path from 'path'
import { answerFactory } from '../../app/factory/answer.factory'

const options = {
  root: path.join('public'),
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
}
const router = Router()

const controller = answerFactory()

router.post('/form', async (request, response) => {
  await controller.handle(request, response)
})


router.get('/download/form', async (request, response) => {
  response.sendFile('forms.json', options)
})

export { router }
