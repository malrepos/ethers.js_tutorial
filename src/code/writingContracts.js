const { ethers } = require("ethers");
require("dotenv").config();

//create our provider RPC
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

//create a new wallet object
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//create 2 accounts
const account1 = "0xc1E615B7B10cC3F22b5067d143AA75a5B3d08e96";
const account2 = "0x2b38627e31316d3385907ab7FA5c0C85bf573953";

//create a new ABI for the chainlink contract
const ERC20_ABI = [
  "function balanceOf(address) view returns(uint)",
  "function transfer(address ro, uint amount) returns(bool)",
];

//the chainlink address
const address = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";

//create a new contract object
const contract = new ethers.Contract(address, ERC20_ABI, provider);

async function main() {
  // here we get the balance of account1 according to the Chainlink contract
  //by calling the Chainlink balanceOf() function
  //this tells us how many tokens this account has which the Chainlink contract has the info for
  const senderBalance = await contract.balanceOf(account1);
  const receiverBalance = await contract.balanceOf(account2);

  console.log(`Reading from ${address}\n`);
  console.log(`Balance of sender is: ${senderBalance}`);

  //we connect our wallet to the contract which will allow us to interact with it
  const contractWithWallet = await contract.connect(wallet);

  //we create a transfer transaction using the transfer function from the contract
  //this will send 2 LINK tokens to account2
  const tx = await contractWithWallet.transfer(account2, "2000000000000000000");

  //wait for the block to be mined
  await tx.wait();

  console.log(tx);

  console.log(`Balance of sender is now: ${senderBalance}`);
  console.log(`Balance of receiver is: ${receiverBalance}`);
}

main();
