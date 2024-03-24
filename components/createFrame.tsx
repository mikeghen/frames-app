import React from 'react';
import { createFrame } from '../utils/ethereum';
import { pinFileToIPFS } from '../utils/pinata';
import { makeFrame } from '../utils/vercel';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import { FACTORY_ABI, FACTORY_ADDRESS } from '../config/constants';

const CreateFrame = () => {

    const [createLoading, setCreateLoading] = React.useState(false);
    const [contractAddress, setContractAddress] = React.useState("");
    const [framePreviewReady, setFramePreviewReady] = React.useState(false);
    const [maxSupply, setMaxSupply] = React.useState("");
    const [priceWif, setPriceWif] = React.useState("");
    const [priceWifOut, setPriceWifOut] = React.useState("");
    const [creator, setCreator] = React.useState("");
    const [gateToken, setGateToken] = React.useState("");
    const [tokenUri, setTokenUri] = React.useState("");
    const [imageIpfsHash, setImageIpfsHash] = React.useState("");
    const [name, setName] = React.useState("");
    const [symbol, setSymbol] = React.useState("");
    const [selectedFile, setSelectedFile]: any = React.useState();
    const [buyText, setBuyText] = React.useState("");
    const [shareText, setShareText] = React.useState("");
    const [buyPrice, setBuyPrice] = React.useState("");

    const mockFrameUrl = "https://frames-rose.vercel.app/api";
    const mockFramePreviewUrl = "https://warpcast.com/~/developers/frames?url=https%3A%2F%2Fframes-rose.vercel.app%2Fapi"
    
    const changeHandler = (event: any) => {
      setSelectedFile(event.target.files[0]);
    };


    const handleCreateFrameToken = async () => {
        setCreateLoading(true);

        const imageUri = await pinFileToIPFS(selectedFile);
        console.log("imageIpfsHash:", imageUri);
        toast.success("Image uploaded to IPFS with Pinata 🎉");

        // Try to create the frame
        try {
            let result = await createFrame(
                maxSupply,
                ethers.utils.parseEther(priceWif).toString(),
                ethers.utils.parseEther(priceWif).toString(),
                creator,
                "0x8801ED4695035aaCFf23b93559932D91db713f2E",
                `ipfs://${imageUri}`,
                name,
                symbol
            );

            setContractAddress(result);

            console.log("createFrame result:", result);
            toast.success('NFT created! 🎉');
        } catch (error) {
            toast.error('Error creating frame.');
            console.log("createFrame error:", error);
        } finally {
            setCreateLoading(false);
            document.getElementById("step1")?.classList.remove("alert-warning");
            document.getElementById("step1")?.classList.add("alert-success");

            document.getElementById("step1Form").style.display = "none";
            document.getElementById("step2Form").style.display = "block";
        }

    };

    const handleCreateFrame = async () => {
        setCreateLoading(true);

        const imageUri = await pinFileToIPFS(selectedFile);
        console.log("imageIpfsHash:", imageUri);
        toast.success("Image uploaded to IPFS with Pinata 🎉");

        try {
            const data = {
                CONTRACT_ADDRESS: contractAddress,
                IMAGE_IPFS: imageUri,
                BUY_TEXT: buyText,
                BUY_PRICE: priceWif,
                SHARE_TEXT: shareText
            };
            console.log("data:", data);
            // const frameUrl = await makeFrame(data);
            await new Promise(resolve => setTimeout(resolve, 5000));
            toast.success('Frame created!');
            setFramePreviewReady(true);
        } catch (error) {
            toast.error('Error creating frame.');
            console.log("createFrame error:", error);
        } finally {
            setCreateLoading(false);
            document.getElementById("step2")?.classList.remove("alert-warning");
            document.getElementById("step2")?.classList.add("alert-success");

            document.getElementById("step2Form").style.display = "none";
            document.getElementById("step3Form").style.display = "block";
            document.getElementById("step3")?.classList.remove("alert-warning");
            document.getElementById("step3")?.classList.add("alert-info");
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mb-4 mb-md-0" id="step2Form" style={{ display: "none" }}>
                    <div className="card border-dark">
                        <div className="card-header bg-secondary text-white">Step 2: Customize your Frame</div>
                        <div className="card-body">
                            <br />
                            <div className="form-group">
                                <label htmlFor="buyTextInput">Buy Text</label>
                                <input type="text" className="form-control" id="buyText" value={buyText} onChange={e => setBuyText(e.target.value)} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="shareTextInput">Share Text</label>
                                <input type="text" className="form-control" id="shareText" value={shareText} onChange={e => setShareText(e.target.value)} />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="backgroundImageInput">Background Image</label>
                                <input type="file" className="form-control" id="backgroundImage" onChange={changeHandler}/>
                            </div>
                            <br />
                            <button className="btn btn-primary" onClick={handleCreateFrame}>
                                {createLoading ? (
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                ) : (
                                    'Create Frame'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mb-4 mb-md-0" id="step1Form" >
                    <div className="card border-dark">
                        <div className="card-header bg-secondary text-white">Step 1: Create NFT Tickets</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Max Supply</label>
                                <input type="text" className="form-control" id="maxSupply" value={maxSupply} onChange={e => setMaxSupply(e.target.value)} />
                                <small className="text-muted">The maximum number of tickets that can be sold through this frame.</small>
                            </div>
                            <br/>
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Price </label>
                                <input type="text" className="form-control" id="priceWif" value={priceWif} onChange={e => setPriceWif(e.target.value)} />
                                <small className="text-muted">The price to buy a ticket in Ether.</small>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Creator Address</label>
                                <input type="text" className="form-control" id="creator" value={creator} onChange={e => setCreator(e.target.value)} />
                                <small className="text-muted">The address that will receive the ticket sales.</small>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Token Image</label>
                                <input type="file" className="form-control" id="tokenImage" onChange={changeHandler} />
                                <small className="text-muted">The image shown for this ticket NFT in the users wallet.</small>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Name</label>
                                <input type="text" className="form-control" id="name" value={name} onChange={e => setName(e.target.value)} />
                                <small className="text-muted">The name for these NFT tickets.</small>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Symbol</label>
                                <input type="text" className="form-control" id="symbol" value={symbol} onChange={e => setSymbol(e.target.value)} />
                                <small className="text-muted">The symbol for these NFT tickets.</small>
                            </div>
                            <br />
                            <button className="btn btn-primary" onClick={handleCreateFrameToken}>
                                {createLoading ? (
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                ) : (
                                    'Create Token'
                                )}
                            </button>
                            <br />

                        </div>
                    </div>
                </div>

                <div className="col-md-8 mb-4 mb-md-0" id="step3Form" style={{ display: "none" }}>
                    <div className="card border-dark">
                        <div className="card-header bg-primary text-white">Frame Preview</div>
                        <div className="card-body">

                        {framePreviewReady ? (
                            <>
                                <p>Frame URL: <a href={mockFrameUrl} target="_blank">Frame URL</a></p>

                                <p>Preview URL: <a href={mockFramePreviewUrl} target="_blank">Warpcast Developer</a></p>    
                            </>
                            ) : (
                                <center>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </center>
                        )}
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="col-md-12 mb-4 mb-md-0">
                        <div className="card border-dark">
                        <div className="card-header bg-primary text-white">Sell Event Tickets</div>
                            <div className="card-body">
                                <div className="alert alert-warning" id="step1">
                                    <strong>Step 1:</strong> Create NFT Tickets
                                </div>

                                <div className="alert alert-warning" id="step2">
                                    <strong>Step 2:</strong> Customize your Frame
                                </div>

                                <div className="alert alert-warning" id="step3">
                                    <strong>Step 3:</strong> Preview your Frame on Warpcast
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
};

export default CreateFrame;


