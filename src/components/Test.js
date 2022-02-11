import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";

const Test = () => {

    var account;

    // https://docs.walletconnect.com/quick-start/dapps/web3-provider
    var provider = new WalletConnectProvider({
      rpc: {
        // 1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
        // 137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
        56: "https://bsc-dataseed.binance.org/"
        // ...

      },
      // bridge: 'https://bridge.walletconnect.org',
    });

    var connectWC = async () => {
        try{
            await provider.enable();

      //  Create Web3 instance
      const web3 = new Web3(provider);
      window.w3 = web3

      var accounts  = await web3.eth.getAccounts(); // get all connected accounts
      account = accounts[0]; // get the primary account
        }
      catch(err) {
          if(err.message == "User closed modal") {
              alert('');
              
          }
      }
    }


    var sign = async (msg) => {
        const web3 = new Web3(provider);
      if (web3) {
        return await web3.eth.personal.sign(msg, account)
      } else {
        return false
      }
    }

    var contract = async (abi, address) => {
        const web3 = new Web3(provider);
      if (web3) {
        return new web3.eth.Contract(abi, address)
      } else {
        return false
      }
    }

    var disconnect = async () => {
      // Close provider session
      await provider.disconnect()
    }

    const gallusFeatherNFTAddress = "0x1Ae5F2D1149e0eF80b7C6cAdC27C898CEac1d21A";
    const epicAddress = "0xBE748f53ACfc0410abf42a04D00702c40Fa76FA5";

    var address = "0x1Ae5F2D1149e0eF80b7C6cAdC27C898CEac1d21A"
    var abi = [{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"increment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]

return(
    <button onClick={connectWC}>Test</button>
)
}
export default Test;