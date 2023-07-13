

import Banner from '@/components/Banner';
import NavbarComp from '@/components/Navbar';
import Products from '@/components/Products';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <NavbarComp />
      <Banner />
      <Products />
    </main>
  )
}
