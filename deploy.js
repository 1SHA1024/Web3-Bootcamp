const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');

require('dotenv').config();

const provider = new HDWalletProvider(
    process.env.MNEMONIC, process.env.INFURAPI   // create provider from Rinkeby
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();  // get account address list 
    console.log('Attempting to deploy from account', accounts[0]);  // show deploy account address
    
    const result = await new web3.eth.Contract(JSON.parse(interface))      // send transaction with variable string to Rinkeby
        .deploy({ data: bytecode, arguments: ['Hi there!'] })
        .send({ gas: '1000000', from: accounts[0] });
  
    console.log('Contract deployed to', result.options.address);      // show deploy contract address
    provider.engine.stop();  // stop await from Rinkeby 
};

deploy();   // run node deploy.js
