const { ethers } = require("ethers");
require("dotenv").config();

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

async function main() {
  const currentBlock = await provider.getBlockNumber();
  console.log(`Latest block is ${currentBlock}`);
  const block = await provider.getBlock(currentBlock);

  console.log(block);

  const { blockWithTrans } = await provider.getBlockWithTransactions(
    currentBlock - 1
  );

  console.log("_____________________________________");
  console.log(blockWithTrans);
}

main();
