import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
const year=new Date().getFullYear()

  return (
    <footer className='footer-section py-4'>
      <div className='container'>
        <div className='row mt-5'>
            <div className='col-12 col-lg-4 mb-4'>
                <div>
                    <div className='mb-3'>
                    <Image className='zillara-logo img-fluid' width={265} height={60} src="/zillara_logo.png" alt='zillara logo' />
                    </div>
                    <div className='footer-text mb-4'>
                    Subscribe to email alerts. We promise not to spam your inbox.
                    </div>
                    <div className="footer-input-group"><input type="email" className="subscribe-input form-control" placeholder="Enter your email" /><span className="input-group-btn ml-auto"><button className="btn subscribe-btn" type="submit">Subscribe</button></span></div>
                </div>
            </div>
            <div  className='col-12 col-lg-8'>
                <div className='row footer-block-items'>
                    <div className='col-12 col-sm-6 col-md-4 mb-4 footer-block'>
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
                    <div className='col-12 col-sm-6 col-md-5 mb-4 footer-block'>
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
                    <div className='col-12 col-sm-6 col-md-3 mb-4 footer-block'>
                        <div className='mb-3 footer-links-title'>
                        Swarna Shakti App Download
                        </div>
                        <div className='mb-2'>
                        <a target="_blank" href="https://apps.apple.com/id/app/jewelone/id1507128724">
                            <Image className='img-fluid' width={182} height={60} src="/app-store.png" alt='app store logo' />
                        </a>
                        </div>
                        <div>
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.jewelone.winchit">
                            <Image className='img-fluid' width={182} height={60} src="/google-play.png" alt='google play logo' />
                            </a>

                        </div>
                    </div>     
                </div>      
                <div className='row  mt-3'>
                    <div className='col-12 col-lg-5 mb-3'>
                        <div className='footer-links-title mb-3'>
                        Follow Us
                        </div>
                        
                        <div className="d-flex align-items-center gap-3">
                            <div>
                            <a target="_blank" href="https://www.facebook.com/jewelone916">
                            <svg width="13" height="26" viewBox="0 0 13 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.95301 26H8.62141V12.8799H12.5814L13 8.49256H8.62141C8.62141 8.49256 8.62141 6.85255 8.62141 5.99598C8.62141 4.96183 8.8477 4.55444 9.93386 4.55444C10.8051 4.55444 13 4.55444 13 4.55444V0C13 0 9.76414 0 9.07397 0C4.85378 0 2.95301 1.71314 2.95301 5.00362C2.95301 7.86581 2.95301 8.50301 2.95301 8.50301H0V12.953H2.95301V26Z" fill="#2D2D2D"/>
                                    </svg>

                                </a>
                            </div>
                            <div className="footer-twitter-icon">
                            <a target="_blank" href="https://twitter.com/jewelone916">
                            <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 16.8486C2.08519 18.2119 4.56856 19 7.23006 19C15.99 19 20.9358 11.4809 20.6424 4.7287C21.5645 4.05774 22.3608 3.20572 23 2.2472C22.1513 2.63061 21.2396 2.8862 20.2861 3.00336C21.2606 2.40694 22.0046 1.46973 22.3608 0.351459C21.4492 0.905271 20.4433 1.29933 19.364 1.51233C18.5048 0.57511 17.2788 0 15.9166 0C12.8674 0 10.6355 2.88621 11.3166 5.88957C7.39773 5.68722 3.9189 3.78082 1.5927 0.87331C0.356253 3.02466 0.953519 5.84698 3.04919 7.27411C2.27379 7.25281 1.55079 7.02915 0.911612 6.6777C0.859221 8.90359 2.43098 10.9804 4.6943 11.4383C4.03416 11.6194 3.30068 11.662 2.5672 11.5235C3.16446 13.4299 4.91434 14.8145 6.97858 14.8571C4.99817 16.4439 2.50433 17.1469 0 16.8486Z" fill="white"/>
                                    </svg>

                            </a>
                            </div>
                            <div>
                            <a target="_blank" href="https://in.pinterest.com/JewelOne916/">
                            <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.05174 15.0366C3.38965 15.1747 3.69588 15.0472 3.79092 14.6647C3.85428 14.399 4.02323 13.7402 4.09715 13.4639C4.19219 13.0919 4.16051 12.9538 3.88596 12.635C3.28405 11.923 2.90391 11.0091 2.90391 9.70207C2.90391 5.92963 5.71278 2.55038 10.2112 2.55038C14.1922 2.55038 16.3886 5.00512 16.3886 8.2781C16.3886 12.5819 14.4984 16.2162 11.679 16.2162C10.1267 16.2162 8.96515 14.9197 9.33474 13.3364C9.77825 11.4448 10.6441 9.40452 10.6441 8.03369C10.6441 6.81164 9.98944 5.79149 8.6378 5.79149C7.05385 5.79149 5.77614 7.4386 5.77614 9.65956C5.77614 11.0729 6.25132 12.0187 6.25132 12.0187C6.25132 12.0187 4.62513 18.9472 4.34002 20.1586C3.7698 22.5708 4.25554 25.5357 4.29778 25.8332C4.3189 26.0139 4.55122 26.0564 4.64625 25.9182C4.79409 25.7269 6.68427 23.3785 7.32841 21.03C7.50792 20.3711 8.37381 16.9281 8.37381 16.9281C8.89124 17.9164 10.4013 18.7878 11.9958 18.7878C16.7687 18.7878 20 14.4096 20 8.55439C20 4.12311 16.2724 0 10.6019 0C3.54805 0 0 5.09014 0 9.33014C0.0105597 11.9018 0.971489 14.1865 3.05174 15.0366Z" fill="#2D2D2D"/>
                                </svg>


                                </a>
                            </div>
                            <div>
                            <a target="_blank" href="https://www.instagram.com/jewelone_in/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8974 2.19293C15.0799 2.19293 15.4487 2.20346 16.7028 2.26668C17.8619 2.31937 18.4942 2.50906 18.9157 2.67767C19.4743 2.88843 19.8642 3.15189 20.2857 3.56287C20.7072 3.98439 20.9601 4.37429 21.1709 4.9328C21.3289 5.35432 21.5292 5.98661 21.5819 7.14579C21.6345 8.39981 21.6556 8.77918 21.6556 11.9511C21.6556 15.1336 21.6451 15.5024 21.5819 16.7565C21.5292 17.9156 21.3395 18.5479 21.1709 18.9694C20.9601 19.528 20.6967 19.9179 20.2857 20.3394C19.8642 20.7609 19.4743 21.0138 18.9157 21.2246C18.4942 21.3827 17.8619 21.5829 16.7028 21.6356C15.4487 21.6883 15.0694 21.7093 11.8974 21.7093C8.71494 21.7093 8.34611 21.6988 7.09208 21.6356C5.9329 21.5829 5.30062 21.3932 4.8791 21.2246C4.32059 21.0138 3.93068 20.7504 3.50916 20.3394C3.08764 19.9179 2.83473 19.528 2.62397 18.9694C2.4659 18.5479 2.26567 17.9156 2.21298 16.7565C2.16029 15.5024 2.13922 15.1231 2.13922 11.9511C2.13922 8.76864 2.14976 8.39981 2.21298 7.14579C2.26567 5.98661 2.45536 5.35432 2.62397 4.9328C2.83473 4.37429 3.09818 3.98439 3.50916 3.56287C3.93068 3.14135 4.32059 2.88843 4.8791 2.67767C5.30062 2.5196 5.9329 2.31937 7.09208 2.26668C8.33557 2.20346 8.71494 2.19293 11.8974 2.19293ZM11.8974 0.0537109C8.66225 0.0537109 8.26181 0.0642406 6.98671 0.127469C5.72214 0.180159 4.85802 0.390924 4.09929 0.67545C3.31947 0.981052 2.65558 1.3815 1.99169 2.0454C1.32779 2.70929 0.927346 3.37319 0.621743 4.153C0.326679 4.91174 0.126456 5.77584 0.0737658 7.0404C0.0105377 8.30497 0 8.71595 0 11.9511C0 15.1863 0.0105377 15.5867 0.0737658 16.8618C0.126456 18.1264 0.337217 18.9905 0.621743 19.7493C0.927346 20.5291 1.32779 21.193 1.99169 21.8569C2.65558 22.5208 3.31947 22.9212 4.09929 23.2268C4.85802 23.5219 5.72214 23.7221 6.98671 23.7853C8.25127 23.838 8.66225 23.8591 11.8974 23.8591C15.1326 23.8591 15.533 23.8485 16.8081 23.7853C18.0727 23.7326 18.9368 23.5219 19.6956 23.2268C20.4754 22.9212 21.1393 22.5208 21.8032 21.8569C22.467 21.193 22.8675 20.5291 23.1731 19.7493C23.4682 18.9905 23.6684 18.1264 23.7316 16.8618C23.7843 15.5973 23.8054 15.1863 23.8054 11.9511C23.8054 8.71595 23.7948 8.3155 23.7316 7.0404C23.6789 5.77584 23.4682 4.91174 23.1731 4.153C22.8675 3.37319 22.467 2.70929 21.8032 2.0454C21.1393 1.3815 20.4754 0.981052 19.6956 0.67545C18.9368 0.380386 18.0727 0.180159 16.8081 0.127469C15.533 0.0642406 15.1326 0.0537109 11.8974 0.0537109Z" fill="#2D2D2D"/>
                                <path d="M11.8972 5.83911C8.52504 5.83911 5.78516 8.579 5.78516 11.9512C5.78516 15.3233 8.52504 18.0632 11.8972 18.0632C15.2694 18.0632 18.0093 15.3233 18.0093 11.9512C18.0093 8.579 15.2694 5.83911 11.8972 5.83911ZM11.8972 15.924C9.7053 15.924 7.93491 14.1431 7.93491 11.9617C7.93491 9.7698 9.71584 7.99941 11.8972 7.99941C14.0891 7.99941 15.8595 9.78034 15.8595 11.9617C15.8595 14.1431 14.0891 15.924 11.8972 15.924Z" fill="#2D2D2D"/>
                                <path d="M19.6749 5.59674C19.6749 6.3871 19.0321 7.02992 18.2418 7.02992C17.4514 7.02992 16.8086 6.3871 16.8086 5.59674C16.8086 4.80639 17.4514 4.16357 18.2418 4.16357C19.0427 4.17411 19.6749 4.80639 19.6749 5.59674Z" fill="#2D2D2D"/>
                                </svg>
                            </a>

                            </div>
                            <div>
                            <a target="_blank" href="https://www.youtube.com/channel/UCCG6vza_ECtCW9D58F8Xh_Q">
                            <svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.4344 2.96417C26.1202 1.79107 25.2091 0.879833 24.0465 0.56561C21.9414 8.92755e-06 13.5 0 13.5 0C13.5 0 5.05857 8.92755e-06 2.95345 0.56561C1.79092 0.879833 0.879752 1.80155 0.565555 2.96417C-6.24253e-08 5.07994 0 9.50001 0 9.50001C0 9.50001 -6.24253e-08 13.9201 0.565555 16.0358C0.879752 17.2089 1.79092 18.1202 2.95345 18.4344C5.05857 19 13.5 19 13.5 19C13.5 19 21.9414 19 24.0465 18.4344C25.2091 18.1202 26.1202 17.1985 26.4344 16.0358C27 13.9201 27 9.50001 27 9.50001C27 9.50001 27 5.07994 26.4344 2.96417ZM10.7455 13.5116V5.48843L17.794 9.50001L10.7455 13.5116Z" fill="#2D2D2D"/>
                            </svg>

                            </a>
                            </div>

                        </div>




                    </div>
                    <div className='col-12 col-lg-7 mb-3 d-flex justify-content-lg-end align-items-lg-end'>
                        <div className='footer-copyright-text'>
                        © {year} Zilara Silver Redefined. All Rights Reserved.
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
