import express from 'express'
import 'express-async-errors'
import { router } from './routes/route'

class App {
  public app: express.Application

  constructor() {
    this.app = express()
    this.app.use(express.json())
    this.addRouter()
  }

  public startServer(PORT: string | number = 3001): void {
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`)
    )
  }

  public addRouter(): void {
    this.app.use(router)
    // this.app.use(errorMiddleware)
  }

  public getApp(): express.Application {
    return this.app
  }
}

export default App
