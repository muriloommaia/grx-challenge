import { NextFunction, Request, Response } from 'express'

const errorMiddleware = (err: Error, _req: Request, res: Response, _next: NextFunction): any => {
  const { name, message } = err
  console.log(message)
  switch (name) {
    default: return res.status(500).json({ message: 'Something went wrong' })
  }
}

export { errorMiddleware }
