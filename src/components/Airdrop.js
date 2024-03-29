import Header from "./Header";
import twitter from "../images/twitter.png";
import medium from "../images/medium.png";
import telegram from "../images/telegram.png";
import discord from "../images/discord.png";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import GallusFeatherNFT from '../GallusFeatherNFT.json';
import cotcot from '../images/fight_chicken_2.png';
import gallusLogo from '../images/logoGallus.png';
import hamburger from "../images/hamburger.jpg";
import airdrop from "../images/airdrop.png";
import icon_2 from "../images/Asset_2.png";

const Airdrop = () => {
    var [NftOwned, SetNftOwned] = useState('')

    const gallusFeatherNFTAddress = "0x08a78270b5dC972F9cFF6619714221a1DA4d8F81";

    async function connectMetaMask() {
        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);

             // IF NETWORK DIFFERENT OF 

             let network = await  ethers.provider.getNetwork()
             console.log(network.name)
             if (network.name === 'rinkeby' ) {
             }
        
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

                


                // RECUP CONTRACT.PRIX

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
                            <NavLink exact to="/gallus-story" activeClassName="nav-active" className="display">
                            <i class="fas fa-book-open yellow-icon" ></i>Gallus Story
                            <span className="tag">HOT</span>
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/" activeClassName="nav-active" className="display">
                            <i class="fas fa-box-open yellow-icon"></i>Pre Sale
                            <span className="tag">HOT</span>
                            </NavLink>
                        </li>
                        <li class="menut-item ">
                                <NavLink exact to="/nft-market" activeClassName="nav-active " className="display ">
                                <i class="fas fa-home yellow-icon"></i>Website
                                <span className="tag">NEW</span>
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
                            <NavLink exact to="/refine" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-lightbulb yellow-icon"></i>Governance
                            </NavLink>
                        </li>
                        
                        <li class="menut-item">
                            <NavLink exact to="/bounty" activeClassName="nav-active" className="display disabled">
                            <i class="fas fa-medal yellow-icon"></i>Bounty
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/airdrop" activeClassName="nav-active" className="display">
                            <i class="fas fa-gifts yellow-icon"></i>Airdrop
                            </NavLink>
                        </li>
                        <li class="menut-item">
                                <NavLink exact to="/community" activeClassName="nav-active" className="display">
                                <i class="fas fa-envelope-open yellow-icon"></i>Community
                                </NavLink>
                        </li>
                        <li class="menut-item">
                                {/* <NavLink exact to="/my-nft" activeClassName="nav-active" className="display left-docs"> */}
                                <a href="https://galluspaper.gallusfighter.com/" target="_blank" class="display left-docs">
                                {/* <i class="fas fa-coins yellow-icon"></i>Buy GALLUS */}
                                <i class="fas fa-file-alt yellow-icon"></i>Gallus Paper
                                </a>
                                {/* </NavLink> */}
                        </li>
                        
                        
                        
                        


                    </ul>
                </div>
            </div> 
        <div className="community-main airdrop-container">
        
        <div className="wallet-nav displayNone">
            
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
                
                {/* <h1 className="community-title">Official Channel</h1> */}
                <h1 className="airdrop-description">Welcome to Gallus  Airdrop !</h1>
                {/* <img src={cotcot} alt="gallus cot" className="cotcot" /> */}
                <div className="box-airdrop-right">
                        <h2 className="airdrop-main-title">On Going Event</h2>
                    </div>
                <div className="flexairdrop">

                    <div className="box-airdrop">
                        <h3 className="airdrop-title">Gallus Fighter Airdrop</h3>
                        <div className="airdrop-item">
                            
                            <span className="airdrop-left">Total NFT value</span>
                            <span className="airdrop-right">$50.000</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Maximum</span>
                            <span className="airdrop-right">TBA</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Max Participants</span>
                            <span className="airdrop-right">TBA</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Status</span>
                            <span className="airdrop-right">Coming soon</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Access</span>
                            <span className="airdrop-right">Community</span>
                        </div>
                        
                            {/* <a className="btn-airdrop">DETAILS</a> */}
                            <div className="container-btn-airdrop">
                                    <a  className="btn-border-color-small"  >
                                    <img src={icon_2} className="icon-btn" />Airdrop</a></div>
                        
                    </div>
                    
            
                </div>  
            </div>
          
                
                {/* <h1 className="community-title">Official Channel</h1> */}
                {/* <img src={cotcot} alt="gallus cot" className="cotcot" /> */}
                <div className="box-airdrop-right">
                        <h2 className="airdrop-main-title">Event Coming Soon..</h2>
                    </div>
                <div className="flexairdrop comingsoon-airdrop">

                    <div className="box-airdrop">
                        <h3 className="airdrop-title">Gallus Fighter Token Airdrop</h3>
                        <div className="airdrop-item">
                            
                            <span className="airdrop-left">Total NFT value</span>
                            <span className="airdrop-right">$50.000</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Maximum</span>
                            <span className="airdrop-right">TBA</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Max Participants</span>
                            <span className="airdrop-right">TBA</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Status</span>
                            <span className="airdrop-right">Coming soon</span>
                        </div>
                        <div className="airdrop-item">
                            <span className="airdrop-left">Access</span>
                            <span className="airdrop-right">Community</span>
                        </div>
                        
                            {/* <a className="btn-airdrop">DETAILS</a> */}
                            <div className="container-btn-airdrop">
                                    <a  className="btn-border-color-small"  >
                                    <img src={icon_2} className="icon-btn" />Airdrop</a></div>
                        
                    </div>
                    
            
                </div>  
          
        </div>
    </div>
</>
    )
}

export default Airdrop;