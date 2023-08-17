import Image from 'next/image'
import styles from './page.module.css'
import MapSection from '@/components/MapSection/MapSection'
import LogoTextSection from '@/components/LogoTextSection/LogoTextSection'
import MainSlider from '@/components/MainSlider/MainSlider'
import ImageBannerSection from '@/components/ImageBannerSection/ImageBannerSection'

export default function Home() {
  return (
    <>
    <MainSlider/>
    <LogoTextSection/>
    <MapSection/>
    <ImageBannerSection/>
    </>
  )
}
