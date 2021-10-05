import * as express from 'express'
import RouterBase from '../interfaces/RouterBase'
import ContactController from '../controllers/contactController'

class ContactRoutes implements RouterBase {
    public router = express.Router()
    private contactController: ContactController

    constructor() {
      this.contactController = new ContactController()
      this.initRoutes()
    }

    public initRoutes(): void {
      this.router.post('/contact', this.contactController.sendContactMail)
    }
}

export default ContactRoutes
