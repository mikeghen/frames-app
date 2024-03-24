from flask import Flask, request, jsonify
import subprocess
import os

app = Flask(__name__)
port = 3333

@app.route('/', methods=['POST'])
def deploy():
    try:
        print("Received POST request")

        # Extract values from the request body
        data = request.json
        print("Request data:", data)
        CONTRACT_ADDRESS = data['CONTRACT_ADDRESS']
        IMAGE_IPFS = data['IMAGE_IPFS']
        BUY_TEXT = data['BUY_TEXT']
        BUY_PRICE = data['BUY_PRICE']
        SHARE_TEXT = data['SHARE_TEXT']

        # Get token from environment variable
        TOKEN = os.getenv('TOKEN')
        PINATA_JWT = os.getenv('PINATA_JWT')
        print("Vercel token:", TOKEN)

        # Construct the command
        command = f"nvm use v18.17.0 && cd /Users/mghen/Documents/Projects/frame-{CONTRACT_ADDRESS} && vercel -y --prod --token {TOKEN} \
        --env PINATA_JWT={PINATA_JWT} \
        --env CONTRACT_ADDRESS={CONTRACT_ADDRESS} \
        --env ALCHEMY_URL_BASE=https://base-sepolia.g.alchemy.com/v2/pZYc7srXo3ZbvV8dCAAm-Dqwj_GKUDGa \
        --env IMAGE_IPFS='{IMAGE_IPFS}' \
        --env BUY_TEXT='{BUY_TEXT}' \
        --env BUY_PRICE='{BUY_PRICE}' \
        --env SHARE_TEXT='{SHARE_TEXT}'"

        cp_command = f"cp -r /Users/mghen/Documents/Projects/hat-store-frame-2 /Users/mghen/Documents/Projects/frame-{CONTRACT_ADDRESS}"
        print("Vercel command:", command)
        print("Copy command:", cp_command)
        print(os.environ['PATH'])

        # Execute the cp command
        print("Executing cp command")
        subprocess.run(cp_command, shell=True, check=True)

        # Execute the vercel command
        print("Executing Vercel command")
        result = subprocess.run(command, shell=True, check=True, capture_output=True)
        result = result.stdout.decode()

        print("Deployment successful")
        return jsonify(result=result), 200
    except Exception as e:
        print("Error:", e)
        print("Command:", command)
        return str(e), 500

if __name__ == '__main__':
    print("Server is running on http://localhost:", port)
    app.run(port=port)
