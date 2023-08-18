import { EmailInput } from '@/components/Contact'
import { error } from 'console'
import { headers } from 'next/dist/client/components/headers'

export const sendContactForm = async (data: EmailInput) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).catch((error) => console.log(error))
