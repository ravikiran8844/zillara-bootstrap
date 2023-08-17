import React from 'react'
import Image from 'next/image'
import './LogoTextSection.css'

const LogoTextSection = () => {
  return (
    <section className='container'>
        <div className='logo-text-section py-4'>
            <div className='col-12 mt-4 logo-text-section_items px-4 d-flex flex-column flex-md-row'>
                <div className='col-12 col-md-4 logo-text-section_item d-flex align-items-center justify-content-center mb-4'>
                    <div className='me-3'>
                    <Image width={50} height={50} alt='logo' src="/logo_1.png" />
                    </div>
                    <div className='logo-text-section_item-text'>
                    Nuturing Community
                    </div>
                </div>
                <div className='col-12 col-md-4 logo-text-section_item d-flex align-items-center justify-content-center mb-4'>
                    <div className='me-3'>
                    <Image width={50} height={50} alt='logo' src="/logo_2.png" />
                    </div>
                    <div className='logo-text-section_item-text'>
                    Love your Layers                    
                    </div>
                </div>
                <div className='col-12 col-md-4 logo-text-section_item d-flex align-items-center justify-content-center mb-4'>
                    <div className='me-3'>
                    <Image width={50} height={50} alt='logo' src="/logo_3.png" />
                    </div>
                    <div className='logo-text-section_item-text'>
                    Feeling Creativity                    
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LogoTextSection
