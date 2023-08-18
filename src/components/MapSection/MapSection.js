import React from 'react'
import './MapSection.css'
import Image from 'next/image'
import Link from 'next/link'

const MapSection = () => {
  return (
    <div className='map-section py-5'>
      <div className='container px-lg-0'>
        <div className='row g-0'>
        <div className='col-12 col-lg-6 mb-5'>
        <div className="d-flex flex-row position-relative search-input">
              <input type="text" placeholder='City or Pincode' className=" bg-transparent border-0 form-control px-2" id="example-search-input"/>

              <button className="border-0 bg-transparent position-absolute end-0 search-icon-btn" type="button">
              <Image className='img-fluid' width={32} height={32} src="/search.png" alt='search icon' />


              </button>
          </div>
        </div>
        <div className='col-12 col-lg-6 mb-5 d-flex justify-content-center align-items-center'>
            <div className='px-3 py-2 find-store-btn'><span className='me-1'><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4.5" cy="4.5" r="4.5" fill="#FF0000"/>
            </svg>
            </span> Zilara Store</div>
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