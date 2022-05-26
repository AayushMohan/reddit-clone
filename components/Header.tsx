import Image from 'next/image'
import React from 'react'
import { BeakerIcon, ChevronDownIcon, HomeIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className="flex">
      {/* Reddit Icon */}
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain"
          src="https://links.papareact.com/fqy"
          layout="fill"
        />
      </div>

      {/* Other Icons */}
      <div className="mx-7 flex items-center">
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </div>
  )
}

export default Header
