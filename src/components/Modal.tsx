import React, { useState } from 'react'
import { motion } from 'framer-motion'

export interface ModalProps {
  showModal: boolean
  setShowModal: (modalStatus: boolean) => void
}

function Modal({ showModal, setShowModal }: ModalProps) {
  return (
    <>
      <div>
        <div>
          <div className="flex fixed inset-0 z-[99] w-screen h-screen bg-white">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-0 right-0 z-30 flex items-center justify-center px-3 py-2 mt-3 mr-3 space-x-1 text-xs font-medium uppercase border rounded-md border-neutral-200 lg:border-white/20 lg:bg-black/10 hover:lg:bg-black/30 text-neutral-600 lg:text-white hover:bg-neutral-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
