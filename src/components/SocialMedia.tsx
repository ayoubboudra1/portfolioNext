import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface SocialMediaProps {
  blocStyle: string
}

const SocialMedia = ({ blocStyle }: SocialMediaProps) => {
  return (
    // <div className=' '>
    <div className={blocStyle}>
      <div className="linkedin hover:scale-105">
        <Link href="https://www.linkedin.com/in/ayoub-boudra-283154135/" target='_blank'>
          <Image
            className="w-9"
            src="/Icons/linkedin.png"
            alt="linkedin logo"
            width={512}
            height={512}
          />
        </Link>
      </div>
      <div className="github hover:scale-105">
        <Link href="https://github.com/ayoubboudra1" target='_blank'>
          <Image
            className="w-9"
            src="/Icons/github.png"
            alt="linkedin logo"
            width={512}
            height={512}
          />
        </Link>
      </div>
      <div className="facebook hover:scale-105">
        <Link href="https://wa.link/izoqk0" target="_blank">
          <Image
            className="w-9"
            src="/Icons/whatsapp.png"
            alt="linkedin logo"
            width={512}
            height={512}
          />
        </Link>
      </div>
      <div className="instagram hover:scale-105">
        <Link href="https://t.me/ayoub_boudra" target='_blank'>
          <Image
            className="w-9"
            src="/Icons/telegram.png"
            alt="linkedin logo"
            width={512}
            height={512}
          />
        </Link>
      </div>
    </div>
    // </div>
  )
}

export default SocialMedia
