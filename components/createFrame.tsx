import React from 'react';
import { createFrame } from '../utils/ethereum';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';
import { FACTORY_ABI, FACTORY_ADDRESS } from '../config/constants';

const CreateFrame = () => {

    const [createLoading, setCreateLoading] = React.useState(false);
    const [maxSupply, setMaxSupply] = React.useState(0);
    const [priceWif, setPriceWif] = React.useState(0);
    const [priceWifOut, setPriceWifOut] = React.useState(0);
    const [creator, setCreator] = React.useState("");
    const [gateToken, setGateToken] = React.useState("");
    const [tokenUri, setTokenUri] = React.useState("");
    const [name, setName] = React.useState("");


    const handleCreateFrameToken = async () => {
        console.log("Create Frame");
        setCreateLoading(true);

        const maxSupply = (document.getElementById("maxSupply") as HTMLInputElement).value;
        const priceWif = (document.getElementById("priceWif") as HTMLInputElement).value;
        const priceWifOut = (document.getElementById("priceWifout") as HTMLInputElement).value;
        const creator = (document.getElementById("creator") as HTMLInputElement).value;
        const gateToken = (document.getElementById("gateToken") as HTMLInputElement).value;
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const symbol = (document.getElementById("symbol") as HTMLInputElement).value;

        // Process the token image, pin it to pinata, and get the URI
        const image = document.querySelector('input[type="file"]');
        
        let image_uri;
        const image_data = new FormData();
        image_data.append("file", image.files[0]);
        image_data.append("pinataOptions", JSON.stringify({cidVersion: 1}));
        console.log("image_data", image_data);

        try {
            toast("Uploading Image to IPFS via Pinata...");
            const image_upload_response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
              method: "POST",
              headers: {Authorization: `Bearer [fill in]`, 'Content-Type': 'multipart/form-data'},
              body: image_data,
            });

            console.log("image_upload_response", image_upload_response)
      
            const image_hash = await image_upload_response.json();
            image_uri = `ipfs://${image_hash.IpfsHash}`;

            toast(`Success. Image located at ${image_uri}.`);
      
          } catch (e) {
            toast.error("Error uploading image to IPFS.");
            console.log("Error uploading image to IPFS:", e);
            return;
          }

        // Try to create the frame
        try {
            let result = await createFrame(
                maxSupply,
                ethers.utils.parseEther(priceWif).toString(),
                ethers.utils.parseEther(priceWifOut).toString(),
                creator,
                gateToken,
                image_uri,
                name,
                symbol
            );
            toast.success('Frame created!');
        } catch (error) {
            toast.error('Error creating frame.');
            console.log("createFrame error:", error);
        } finally {
            setCreateLoading(false);
            document.getElementById("step1").classList.remove("alert-warning");
            document.getElementById("step1").classList.add("alert-success");

            document.getElementById("step1Form").style.display = "none";
            document.getElementById("step2Form").style.display = "block";
        }

    };

    const handleCreateFrame = async () => {
        console.log("Create Frame");

        const title = (document.getElementById("title") as HTMLInputElement).value;
        const location = (document.getElementById("location") as HTMLInputElement).value;
        const datetime = (document.getElementById("datetime") as HTMLInputElement).value;
        const buyText = (document.getElementById("buyText") as HTMLInputElement).value;
        const shareText = (document.getElementById("shareText") as HTMLInputElement).value;
        const backgroundImage = (document.getElementById("backgroundImage") as HTMLInputElement).value;

        // Try to create the frame
        try {
            setCreateLoading(true);

            // TODO: This needs to dynamically populate the frame data into a frame
            // and deploy it on something like Alchemy

            toast.success('Frame created!');
        } catch (error) {
            toast.error('Error creating frame.');
            console.log("createFrame error:", error);
        } finally {
            setCreateLoading(false);
            document.getElementById("step2").classList.remove("alert-warning");
            document.getElementById("step2").classList.add("alert-success");

            document.getElementById("step2Form").style.display = "none";
            document.getElementById("step3Form").style.display = "block";
        }

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mb-4 mb-md-0" id="step1Form">
                    <div className="card border-dark">
                        <div className="card-header bg-secondary text-white">Step 1: Create a Contract</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Max Supply</label>
                                <input type="text" className="form-control" id="maxSupply" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Price with Token</label>
                                <input type="text" className="form-control" id="priceWif" />
                                <small className="text-muted">in Ether</small>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Price without Token</label>
                                <input type="text" className="form-control" id="priceWifout" />
                                <small className="text-muted">in Ether</small>
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Creator Address</label>
                                <input type="text" className="form-control" id="creator" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Gate Token</label>
                                <input type="text" className="form-control" id="gateToken" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Token Image</label>
                                <input type="file" className="form-control" id="tokenImage" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="eventIdInput">Symbol</label>
                                <input type="text" className="form-control" id="symbol" />
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
                <div className="col-md-8 mb-4 mb-md-0" id="step2Form" style={{ display: 'none' }}>
                    <div className="card border-dark">
                        <div className="card-header bg-secondary text-white">Step 2: Create your Frame</div>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="titleInput">Title</label>
                                <input type="text" className="form-control" id="title" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="locationInput">Location</label>
                                <input type="text" className="form-control" id="location" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="datetimeInput">Datetime</label>
                                <input type="text" className="form-control" id="datetime" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="buyTextInput">Buy Text</label>
                                <input type="text" className="form-control" id="buyText" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="shareTextInput">Share Text</label>
                                <input type="text" className="form-control" id="shareText" />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="backgroundImageInput">Background Image</label>
                                <input type="file" className="form-control" id="backgroundImage" />
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
                <div className="col-md-4 mb-4 mb-md-0">
                    <div className="card border-dark">
                        <div className="card-body">
                            <div className="alert alert-warning" id="step1">
                                <strong>Step 1:</strong> Create the contract
                            </div>

                            <div className="alert alert-warning" id="step2">
                                <strong>Step 2:</strong> Create the frame
                            </div>

                            <div className="alert alert-warning" id="step3">
                                <strong>Step 3:</strong> View your frame
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


