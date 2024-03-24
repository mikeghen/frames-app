import { useState, useEffect } from 'react';
import { useAccount, useContractRead, useSigner } from "wagmi";
import { GOALZ_USDC_ADDRESS, GOALZ_WETH_ADDRESS, USDC_ADDRESS, WETH_ADDRESS, ERC20_ABI } from '../config/constants';
import { formatTokenAmount } from '../utils/helpers';
import Link from "next/link"; // Import the Link component from Next.js
import { use } from 'chai';


const Wallet: React.FC<{}> = () => {

  const { address } = useAccount();

  const [goalzUsdBalance, getGoalzUsdBalance] = useState("0.00");
  const [goalzWethBalance, getGoalzWethBalance] = useState("0.00");
  const [usdcBalance, getUsdcBalance] = useState("0.00");
  const [wethBalance, getWethBalance] = useState("0.00");

  const goalzUsdBalanceData = useContractRead({
    addressOrName: GOALZ_USDC_ADDRESS,
    contractInterface: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    watch: true,
  });

  const goalzWethBalanceData = useContractRead({
    addressOrName: GOALZ_WETH_ADDRESS,
    contractInterface: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    watch: true,
  });

  const usdcBalanceData = useContractRead({
    addressOrName: USDC_ADDRESS,
    contractInterface: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    watch: true,
  });

  const wethBalanceData = useContractRead({
    addressOrName: WETH_ADDRESS,
    contractInterface: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    watch: true,
  });




  useEffect(() => {
    if (goalzUsdBalanceData.data) {
      getGoalzUsdBalance(formatTokenAmount(goalzUsdBalanceData.data, 18, 2));
    }
  }, [goalzUsdBalanceData.data]);

  useEffect(() => {
    if (goalzWethBalanceData.data) {
      getGoalzWethBalance(formatTokenAmount(goalzWethBalanceData.data, 18, 2));
    }
  }, [goalzWethBalanceData.data]);

  useEffect(() => {
    if (usdcBalanceData.data) {
      getUsdcBalance(formatTokenAmount(usdcBalanceData.data, 18, 2));
    }
  }, [usdcBalanceData.data]);

  useEffect(() => {
    if (wethBalanceData.data) {
      getWethBalance(formatTokenAmount(wethBalanceData.data, 18, 2));
    }
  }, [wethBalanceData.data]);

  // Function to handle adding a new goal row
  const handleAddNewGoalRow = () => {

  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mb-4 mb-md-0">
          <h1 className="m-auto text-center md:mt-8  font-extrabold">
            Frame 
            <a href="https://github.com/iMuzz/web3-starter" target="_blank" rel="noreferrer" className="rotating-hue">
              Maker
            </a>
          </h1>
          <div className="d-flex justify-content-center mt-3">
            {/* <Link href="/create">
              <a className="btn btn-primary">Create Frame</a>
            </Link>
            &nbsp;&nbsp;
            <Link href="/">
              <a className="btn btn-primary">View Frames</a>
            </Link> */}
          </div>
        </div>
      </div>
      <br/>
      <style jsx>{`
        .rotating-hue {
          background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-animation: hue 30s infinite linear;
        }

        @-webkit-keyframes hue {
          from {
            -webkit-filter: hue-rotate(0deg);
          }
          to {
            -webkit-filter: hue-rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Wallet;
