import Header from "./Header";
import twitter from "../images/twitter.png";
import medium from "../images/medium.png";
import telegram from "../images/telegram.png";
import discord from "../images/discord.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers }from "ethers";
import GallusFeatherNFT from '../GallusFeatherNFT.json';
import cotcot from '../images/fight_chicken_2.png';
import gallusLogo from '../images/logoGallus.png';


const Community = () => {
    var [NftOwned, SetNftOwned] = useState('')

    const gallusFeatherNFTAddress = "0x08a78270b5dC972F9cFF6619714221a1DA4d8F81";

    async function connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);
        
            // request metamask to access the account

            if ( window.ethereum.selectedAddress !== 'undefined') {

                await window.ethereum.request({ method: "eth_requestAccounts" });
                console.log(window.ethereum.selectedAddress);
                var test = document.getElementById('test') ;
                var walletAdress = window.ethereum.selectedAddress;
                var firstWalletAdress = walletAdress.substring(0, walletAdress.length - 36) + '...';
                var lastWalletAdress = walletAdress.substring(38, walletAdress.length - 0);
                var newWalletAdress = firstWalletAdress + lastWalletAdress;
                test.innerHTML = newWalletAdress; 

                




            const signer = provider.getSigner();
                const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
                const balance = await contract.balanceOf(walletAdress);
                console.log(balance.toString())

                let myNft = document.getElementById('my-nft');

                var nftOwned = document.createElement("NavLink");
                nftOwned.classList.add('nft-owned');
                myNft.appendChild(nftOwned);
                SetNftOwned('My NFT : ' + balance);
                

                for (let i=0;i<balance;i++) {
                    const nftId = await contract.tokenOfOwnerByIndex(walletAdress, i);
                    console.log(nftId.toString())
                    const uri = await contract.tokenURI(nftId);
                    console.log(uri)
                }

            }
        }
    }
    
    
    return (
        <div className="pool community-main">
        <Header />
        <div className="wallet-nav">
        <div className="logo-nav">
            <a href="" className="logoJOJO"></a>
                <div className="pool1">
                    Community 
                </div>
            </div>
            <div className="right-nav">
                    <div className="right-item" id="my-nft">
                        <NavLink exact to="/my-nft" className="nft-owned ">{NftOwned}</NavLink>
                        <a href="#" id="test" className="wallet pool1" onClick={connectMetaMask}>Connect Wallet</a>
                    </div>

                </div>
        </div>
        <div className="normal-layout">
            <div className="container container-nft">
                <img src={gallusLogo} className="gallus-logo" />
                {/* <h1 className="community-title">Official Channel</h1> */}
                <p className="community-description">Stay tuned for further news !</p>
                {/* <img src={cotcot} alt="gallus cot" className="cotcot" /> */}
                <div className="centerRow">
                <div className="row flex-socialMedia">
                
                    <div className="col-lg-7 flex-container community-container">
                        
                        <div className="community-box">
                            <div className="left-socialMedia">
                                    <img src={twitter} alt="twitter logo" className="logo-socialMedia" />
                                    <p className="name-socialMedia">Twitter</p>
                            </div>
                            <div className="right-socialMedia">
                                    
                                    <a href="https://twitter.com/GallusFighter" className="text-socialMedia">https://twitter.com/GallusFighter</a>
                                    
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7 flex-container community-container">
                        <div className="community-box">
                            <div className="left-socialMedia">
                                    <img src={medium} alt="twitter logo" className="logo-socialMedia" />
                                    <p className="name-socialMedia">Medium</p>
                            </div>
                            <div className="right-socialMedia">
                                    
                            <a href="https://twitter.com/GallusFighter" className="text-socialMedia">https://medium.com/@gallusfighter</a>
                                   
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7 flex-container community-container">
                        <div className="community-box">
                            <div className="left-socialMedia">
                                    <img src={telegram} alt="twitter logo" className="logo-socialMedia" />
                                    <p className="name-socialMedia">Telegram</p>
                            </div>
                            <div className="right-socialMedia">
                                    
                            <a href="https://t.me/joinchat/s_7y43-0rX8zM2M8" className="text-socialMedia">https://t.me/joinchat/s_7y43-0rX8zM2M8</a>
                                   
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-7 flex-container community-container">
                        <div className="community-box">
                            <div className="left-socialMedia">
                                    <img src={discord} alt="twitter logo" className="logo-socialMedia" />
                                    <p className="name-socialMedia">Discord</p>
                            </div>
                            <div className="right-socialMedia">
                                    
                            <a href="https://discord.gg/ek4wyKJ5" className="text-socialMedia">https://discord.gg/ek4wyKJ5</a>
                                    
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                </div>
                
                
                
            </div>
            
                
            </div>
        
        </div>
    )
}

export default Community;