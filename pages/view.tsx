import type { NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Navbar from '../components/navbar'
import ViewGoals from '../components/viewGoals'

import 'bootstrap/dist/css/bootstrap.min.css';

const View: NextPage = () => {
    return (
      <div className="container max-w-screen-xl m-auto pb-4 md:pb-12">
        <Head>
          <title>Frame Maker | View Frames</title>
          <meta name="description" content="Frame Maker View Frames" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Toaster />
        <Navbar />
  
        <ViewGoals />
  
      </div>
    )
  }

export default View