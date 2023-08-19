// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EmailInput } from '@/components/Contact'
import type { NextApiRequest, NextApiResponse } from 'next'

const nodemailer = require('nodemailer')

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: pass,
  },
})

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<EmailInput | { message: string }>,
) => {
  if (req.method === 'POST') {
    const data: EmailInput = req.body

    const mailOptions = {
      from: email,
      to: email,
      subject: `from ${data.emailAdresse} by the name of ${data.firstName} ${data.lastName}`,
      text: data.message,
    }

    if (data.emailAdresse || data.firstName || data.lastName || data.message) {
      transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          console.log(error.message)
          return res.status(400).json({
            message: error.message,
          })
        }
      })
      return res.status(200).json({ message: 'Send Success' })
    }
  }

  return res.status(400).json({
    message: 'Bad request',
  })
}

export default handler
