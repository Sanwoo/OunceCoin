## Usage

### Open the contracts folder as your root director, new a terminal to start anvil

```shell
anvil
```

### new another terminal to build and deploy the contarct on anvil

```shell
source .env
```

```shell
forge create OunceCoin  --private-key $OWNER_PRIVATE_KEY --broadcast --constructor-args $OWNER_PUBLIC_KEY
```

### Then you get the contract address on anvil and the transaction hash

### Don't end the anvil and open the erc20-frontend folder in another IDE, change the contractAddress constant to the address of contract you just deployed on anvil

```shell
npm i
npm run dev
```

### Connect your wallet, import the first anvil account's private address and the anvil chain network to your wallet, then you can mint yout first OunceCoin
