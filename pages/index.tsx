import type { NextPage } from 'next'
import Head from 'next/head'

import HomeView from '../views/home'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-2 h-[calc(100vh-5rem)]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
 <HomeView />

    </div>
  )
}

export default Home
