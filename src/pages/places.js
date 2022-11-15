import React from 'react'
import Footer from '../components/footer.component'
import Header from '../components/header.component'
import ImageStructure from '../components/image-structure.component'
import locations from '../data/locations.json'

const Places = () => {
  return (
    <div>
      <Header />
      <div className="px-48 py-10 sm:px-4 sm:py-5 md:px-10 md:py-5">
        <ul className="flex justify-between items-center overflow-scroll sm:w-full sm:gap-x-6 sm:whitespace-nowrap md:gap-x-6 md:whitespace-nowrap">
          {[
            'Restaurant',
            'Cottage',
            'Castle',
            'Fantast city',
            'Beach',
            'Cabins',
            'Off-grid',
            'Farm',
          ].map((item) => (
            <li>{item}</li>
          ))}
          <div className='relative'>
            <input
              placeholder="Location"
              className="border border-gray-50 placeholder-black rounded-md p-2 "
            />
            <img src="/images/location.svg" alt="setting" className='absolute right-3 top-2'/>
          </div>
        </ul>
        <ul className="grid grid-cols-4 justify-items-center gap-8 my-10 sm:grid-cols-1 md:grid-cols-2 md:gap-5">
          {locations.map((location) => (
            <li
              className="border border-gray-50 p-3 rounded-xl"
              key={location.id}
            >
              <ImageStructure src={location.image} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default Places
