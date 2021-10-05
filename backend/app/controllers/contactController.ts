import { Request, Response } from 'express'

const nodemailer = require('nodemailer')

require('dotenv').config()

const { SENDER_MAIL, SENDER_PASSWORD } = process.env

class ContactController {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public sendContactMail = async (req: Request, res: Response): Promise<any> => {
    // TODO: Make functionality (pref util) to send contact info directly to mailbox. No persistent storage needed.

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: SENDER_MAIL, // generated ethereal user
        pass: SENDER_PASSWORD, // generated ethereal password
      },
    })

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: req.body?.email || '???', // sender address
      to: 'ajobkustra.p@gmail.com', // list of receivers
      subject: '👋 Someone messaged you! (Portfolio) - ' +
        (new Date()).toLocaleString('en-GB', { timeZone: 'Europe/Amsterdam' }), // Subject line
      text: `Message from ${ req.body?.email || '???' }\n\n---\n\n` + (req.body?.message || 'No message sent')
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    return res.send({})
  }
}

export default ContactController
