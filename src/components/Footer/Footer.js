import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-section py-4'>
      <div className='container'>
        <div className='row mt-5'>
            <div className='col-12 col-lg-4 mb-4'>
                <div>
                    <div className='mb-3'>
                    <Image width={265} height={60} src="/zillara_logo.png" alt='zillara logo' />
                    </div>
                    <div className='footer-text mb-2'>
                    Subscribe to email alerts. We promise not to spam your inbox.
                    </div>
                </div>
            </div>
            <div  className='col-12 col-lg-8'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-4 mb-4'>
                    <div className='mb-3 footer-links-title'>
                            Information                       
                     </div>
                     <ul className='list-unstyled'>
                        <li>
                            <Link className='footer-links-text' href="#">Blog</Link>
                        </li>
                        <li>
                            <Link className='footer-links-text' href="#">Offers & Contest Details</Link>
                        </li>
                        <li>
                            <Link className='footer-links-text' href="#">Help & FAQs</Link>
                        </li>
                        <li>
                            <Link className='footer-links-text' href="#">About Zilara</Link>
                        </li>
                     </ul>
                    </div> 
                    <div className='col-12  col-sm-6 col-md-5 mb-4'>
                    <div className='mb-3 footer-links-title'>
                            Contact Us
                        </div>

                        <ul className='list-unstyled'>
                        <li>
                            <div className='footer-links-text d-flex'> 
                            <div className='me-1'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6998 16.4C22.6998 17.7 21.5998 18.7999 20.2998 18.7999H6.0998L1.2998 23.6V4.59995C1.2998 3.29995 2.3998 2.19995 3.6998 2.19995H20.3998C21.6998 2.19995 22.7998 3.29995 22.7998 4.59995V16.4H22.6998Z" stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            </div>  
                            <div>
                            Chat with Us
                            </div>    
                            </div>
                        </li>
                        <li>
                            <div className='footer-links-text d-flex'> 
                            <div className='me-1'>
                            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.0001 20.2001V23.8C26.0001 25.1 24.9001 26.2001 23.6001 26.2001C23.5001 26.2001 23.4001 26.2001 23.4001 26.2001C19.7001 25.8001 16.1001 24.5 13.0001 22.5C10.1001 20.7 7.60006 18.2 5.80006 15.3C3.70006 12.2 2.40006 8.60005 2.00006 4.90005C1.90006 3.50005 2.90006 2.40005 4.20006 2.30005C4.30006 2.30005 4.30006 2.30005 4.40006 2.30005H8.00006C9.20006 2.30005 10.2001 3.20005 10.4001 4.40005C10.6001 5.60005 10.8001 6.70005 11.2001 7.80005C11.5001 8.70005 11.3001 9.70005 10.7001 10.3L9.20006 11.8C10.9001 14.8 13.4001 17.3 16.4001 19L17.9001 17.5C18.6001 16.8 19.6001 16.6 20.4001 17C21.5001 17.4 22.6001 17.7 23.8001 17.8C25.1001 17.9 26.0001 19.0001 26.0001 20.2001Z" stroke="#2D2D2D" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>


                            </div>  
                            <div>
                            1800 1033916
                            </div>    
                            </div>
                        </li>
                        <li>
                            <div className='footer-links-text d-flex'> 
                            <div className='me-1'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1350_176)">
                                <path d="M25.999 5.00098H1.99902C1.72288 5.00098 1.49902 5.22483 1.49902 5.50098V22.501C1.49902 22.7771 1.72288 23.001 1.99902 23.001H25.999C26.2752 23.001 26.499 22.7771 26.499 22.501V5.50098C26.499 5.22483 26.2752 5.00098 25.999 5.00098Z" stroke="#2D2D2D"/>
                                <path d="M26.246 5.24902L14.334 18.03C14.2931 18.074 14.2436 18.1091 14.1885 18.1331C14.1334 18.157 14.074 18.1694 14.014 18.1694C13.9539 18.1694 13.8945 18.157 13.8395 18.1331C13.7844 18.1091 13.7349 18.074 13.694 18.03L1.75098 5.24902" stroke="#2D2D2D"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1350_176">
                                <rect width="27.999" height="27.999" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>


                            </div>  
                            <div>
                            customercare@Zilara.in
                            </div>    
                            </div>
                        </li>
                     </ul>

                    </div>   
                    <div className='col-12  col-sm-6 col-md-3 mb-4'>
                        <div className='mb-3 footer-links-title'>
                        Swarna Shakti App Download
                        </div>
                        <div className='mb-2'>
                            <Image width={182} height={60} src="/app-store.png" alt='app store logo' />
                        </div>
                        <div>
                            <Image width={182} height={60} src="/google-play.png" alt='google play logo' />
                        </div>
                    </div>     
                </div>              
            </div>
        </div>  
      </div>
    </footer>
  )
}

export default Footer
