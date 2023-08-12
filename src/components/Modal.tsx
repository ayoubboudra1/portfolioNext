
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const product = {
  name: 'Basic Tee 6-Pack ',
  price: '$192',
  rating: 3.9,
  reviewCount: 117,
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  
}

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
  const [open, setOpen] = useState(false)
//   const [selectedColor, setSelectedColor] = useState(product.colors[0])
//   const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <>
    
    <button className="w-full rounded-md   py-2 text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br focus:ring-4  focus:outline-none focus:ring-yellow-300 drop-shadow-lg  shadow-lg shadow-yellow-300/50 hover:0 hover:shadow-md duration-75 "
            onClick={()=>setOpen(true)}
    >
                See More
    </button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50 " onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8 rounded-lg ">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 ">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg  sm:col-span-4 lg:col-span-5">
                      <Image src="/Images/pic2.jpg" alt="/Images/pic2.jpg" width={600} height={450} className="object-cover object-center" />
                      <div className='my-5 flex flex-row '>
                        <Image src="/Images/pic2.jpg" alt="/Images/pic2.jpg" width={70} height={30} className="object-cover object-center mx-2" />
                        <Image src="/Images/pic2.jpg" alt="/Images/pic2.jpg" width={70} height={30} className="object-cover object-center mx-2" />
                        <Image src="/Images/pic2.jpg" alt="/Images/pic2.jpg" width={70} height={30} className="object-cover object-center mx-2" />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">title of project</h2>

                      <section aria-labelledby="information-heading" className="mt-2">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{product.imageAlt}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="">Techno utiliser</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                            <button
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="mb-2 flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-blue-500"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-2 h-3.5 w-3.5"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                            Twitter
                            </button>
                            </div>
                          </div>
                        </div>
                      </section>

                      
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

    </>
  )
}
