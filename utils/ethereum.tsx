import { BigNumber, ethers } from 'ethers';
import {FACTORY_ADDRESS, FACTORY_ABI, ERC20_ABI } from '../config/constants'; 

// Methods for executing transaction on Ethereum 

export const getProvider = () => {
    if (typeof window.ethereum !== 'undefined') {
        return new ethers.providers.Web3Provider(window.ethereum);
    }
    throw new Error('Ethereum provider not found.');
};

export const getSigner = (provider: ethers.providers.Web3Provider) => {
    return provider.getSigner();
};

export const createFrame = async (
    maxSupply: string,
    priceWif: string,
    priceWifOut: string,
    creator: string,
    gateToken: string,
    tokenUri: string,
    name: string,
    symbol: string
) => {
    const provider = await getProvider();
    const signer = await getSigner(provider);
    const factory = new ethers.Contract(
        FACTORY_ADDRESS,
        FACTORY_ABI,
        signer
    );
    
    console.log("createFrame with params");
    console.log("maxSupply:", maxSupply);
    console.log("priceWif:", priceWif);
    console.log("priceWifOut:", priceWifOut);
    console.log("creator:", creator);
    console.log("gateToken:", gateToken);
    console.log("tokenUri:", tokenUri);
    console.log("name:", name);
    console.log("symbol:", symbol);

    const createFrameTx = await factory.createFrame([
        maxSupply,
        priceWif,
        priceWifOut,
        creator,
        gateToken,
        tokenUri,
        name,
        symbol
    ]);

    await createFrameTx.wait();

    const contractAddress = await factory.getFrame(creator);

    return contractAddress;
};



