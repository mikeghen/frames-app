import { exec } from 'child_process';

export const makeFrame = async (
    data: any
) => {

    const postData = {
        CONTRACT_ADDRESS: data.CONTRACT_ADDRESS,
        IMAGE_IPFS: data.IMAGE_IPFS,
        BUY_TEXT: data.BUY_TEXT,
        BUY_PRICE: data.BUY_PRICE,
        SHARE_TEXT: data.SHARE_TEXT,
    };

    fetch('http://127.0.0.1:3333/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log(response.json());
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        return data;
    })
    .catch(error => {
        console.error('Error:', error);
    });


}
