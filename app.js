import * as dotenv from 'dotenv'
dotenv.config()
const {INFURA_NODE} = process.env

import Web3 from 'web3'
const rpcUrl = INFURA_NODE
const web3 = new Web3(rpcUrl)

// sends ether from one account to another one
function sendTransactionDemo(){
    // using ganache
    const rpcUrl = "http://127.0.0.1:7545"
    const web3 = new Web3(rpcUrl)

    const account1 = "0xD694B4167FA3bfEA554c940915dbDD35A23dB11f"
    const account2= "0x70b9D1E49d68390E8BC617335C527B7eC96228e2"

    web3.eth.sendTransaction({ 
        from:account1,
        to:account2, 
        value:web3.utils.toWei("1",'ether') 
    },(err,result)=>{
        console.log("result ",result)
    })
}

async function getBalanceFromWallet(){
    const address = "0xe8AE3F2bFED29d02FE10D453C7098A73b9a2747C"
    const currentBalance = await web3.eth.getBalance(address)
    const responseFormated = web3.utils.fromWei(currentBalance,'ether')
    console.log("responseFormated ? ",responseFormated)
}

await getBalanceFromWallet()
sendTransactionDemo()