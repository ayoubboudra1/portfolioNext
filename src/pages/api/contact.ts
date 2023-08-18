// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { EmailInput } from '@/components/Contact'
import type { NextApiRequest, NextApiResponse } from 'next'

// const nodemailer = require("nodemailer");

// const email = process.env.EMAIL
// const pass  = process.env.EMAIL_PASS

// export const transporter = nodemailer.createTransport({
//     service : 'gmail',
//     auth: {
//         user: email,
//         pass: pass
//       }
// })

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<EmailInput | { message: string }>,
) => {
  if (req.method === 'POST') {
    const data: EmailInput = req.body
    if (data.emailAdresse || data.firstName || data.lastName || data.message) {
      // try{
      //   // const info = await transporter.sendMail({
      //   //   from: email, // sender address
      //   //   to: email, // list of receivers
      //   //   subject: `email from ${data.emailAdresse} by the name of ${data.firstName} ${data.lastName}`, // Subject line
      //   //   text: data.message, // plain text body
      //   //   html: "<b>Hello world?</b>", // html body
      //   // });
      //   return res.status(200).json({message:'Success'})

      // }catch(error:any){
      //   console.log(error.message)
      //   return res.status(400).json({
      //     message : error.message
      //   })

      // }
      res.status(200).json({ message: 'Success' })
    }
  }

  return res.status(400).json({
    message: 'Bad request',
  })
}
