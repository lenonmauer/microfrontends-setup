import type { NextPage } from 'next'

import { Navbar } from '../components/Navbar'
import { HomeApp } from '../apps/Home/lazy'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <h1>Next.js Shell</h1>

      <HomeApp />
    </>
  )
}

export default Home
