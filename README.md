# GOLDMIN3 NFT Collection (ERC721)

[View GOLDMIN3 Collection on OpenSea](https://opensea.io/collection/goldmin3)

Deployed on Arbitrum at 0x32c1a1fA68aA52B28b7BBeb0b073f4e9e1CfC4dA.

## Setup

```
npm i
```

Deploy contract to `Arbitrum` network:
```
npx hardhat run scripts/deploy.js --network arbitrum
```

### Verify Contract on Arbiscan

https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan

```
npx hardhat verify --network arbitrum 0x32c1a1fA68aA52B28b7BBeb0b073f4e9e1CfC4dA
```

### Adding metadata and payments to your contract

https://docs.opensea.io/docs/part-3-adding-metadata-and-payments-to-your-contract

Once you have some images in the `/images` directory, pack them to an IPFS-compatible CAR using a handy CLI command:
```
npx ipfs-car --pack images --output images.car
```

Output:
```
> npx ipfs-car --pack images --output images.car
root CID: bafybeig6eoagrxs3noxi5v6muy3bkmmckzfyues7uj24al4khqyiw7fe3y
  output: images.car
```

Next navigate to the [NFT Storage Files](https://nft.storage/files/) page to upload this CAR file to IPFS.

Once uploaded, you should be able to click through the CID for the uploaded directory and browse through your images, which are now officially on IPFS!

Pack metadata into CAR, then upload to NFT Storage:
```
npx ipfs-car --pack metadata --output metadata.car
```

CID of example files on IPFS:
- Images: [bafybeig6eoagrxs3noxi5v6muy3bkmmckzfyues7uj24al4khqyiw7fe3y](https://bafybeig6eoagrxs3noxi5v6muy3bkmmckzfyues7uj24al4khqyiw7fe3y.ipfs.nftstorage.link/images)
- Metadata: [bafybeibge4rdlwtbwpmsyn3zgpsr6ibq7dogiywz3syuikw7hv3hsxhwn4](https://bafybeibge4rdlwtbwpmsyn3zgpsr6ibq7dogiywz3syuikw7hv3hsxhwn4.ipfs.nftstorage.link/metadata)

### Using the generateMetadata.js helper

```
cd metadata
node
```

then copy-pasta the code from `generateMetadata.js` and input into your terminal.

All the files should be generated in your `./metadata` folder, according to the script.