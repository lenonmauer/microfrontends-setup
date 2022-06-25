import type { NextPage } from 'next'

import { Navbar } from '@app/components/Navbar'
import { AuthApp } from '@app/apps/Auth/lazy'

const AuthPage: NextPage = () => {
  return (
    <>
      <Navbar />

      <h1>Next.js Shell</h1>

      <AuthApp />
    </>
  )
}

export default AuthPage
