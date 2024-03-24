import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"; // Import the Link component from Next.js
import { Toaster } from 'react-hot-toast'

import Navbar from '../components/navbar'
import CreateFrame from '../components/createFrame'
import Wallet from '../components/wallet'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div className="container max-w-screen-xl m-auto pb-4 md:pb-12">
      <Head>
        <title>Frame Maker</title>
        <meta name="description" content="Frame Maker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <Navbar />

      <Wallet />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="card border-dark">
              <div className="card-header bg-primary text-white">How it works:</div>

              <div className="card-body">

                <ol>
                  <li>1. Select a Frame Template</li>
                  <li>2. Customize your Frame</li>
                  <li>3. Deploy contracts (if needed)</li>
                  <li>4. Launch your Frame!</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4 mb-md-0">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="card border-dark">
                  <div className="card-header bg-secondary text-white">Event Ticket</div>
                  <div className="card-body">
                  <center>
                  <br></br>
                  <img src="/image.jpg" alt="Frame Maker" width={200} height={200} />
                    <br/>
                    <Link href="/create">
                      <a className="btn btn-primary">Create Frame</a>
                    </Link>
                    </center>
                  </div>
                </div>
                <br />
              </div>

              <div className="col-md-4 mb-4 mb-md-0">
                <div className="card border-dark">
                  <div className="card-header bg-secondary text-white">Token-gated Event Ticket</div>
                  <div className="card-body">
                  <center>
                    <img src="/buyNFT.jpg" alt="Frame Maker" width={200} height={200} />
                    <br/>

                    <Link href="/create">
                      <a className="btn btn-primary">Create Frame</a>
                    </Link>
                    </center>
                  </div>
                </div>
                <br />
              </div>

              <div className="col-md-4 mb-4 mb-md-0">
                <div className="card border-dark">
                  <div className="card-header bg-secondary text-white">Free Mint NFT</div>
                  <div className="card-body">
                  <center>

                  <img src="/freeNFT.jpeg" alt="Frame Maker" width={200} height={200} />
                    <br/>
                    <Link href="/create">
                      <a className="btn btn-primary">Create Frame</a>
                    </Link>
                    </center>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
