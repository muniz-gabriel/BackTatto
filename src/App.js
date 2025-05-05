import express from 'express'
import dotenv from 'dotenv'
import homeRoutes from './routes/Home.Routes.js'

dotenv.config()

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/', homeRoutes)
    }
}

export default new App().app