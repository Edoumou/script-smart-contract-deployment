//import Web3 from "web3";
const { json } = require('stream/consumers');
const Web3 = require('web3');
const Test = require("./abi/Test.json");
const web3 = new Web3('http://localhost:7545');

getWeb3 = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    // get the contract abi and bytecode
    let abi = Test.contracts['contracts/Test.sol:Test'].abi;
    //let bytecode = web3.utils.toHex(Test.contracts['contracts/Test.sol:Test'].bin);
    let bytecode = Test.contracts['contracts/Test.sol:Test'].bin;

    // create a instance of the contract
    let contract = await new web3.eth.Contract(abi);

    // deploy the contract
    let contractAddress = null;

    let gasPrice = await web3.eth.getGasPrice();

    console.log('===========================================================================');
    await contract.deploy(
        {
            data: '0x0' + bytecode,
            arguments: [12, 'Ana']
        }
    ).send({
        from: account,
        gas: web3.utils.toHex(1500000),
        gasPrice: web3.utils.toHex(gasPrice)
    })
    .on('error', err => console.error(err))
    .on('transactionHash', hash => {
        console.log("contract successfully deployed ✅🥰✅");
        console.log("")
        console.log('Tx Hash:', hash)
    })
    .on('receipt', receipt => {
        contractAddress = receipt.contractAddress;
    });

    console.log('contract address:', contractAddress);
    console.log('===========================================================================');
}

getWeb3();


