# ethers.js Tutorial

[Malcolm Miller](malcolm-miller.com)

## Purpose

![](./src/images/ethers.js)

ethers.js has become an essential skill in any web3 developers toolkit. When I was trying to learn it I found there wasn't the kind of easy to follow, beginner friendly tutorials out there to get started. So here's my contribution, a selection of tutorials and guides that aim to cover the most important aspects of ethers.js and allow an intermediate developer to gain enough knowledge to then start experimenting and using the DOCS for further instruction.

## Table Of Contents

- [Resources for the Course](#)
- [Lesson 1: Introduction to ethers.js](#lesson-1-introduction-to-ethersjs)

  - What is ethers.js
  - Setting up your environment

- [Lesson 2: Getting an Account Balance](#Lesson-2:-Getting-An-Account-Balance)

- [Lesson 3: Section title](#Lesson-3:Reading-Smart-Contracts-on-the-Blockchain)

---

# Resources For The Course

- [wsl2 for Windows](https://learn.microsoft.com/en-us/windows/wsl/)
- [node.js](https://nodejs.org/en/)
- [Alchemy](https://www.alchemy.com/)
- [Goerli Faucet](https://goerlifaucet.com/)
- [Etherscan](https://etherscan.io/)

# Lesson 1: Introduction to ethers.js

### What is ethers.js?

---

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

---

Code: [Lesson 4: Sending a Signed Transaction on Goerli Testnet](src/code/sendingTransaction.js)

- Setting up your wallet
- Getting the public addresses of Metamask accounts
- Getting the private key of the senders account to make a transaction
- setting up a new wallet object to make transactions
- getting account balances before transfers
- waiting for the transaction to be validated
- getting account balance after transaction

# Lesson 5: Writing Contracts

---

Code: [Lesson 5: Writing Contracts](src/code/writingContracts.js)

- Creating a new wallet object
- Getting our account public addresses
- ABI for the Chainlink contract
- getting the Chainlink address on Goerli testnet
- creating a new contract object
- getting our account balance using the Chainlink contract function
- connecting our wallet to the contract in order to interact with it
- sending a transaction of LINK tokens

# Lesson 6: Section Title

---

Code: [](link_to_the_Lesson_2_repo)

-
-
-

# Lesson 7: Section Title

---

Code: [](link_to_the_Lesson_2_repo)

-
-
-
