import * as cors from 'cors'
import * as bodyParser from 'body-parser'

import serverConstructor from './serverConstructor'
import ProjectRoutes from './routes/projectRoutes'
import ContactRoutes from './routes/contactRoutes'

const cookieParser = require('cookie-parser')

require('dotenv').config()

const { FRONTEND_URL } = process.env

const backend = new serverConstructor({
  port: 8000,
  routes: [
    new ProjectRoutes(),
    new ContactRoutes()
  ],
  middleWares: [
    cookieParser(),
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    cors({
      origin: [FRONTEND_URL, 'http://localhost:4200', 'http://localhost:3000', 'http://localhost'],
      credentials: true
    }),
  ]
})

export default backend
