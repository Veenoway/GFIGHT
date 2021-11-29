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
import hamburger from "../images/hamburger.jpg";


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
    function AfficherMasquer()
                    {
                    var divInfo = document.getElementById('hamburger');
                     
                    if (divInfo.style.display == 'none')
                    divInfo.style.display = 'block';
                    else
                    divInfo.style.display = 'none';
                     
                    }
    
    
    return (
        <>
         <div className="test hamburgertest" id="hamburger">
                
                <div class="vertical-header">
                <a className="hamburger-header" id="hhh" onClick={AfficherMasquer}>
                    <i className="fas fa-bars hamburger-img"></i>
                </a>
                <div class="image-top">
                        <NavLink exact to="/" className="logo-top">GALLUS</NavLink>
                    </div>
                    <ul class="ul">
                        <li class="menut-item">
                            {/* <NavLink exact to="/my-nft" activeClassName="nav-active" className="display left-docs"> */}
                            <a href="https://roosterfi.gitbook.io/gamecock-a-defight-metaverse/" class="display left-docs">
                            {/* <i class="fas fa-coins yellow-icon"></i>Buy GALLUS */}
                            <i class="fas fa-file-alt yellow-icon"></i>Docs
                            </a>
                            {/* </NavLink> */}
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/" activeClassName="nav-active" className="display">
                            <i class="fas fa-box-open yellow-icon"></i>Mystery box
                                <span className="tag">NEW</span>
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/gallus-story" activeClassName="nav-active" className="display">
                            <i class="fas fa-book-open yellow-icon" ></i>Gallus Story
                            <span className="tag">HOT</span>
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/community" activeClassName="nav-active" className="display">
                            <i class="fas fa-envelope-open yellow-icon"></i>Community
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/my-nft" activeClassName="nav-active" className="display disabled">
                           
                            <i class="fas fa-coins yellow-icon"></i>Buy GALLUS
                            <span className="tagSoon ">Soon..</span>
                            
                            
                            </NavLink>
                        </li>
                        <li class="menut-item ">
                            <NavLink exact to="/nft-market" activeClassName="nav-active " className="display disabled">
                            <i class="fas fa-shopping-cart yellow-icon"></i>NFT Market
                                <span className="tagSoon ">Soon..</span>
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/comingsoon" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-feather-alt yellow-icon"></i>
                                
                                Defight
                            </NavLink>
                            
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/comingsoon" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-layer-group yellow-icon"></i>
                                
                                Pool
                            </NavLink>
                            
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/comingsoon" activeClassName="nav-active" className="display disabled">
                            
                            <i class="fas fa-tractor yellow-icon"></i>Farms
                                    
                                    
                            </NavLink>
                        </li>
                        
                        <li class="menut-item">
                            <NavLink exact to="/gamebase" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-gamepad yellow-icon"></i>Gamebase
                            </NavLink>
                        </li>
                        
                        <li class="menut-item">
                            <NavLink exact to="/refine" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-lightbulb yellow-icon"></i>GOUVERNANCE
                            </NavLink>
                        </li>
                        
                        <li class="menut-item">
                            <NavLink exact to="/bounty" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-medal yellow-icon"></i>Bounty
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/airdrop" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-gifts yellow-icon"></i>Airdrop
                            </NavLink>
                        </li>
                        
                        
                        <li class="menut-item">
                            <NavLink exact to="/help-center" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-comments yellow-icon"></i>Help Center
                            </NavLink>
                        </li>
                        


                    </ul>
                </div>
            </div> 
        <div className="pool community-main">
        
        <div className="wallet-nav">
            
        <div className="button-aside-nav" >
                <img src={gallusLogo} className="gallus-title-logo" />
                <a className="hamburger-nav-app" id="hhh" onClick={AfficherMasquer}>
                    <i className="fas fa-bars hamburger-img"></i>
                </a>
            </div>
        <div className="logo-nav-wallet">
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
        </>
    )
}

export default Community;