import { Popover } from '@headlessui/react'
import {

  ShoppingBagIcon,
  StarIcon

} from '@heroicons/react/outline'


import logo from './../../assets/images/logo.svg'

export default function Header() {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Farmacia Torres</span>
            <img
              className="h-8 w-auto sm:h-10"
              src={logo}
              alt="Logo"
            />
          </a>
        </div>

        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">


            {/*  Componente de busqueda */}

          </Popover.Group>
          <div className="flex items-center md:ml-12">

            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              INICIAR SESIÓN
            </a>
            <StarIcon className="h-6 w-6" aria-hidden="true" />
            <a>
            </a>
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            <a>
            </a>
          </div>
        </div>
      </div>

    </Popover>
  )
}