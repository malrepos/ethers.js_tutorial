const { ethers } = require("ethers"); //we need to import ethers to use it
require("dotenv").config(); //we also need dotenv in order to use environment variables

// now we set up an JsonRpc connection with our node

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

// now we can test that we are talking to the blockchain
const address = "0x8351076a6A1F4524c6e0Af574A299A3051B58724"; //hardcode the address to a variable

async function main() {
  const balance = await provider.getBalance(address); //we get the balance of an address from the blockchain

  //we can format our result using utils, converting wei into ether for readability
  console.log(
    `\nThe balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`
  );
}

main();
