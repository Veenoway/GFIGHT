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
                console.log(error)
            }
       }
    }

    function AfficherMasquer()
                    {
                    var divInfo = document.getElementsById('popup');
                     
                    if (divInfo.style.display == 'none')
                    divInfo.style.display = 'block';
                    else
                    divInfo.style.display = 'none';
                     
                    }
    

    return (
        <>
        {/* <div className="test hamburgertest" id="hamburger">
                
                    <div class="vertical-header">
                        <div class="image-top">
                            <NavLink exact to="/" className="logo-top">ROFI</NavLink>
                        </div>
                        <ul class="ul">
                            <li class="menut-item">
                                <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x78a499a998bdd5a84cf8b5abe49100d82de12f1c" class="display">
                                    <i class="icon0 icon"></i>Buy GALLUS
                                </a>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/blindbox" activeClassName="nav-active" className="display">
                                    <i class="icon5 icon"></i>Mystery box
                                    <span className="tag">NEW</span>
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/community" activeClassName="nav-active" className="display">
                                    <i class="icon13 icon"></i>Community
                                </NavLink>
                            </li>
                            <li class="menut-item ">
                                <NavLink exact to="/nft-market" activeClassName="nav-active " className="display disabled">
                                    <i class="icon3 icon"></i>NFT Market
                                    <span className="tagSoon ">Soon..</span>
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/pool" activeClassName="nav-active" className="display disabled">
                                    <i class="icon1 icon"></i>
                                    
                                    Pool
                                </NavLink>
                                
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/farms" activeClassName="nav-active" className="display disabled">
                                
                                        <i class="icon2 icon"></i>Farms
                                        {/* <span className="tag">HOT</span> */}
                                        
                                {/* </NavLink>
                            </li>
                            
                            <li class="menut-item">
                                <NavLink exact to="/gamebase" activeClassName="nav-active" className="display disabled">
                                    <i class="icon4 icon"></i>Gamebase
                                </NavLink>
                            </li>
                            
                            <li class="menut-item">
                                <NavLink exact to="/refine" activeClassName="nav-active" className="display disabled">
                                    <i class="icon6 icon"></i>Refine
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/breed" activeClassName="nav-active" className="display disabled">
                                    <i class="icon7 icon"></i>Breed
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/cast" activeClassName="nav-active" className="display disabled">
                                    <i class="icon8 icon"></i>Cast
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/knight" activeClassName="nav-active" className="display disabled">
                                    <i class="icon9 icon"></i>Knight
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/bounty" activeClassName="nav-active" className="display disabled">
                                    <i class="icon10 icon"></i>Bounty
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/airdrop" activeClassName="nav-active" className="display disabled">
                                    <i class="icon11 icon"></i>Airdrop
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/evolve" activeClassName="nav-active" className="display disabled">
                                    <i class="icon12 icon"></i>Evolve
                                    
                                </NavLink>
                            </li>
                            
                            <li class="menut-item">
                                <NavLink exact to="/help-center" activeClassName="nav-active" className="display disabled">
                                    <i class="icon14 icon"></i>Help Center
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/app-download" activeClassName="nav-active" className="display disabled">
                                    <i class="icon15 icon"></i>App Download
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div> */} 
        <div className="pool">
            <Header />
        
        <div className="wallet-nav">
            <div className="button-aside-nav" >
                <a href="" className="hamburger-nav-app" id="hhh" oncClick={AfficherMasquer}>
                    <img src={hamburger} className="hamburger-img" />
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
            <div className="normal-layout">
                <div className="container container-nft">
                <div className="nft-title-main">
                        <h1 className="title-nft-main"> Exclusive GALLUSFIGHTER <br /><span className="color-nft">NFT Collection</span></h1>
                        <p className="text-nft-main">The first first blood in the GameFi coming soon and his name is... Gallus Fighter ! This Exclusive NFT's Collection is only available on Opensea and it's the announcement of the opening of your future platform GALLUSFIGHTER.com.<br />
                            The feathers are classified by rarity; the rarer your feather is, the more it gives you a Collector's Reward!
                            Stay tuned and enter the arena for NFT's fights.
                        </p>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 flex-container">
                            <div className="image-container ">
                            <div className="neon-nft"></div>
                                <img src={standard} alt="" className="image-nft-box" />
                            </div>
                        </div>
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">small sickle feather - <span className="title-nft-secondColor"> Bronze</span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">lorem fhsbhneiuofhoi hnesh oighfosieh gfohgsih si ghopsegjh iogjesijg iojsegio joigse</p>
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">0,63</p>
                                </div>
                                <div className="center-button">
                                    <a href="#" className="button-nft" onClick={purshase}>BUY</a>
                                    <div className="prenium-box-nft">
                                        Standard Edition *
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row play2earn-margin reverseRow">
                        
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">lancet feather - <span className="title-nft-secondColor">Silver</span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">lorem fhsbhneiuofhoi hnesh oighfosieh gfohgsih si ghopsegjh iogjesijg iojsegio joigse</p>
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">1,42</p>
                                </div>
                                <div className="center-button">
                                    <a href="#" className="button-nft">BUY</a>
                                    <div className="prenium-box-nft">
                                        Prenium Edition *
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-6 flex-container">
                            <div className="image-container">
                                <div className="neon-nft"></div>
                                <img src={prenium} alt="" className="image-nft-box" />
                            </div>
                        </div>
                    </div>
                    <div className="row play2earn-margin">
                        <div className="col-lg-6 flex-container">
                            <div className="image-container ">
                                <div className="neon-nft"></div>
                                <img src={collector} alt="" className="image-nft-box" />
                            </div>
                        </div>
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">big sickle feather - <span className="title-nft-secondColor">TITAN</span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">lorem fhsbhneiuofhoi hnesh oighfosieh gfohgsih si ghopsegjh iogjesijg iojsegio joigse</p>
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">3,16</p>
                                </div>
                                <div className="center-button">
                                    <a href="#" className="button-nft">BUY</a>
                                    <div className="prenium-box-nft">
                                        Collector Edition *
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