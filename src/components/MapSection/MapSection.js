import React from 'react'
import './MapSection.css'
import Image from 'next/image'
import Link from 'next/link'

const MapSection = () => {
  return (
    <div className='map-section py-5'>
      <div className='container px-0'>
        <div className='col-12 mb-4'>
            <div className='mb-4'>
                <input type="search" />
            </div>
        </div>
        <div className='row g-0'>
            <div className='col-12'>
                <div className='map-item'>
                    <Image className='img-fluid' width={1606} height={613} src="/map.webp" alt='map' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MapSection