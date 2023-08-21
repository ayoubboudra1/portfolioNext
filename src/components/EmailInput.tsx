import { myInfo } from '@/data/myInfo'
import React, { useState } from 'react'

function EmailInput() {
  const [isCopied, setIsCopied] = useState(
    <i className="bi bi-clipboard w-5 h-5"></i>,
  )
  const copyText = myInfo.myEmail
  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text)
    } else {
      return document.execCommand('copy', true, text)
    }
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setTimeout(() => {
          setIsCopied(
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-4 h-4  text-white animate-spin  fill-yellow-400"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>,
          )
        }, 1)

        setTimeout(() => {
          setIsCopied(<i className="bi bi-check-lg"></i>)
        }, 1000)
        setTimeout(() => {
          setIsCopied(<i className="bi bi-clipboard w-5 h-5"></i>)
        }, 2500)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div className="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 16"
        >
          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block rounded-xl w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300  bg-white   "
        placeholder={myInfo.myEmail}
        disabled={true}
      />
      <button
        type="button"
        onClick={handleCopyClick}
        className="text-white absolute hover:scale-105 w-10 h-10  right-2.5 bottom-2  bg-yellow-400  font-medium rounded-xl text-sm px-4 py-2 flex justify-center items-center  shadow-sm "
      >
        {isCopied}
      </button>
    </>
  )
}

export default EmailInput
