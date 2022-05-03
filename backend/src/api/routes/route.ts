import { Router } from 'express'

const router = Router()

router.get('/answers', (request, response) => {
  response.status(200).json()
})

export { router }
