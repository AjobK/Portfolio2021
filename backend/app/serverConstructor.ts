import * as express from 'express'
import { Express } from 'express'
import * as http from 'http'
import * as expressOasGenerator from 'express-oas-generator'
import { SPEC_OUTPUT_FILE_BEHAVIOR } from 'express-oas-generator'

const https = require('https')
const fs = require('fs')

class serverConstructor {
  public app: Express
  public server: http.Server
  public port: number

  constructor(appInit: { port: number; middleWares: any; routes: any; }) {
    this.app = express()
    this.swagger()
    this.port = appInit.port
    this.middlewares(appInit.middleWares)
    this.routes(appInit.routes)
    this.app.set('trust proxy', true)
    expressOasGenerator.handleRequests()
    this.listen()
  }

  private middlewares(middleWares) {
    middleWares.forEach((middleWare) => {
      this.app.use(middleWare)
    })
    this.app.use(express.static(__dirname + '/public'))

  }

  private routes(controllers) {
    controllers.forEach((controller) => {
      this.app.use('/api/', controller.router)
    })
  }

  private swagger() {
    expressOasGenerator.handleResponses(this.app, {
      swaggerUiServePath: 'swagger',
      specOutputPath: null,
      predefinedSpec: function(spec) { return spec },
      specOutputFileBehavior: SPEC_OUTPUT_FILE_BEHAVIOR.PRESERVE,
      swaggerDocumentOptions: null
    })
  }

  public listen(): void {
    const { NODE_ENV, SECURE } = process.env

    if (SECURE == 'true') {
      const httpsServer = https.createServer({
        key: fs.readFileSync('/etc/letsencrypt/live/kustra.nl/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/kustra.nl/fullchain.pem')
      }, this.app)

      httpsServer.listen(8080, () => {
        console.log('(Secure) HTTPS Server running on port 8080 :-)');
      })
    } else {
      this.server = this.app.listen(8080, () => { console.log('(Insecure) HTTP Server running on port 8080 :-)')})
    }

    if (NODE_ENV === 'development') {
      console.log(`Documentation available on http://localhost:${this.port}/swagger`)
    }
  }
}

export default serverConstructor
