import Header from "./Header";
import nftBox from "../images/nft-box.gif";
import NftDescription from "./NftDescription";
import { ethers }from "ethers";
import GallusFeatherNFT from '../GallusFeatherNFT.json';
import { useEffect, useState } from "react";
import NftBoxss from './../images/bg-nft.jpg';
import axios from "axios";

const MyNft = () => {


    var [NftOwned, SetNftOwned] = useState('')
    var [Http, setHttp] = useState('')

   


        var [data, setData] = useState([])
    
        useEffect(() => {
    
            
    
            
    
        }, [])

        console.log(data)
        

       
    
        // async function test() {
        //     try{
        //       let response = await axios({
        //           method: 'get',
        //           url: http,
        //           json: true
        //       });
        //       return response;
        //     } catch(err){
        //         console.error(err);
        //     }
        // }

        
   

    

    // async function createBoxs(){

    //             const provider = new ethers.providers.Web3Provider(window.ethereum);
    //             const signer = provider.getSigner();
    //             const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
    //             var tests = window.ethereum.selectedAddress;
    //             const balance = await contract.balanceOf(tests);
    //             console.log(balance.toString())

    //             for (let i=0;i<balance;i++) {

    //                 let myNft = document .getElementById('main');
    //                 myNft.innerHTML = nftBoxCreated
                    
    //             }

                
    // }

   
    async function requestAccount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
      }
    

  

    const gallusFeatherNFTAddress = "0x08a78270b5dC972F9cFF6619714221a1DA4d8F81";

    async function connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);
        
            // request metamask to access the account

            if ( window.ethereum.selectedAddress !== 'undefined') {

                requestAccount()
                console.log(window.ethereum.selectedAddress);
                var test = document.getElementById('test') ;
                var walletAdress = window.ethereum.selectedAddress;


                // Slice wallet adress and Show it
                
                var firstWalletAdress = walletAdress.substring(0, walletAdress.length - 36) + '...';
                var lastWalletAdress = walletAdress.substring(38, walletAdress.length - 0);
                var newWalletAdress = firstWalletAdress + lastWalletAdress;
                test.innerHTML = newWalletAdress; 

                const signer = provider.getSigner();
                const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
                const balance = await contract.balanceOf(walletAdress);
                console.log(balance.toString())

                
                let myNft = document.getElementById('main');
                var nftOwned = document.createElement("NavLink");
                nftOwned.classList.add('nft-owned');
                document.getElementById('main').appendChild(nftOwned);
                SetNftOwned('My NFT : ' + balance);
                

                for (let i=0;i<balance;i++) {
                    const nftId = await contract.tokenOfOwnerByIndex(walletAdress, i);
                    console.log(nftId.toString())
                    const uri = await contract.tokenURI(nftId);
                    console.log(uri)

                    // changing url

                    var deleteFirstChar = uri.substring(6, uri.length - 0);
                    var url = 'https://gateway.pinata.cloud/ipfs' + deleteFirstChar 
                    console.log(url)
                    
                    
                    console.log(Http)
                    setHttp(url)
                    // Get url to data
                    console.log(data)

                    await axios
                    .get(url)
                    .then((res) => 
                    data = res.data) 
                    console.log(data)
                    
                    var deleteImageChar = data.image.substring(6, data.image.length - 0)
                    var imageUrl = 'https://gateway.pinata.cloud/ipfs' + deleteImageChar

                    let myNft = document.getElementById('main');
                    
                   
            
                    var nftBoxCreated = `<div class="row margin-row">
                    <div class="col-lg-6 flex-container">
                        
                        <div class="image-container ">
                            <div class="neon-nft"></div>
                            <img src=${imageUrl} alt="" class="image-nft-box" />
                        </div>
                    </div>
                    <div class="col-lg-6 flexBox-nft">
              
                        <div class="detail-container">
                            <h1 class="title-Nft-desc">${data.name}<span className="title-nft-secondColor"></span></h1>
                            <div class="liseret-nft"></div>
                            <p class="text-description-nft">${data.description}</p>
                            <div class="center-button">
                                
                                
              
                            </div>
                            
                        </div>
                    </div>
                </div>`
                    myNft.innerHTML += nftBoxCreated
            
            
                }
                
                

            }
            
        }
      

    }
    return (
        <div className="pool">
        <Header />
        <div className="wallet-nav">
        <div className="logo-nav">
            <a href="" className="logoJOJO"></a>
                <div className="pool1">
                    Your Nft
                </div>
            </div>
            <div className="right-nav">
                <div className="right-item">
                    <a href="#my-nft" className="nft-owned ">{NftOwned}</a>
                    <a href="#my-nft" id="test" className="wallet pool1" onClick={connectMetaMask}>Connect Wallet</a>
                </div>

            </div>
        </div>
        <div className="normal-layout" >
            <div className="container " id="main">
              
            </div>
            
                
            </div>
        
        </div>
    )
}

export default MyNft;