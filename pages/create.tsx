import type { NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Navbar from '../components/navbar'
import CreateFrame from '../components/createFrame'

import 'bootstrap/dist/css/bootstrap.min.css';
import Wallet from '../components/wallet'


const Create: NextPage = () => {
    return (
      <div className="container max-w-screen-xl m-auto pb-4 md:pb-12">
        <Head>
          <title>Frame Maker | Create Frame</title>
          <meta name="description" content="Frame Maker Create Frame" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Toaster />
        <Navbar />

        <Wallet />
        <br />
        <CreateFrame />
  
      </div>
    )
  }

export default Create