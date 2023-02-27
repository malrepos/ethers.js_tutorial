# ethers.js Tutorial

My Website - [malcolm-miller.com](malcolm-miller.com)

## Purpose

![](./src/images/ethers.js)

ethers.js has become an essential skill in any web3 developers toolkit. When I was trying to learn it I found there wasn't the kind of easy to follow, beginner friendly tutorials out there to get started. So here's my contribution, a selection of tutorials and guides that aim to cover the most important aspects of ethers.js and allow an intermediate developer to gain enough knowledge to then start experimenting and using the DOCS.

## Table Of Contents

- [Resources for the Course](#)
- [Lesson 1: Introduction to ethers.js](#lesson-1-introduction-to-ethersjs)

  - What is ethers.js
  - Setting up your environment

- [Lesson 2: Getting an Account Balance](#Lesson-2:-Getting-An-Account-Balance)

- [Lesson 3: Section title](#Lesson-3:Reading-Smart-Contracts-on-the-Blockchain)

---

# Resources For The Course

## Using WSL2 on Windows

While not essential, I have found that using WSL for development makes things a lot easier. For ethers.js and for Hardhat, developing in WSL is a smoother process with less dependency issues.
There is excellent documentation for this, and using it in VS code makes it virtually indiscernible from using windows.

- [wsl2 for Windows](https://learn.microsoft.com/en-us/windows/wsl/)

## Node

We will use node.js to manage and run our project.

- [node.js](https://nodejs.org/en/)

## Alchemy, Our Node Provider

In order to talk to the blockchain we need to talk to a node. We could run our own node, however for development purposes we can use a node provider. There are many, including Infura, Quicknode and others. I use Alchemy. It comes with many other resources including a Goerli faucet for 'fake' ether, as well as an SDK. You will need a node provider and test ether for these projects.

- [Alchemy](https://www.alchemy.com/)
- [Goerli Faucet](https://goerlifaucet.com/)

## Etherscan

Etherscan is a fundamental tool for getting details on the Ethereum mainnet and testnets. We will use etherscan to get our contract addresses, token details, as well as explore transactions. Just remember, there is the etherscan for mainnet and another for testnets, in our case the Goerli testnet.

- [Etherscan for Ethereum mainnet](https://etherscan.io/)
- [Etherscan for the Goerli testnet](https://goerli.etherscan.io/)

# Lesson 1: Introduction to ethers.js

### What is ethers.js?

- [ethers.js Documentation](https://docs.ethers.org/v5/)

# Lesson 2: Getting An Account Balance

Code: [Lesson 2: Getting an Account Balance from an Address on the Blockchain](./src/code/accountBalance.js)

- accessing the ethers library in our code
- using "dotenv" for environment variables
- setting up a connection with our node
- getting an address from the blockchain
- creating an async function to hold our code
- getting the balance of an account on the blockchain
- formatting the result for readability
- running our code using node

# Lesson 3: Reading Smart Contracts

Code: [Lesson 3: Reading Smart Contracts on the Blockchain](./src/code/readingSmartContracts.js)

- Getting the contract address: DAI
- ABI for an ERC20 token
- Creating a new contract object
- Getting the name, symbol, and total supply of the ERC20 token

# Lesson 4: Sending A Signed Transaction on the Goerli Testnet

Code: [Lesson 4: Sending a Signed Transaction on Goerli Testnet](src/code/sendingTransaction.js)

- Setting up your wallet
- Getting the public addresses of Metamask accounts
- Getting the private key of the senders account to make a transaction
- setting up a new wallet object to make transactions
- getting account balances before transfers
- waiting for the transaction to be validated
- getting account balance after transaction

# Lesson 5: Writing Contracts

Code: [Lesson 5: Writing Contracts](src/code/writingContracts.js)

- Creating a new wallet object
- Getting our account public addresses
- ABI for the Chainlink contract
- getting the Chainlink address on Goerli testnet
- creating a new contract object
- getting our account balance using the Chainlink contract function
- connecting our wallet to the contract in order to interact with it
- sending a transaction of LINK tokens

# Lesson 6: Contract Events

Code: [Lesson 6: Contract Events](src/code/contractEvents.js)

- What are events?
- The contract ABI
- Getting the latest block number from the blockchain
- Using queryFilter to query specific events

# Lesson 7: Inspecting Blocks and Transactions

Code: [Lesson 7: Inspecting Blocks and Transactions](src/code/inspectingBlocksTransactions.js)

- Getting all transaction hashes from the latest block
- getting the block with the transaction details
- Parsing the resulting transactions
