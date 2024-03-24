export const pinFileToIPFS = async (
    imageFile: any
) => {
    const image_data = new FormData();
    image_data.append("file", imageFile);
    image_data.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));

    try {
        const image_upload_response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI4MmZiNTU2Ni01Y2U3LTRmYjEtOGVkZS04YzRiOTFjYzdjMjEiLCJlbWFpbCI6Im1pa2VAbWlrZWdoZW4uY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImZjNjM3MDBhNTEzNTVkNTEyOWM4Iiwic2NvcGVkS2V5U2VjcmV0IjoiY2M1MDI2ZDFkNzU0OTEyMjIzNzNiNjE2YjFkZDYxNGQ1YzgyNTY0ZjQ2N2NhNjM0ZWUyNDI5NDg2YWFjMmEwNiIsImlhdCI6MTcxMTIyMzQ1Nn0.I7A1iS-GLLVhbjNdIbEzrg4YK7gOI64ADNS5OGIQhhk` },
            body: image_data,
        });
        const image_hash = await image_upload_response.json();
        return image_hash.IpfsHash;
    } catch (e) {
        console.log("Error uploading image to IPFS:", e);
        return;
    }
}