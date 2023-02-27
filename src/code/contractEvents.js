const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

const ERC20_ABI = [
  "function name() view returns(string)",
  "function symbol() view returns(string)",
  "function totalSupply() view returns(uint256)",
  "function balanceOf(address) view returns (uint)",

  "event Transfer(address indexed src, address indexed dst, uint wad)",
];

const contract = new ethers.Contract(address, ERC20_ABI, provider);

async function main() {
  const blockNumber = await provider.getBlockNumber();

  const transferEvent = await contract.queryFilter(
    "Transfer",
    blockNumber - 10,
    blockNumber
  );

  console.log(transferEvent);
}

main();
