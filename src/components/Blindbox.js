import Header from "./Header";
import egg from "../eggIncub.jpg";
import { NavLink } from "react-router-dom";
import nftBox from "../images/nft-box.gif";
import NftDescription from "./NftDescription";
import { ethers }from "ethers";
import GallusFeatherNFT from '../GallusFeatherNFT.json';
import { useEffect, useState } from "react";
import hamburger from "../images/hamburger.jpg";
import bsc from "../images/bsc.png";
import prenium from "../images/normal.gif";
import standard from "../images/petit.gif";
import collector from "../images/prenium.gif";
import gallusLogo from '../images/logoGallus.png';
import gallus from "../gallus.png";
import litleFeather from "../images/petitePlume.gif";
import mediumFeather from "../images/moyennePlume.gif";
import bigFeather from "../images/GrandePlume.gif";
import exemple1 from "../images/exemple1.gif";
import exemple2 from "../images/exemple2.gif";
import exemple3 from "../images/exemple3.gif";

const BlindBox = () => {
    // useEffect(() => {
    //     purshase
    // },[])
    // for metamask (the plugin add "ethereum" to the window object)

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
    
    async function purshase() {
        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);
        
        // request metamask to access the account

            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log(window.ethereum.selectedAddress);

            
            const signer = provider.getSigner();
            const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
            const price = await contract.getPrice();
            console.log(price.toString())
            try {
                const transaction = await contract.purchase({value: price});
                await transaction.wait();
            }
            catch(error){
                alert(error.message)
               
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
        <div className="test hamburgertest " id="hamburger">
                
                    <div class="vertical-header vertical-nft-header">
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
                                <i class="fas fa-box-open yellow-icon"></i>Mystery box
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
        <div className="pool background-section">
            
        
        <div className="wallet-nav">
            <div className="button-aside-nav" >
                <img src={gallusLogo} className="gallus-title-logo" />
                <a className="hamburger-nav-app" id="hhh" onClick={AfficherMasquer}>
                    <i className="fas fa-bars hamburger-img"></i>
                </a>
            </div>
            <div className="logo-nav-wallet">
                <a href="" className="logoJOJO"></a>
                    <div className="pool1" >
                        Exclusive Pre-Sale Launch 
                    </div>
                </div>
                <div className="right-nav">
                    <div className="right-item" id="my-nft">
                        <NavLink exact to="/my-nft" className="nft-owned ">{NftOwned}</NavLink>
                        <a href="#" id="test" className="wallet pool1" onClick={connectMetaMask}>Connect Wallet</a>
                    </div>

                </div>
            </div>
        
        
            <div className="normal-layout padding-nft">
                <div className="container">
                    <h1 className="title-nft-main">The <span className="royalFeather">ROYAL FEATHER</span>  NFT Collection BY</h1>
                    <img src={gallus} className="logoGallus-nft" />
                   
                    <p className="family-nft">Each NFT Feather is a unique piece of art, enter the Mystery Box sale and receive one of the 500 small, medium or big NFT with golden or silver attributes and wrapped in one of the 6 beautifully designed boxes.</p>
                   <div className=" button-nft-main"> <NavLink exact to="/gallus-story" className="background-button"> Discover the<br /> Gallus story</NavLink></div>
                    <div className="row rowDisplay">
                        <div className="col-lg-4 centerFlex">
                            {/* <div className="container-nftImage">
                                <img src={standard} className="main-nft-imageLeft" />
                            </div> */}
                            <div className="image-container ">
                            <div className="neon-nft"></div>
                                <img src={exemple3} alt="" className="image-nft-box" />
                            </div>
                            
                        </div> 
                        <div className="col-lg-4 centerFlex">
                            {/* <div className="container-nftImage">
                                <img src={prenium} className="main-nft-imageLeft" />
                            </div> */}
                            <div className="image-container ">
                            <div className="neon-nft"></div>
                                <img src={exemple1} alt="" className="image-nft-box" />
                            </div>
                        </div> 
                        <div className="col-lg-4 centerFlex">
                            {/* <div className="container-nftImage">
                                <img src={collector} className="main-nft-imageLeft" />
                            </div> */}
                            <div className="image-container ">
                            <div className="neon-nft"></div>
                                <img src={exemple2} alt="" className="image-nft-box" />
                            </div>
                        </div> 
                        
                    </div>
                </div>
            </div>
            </div>
            <div className="pool background-section-2">
            
            <div className="normal-layout">
            <h2 className="secondTitle-nft-main">Welcome to the very first collection of rare NFT Feathers <br /><span className="royalFeather">to introduce the latest evolution in the GameFi universe : </span><br />the DEFIGHT Metaverse</h2>
               <p className="family-nft family-margin">Each NFT Feather is a unique piece of art, enter the Mystery Box sale and receive one of the 500 small, medium or big NFT with golden or silver with rarity attributes, also featured on the different Stickers and wrapped in one of the 6 beautifully designed boxes</p>
               <div className="container container-nft">
               
                    <div className="row ">
                        <div className="col-lg-6 flex-container">
                            <div className="image-container ">
                            <div className="neon-nft"></div>
                                <img src={litleFeather} alt="" className="image-nft-box" />
                            </div>
                        </div>
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">sickle feather - <span className="title-nft-secondColor"><br />small </span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">This fine feather will allow you to get a Premium reward in our universe of Play2Earn and in this way increase your capital in $GALLUS token.
Take advantage of this unique benefit with the DeFi 
                                </p>   
                                <div className="bsc">
                                    <p className="bsc-price-text">Prenium Reward : </p>
                                    <img src={gallus} className="bsc-price" />
                                    <p className="bsc-price-chiffre">$GALLUS Tokens</p>
                                </div> 
                                <div className="bsc">
                                    <p className="bsc-price-text">Quantity : </p>
                                   
                                    <p className="bsc-price-chiffre">330</p>
                                </div>     
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">0,63</p>
                                </div>
                                
                                <div className="center-button">
                                    <a href="#" className="button-nft disabled" onClick={purshase}>BUY</a>
                                    <div className="prenium-box-nft">
                                        Small Edition *
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row play2earn-margin reverseRow">
                        
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">lancet feather - <span className="title-nft-secondColor"><br />Medium</span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">All holders of this great feather will earn a high reward in $GALLUS Token and this will give you a considerable advantage to enter the GameFi.
Take advantage of this unique benefit with the DeFi.
</p>
<div className="bsc">
                                    <p className="bsc-price-text">High Reward : </p>
                                    <img src={gallus} className="bsc-price" />
                                    <p className="bsc-price-chiffre">$GALLUS Tokens</p>
                                </div> 
                                <div className="bsc">
                                    <p className="bsc-price-text">Quantity : </p>
                                   
                                    <p className="bsc-price-chiffre">150</p>
                                </div> 
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">1,42</p>
                                </div>
                                
                                <div className="center-button">
                                    <a href="#" className="button-nft disabled">BUY</a>
                                    <div className="prenium-box-nft">
                                        Medium Edition *
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-6 flex-container">
                            <div className="image-container">
                                <div className="neon-nft"></div>
                                <img src={mediumFeather} alt="" className="image-nft-box" />
                            </div>
                        </div>
                    </div>
                    <div className="row play2earn-margin">
                        <div className="col-lg-6 flex-container">
                            <div className="image-container ">
                                <div className="neon-nft"></div>
                                <img src={bigFeather} alt="" className="image-nft-box" />
                            </div>
                        </div>
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">sickle feather - <span className="title-nft-secondColor"><br />TITAN</span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">Only the best of the GALLUS Army can hope to open one of the rarest boxes containing a mysterious golden feathers. You only got one chance to join a private live Discord group with the Full Gallus Team.
                                    Take advantage of this unique benefit with the DeFi.
                                </p>
                                <div className="bsc">
                                    <p className="bsc-price-text">Crazy Reward : </p>
                                    <img src={gallus} className="bsc-price" />
                                    <p className="bsc-price-chiffre">$GALLUS Tokens</p>
                                </div> 
                                
                                <div className="bsc">
                                    <p className="bsc-price-text">Quantity : </p>
                                   
                                    <p className="bsc-price-chiffre">20</p>
                                </div> 
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">3,16</p>
                                </div>
                                <div className="center-button">
                                    <a href="#" className="button-nft disabled">BUY</a>
                                    <div className="prenium-box-nft">
                                        Titan Edition *
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

export default BlindBox;