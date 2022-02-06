import Header from "./Header";
import twitter from "../images/twitter.png";
import medium from "../images/medium.png";
import telegram from "../images/telegram.png";
import discord from "../images/discord.png";
import page1 from "../images/webton_anglais_001.jpg";
import page2 from "../images/webton_anglais_002.jpg";
import page3 from "../images/webton_anglais_003.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ethers }from "ethers";
import GallusFeatherNFT from '../GallusFeatherNFT.json';
import gallusLogo from '../images/logoGallus.png';



const GallusStory = () => {

    var [NftOwned, SetNftOwned] = useState('')

   

    var [nftOwned, setNftOwned] = useState([]);
    var [epicNftOwned, setEpicNftOwned] = useState([])

    var [smallFeather, setSmallFeather] = useState('')
    var [mediumFeather, setMediumFeather] = useState('')
    var [largeFeather, setLargeFeather] = useState('')

    const [loadingState, setLoadingState] = useState('not-loaded');

    const gallusFeatherNFTAddress = "0x1Ae5F2D1149e0eF80b7C6cAdC27C898CEac1d21A";
    const epicAddress = "0xBE748f53ACfc0410abf42a04D00702c40Fa76FA5";

    useEffect(() => {
        loadNfts();
        
    }, []);

    async function loadNfts() {

        if (typeof window.ethereum !== 'undefined') {

           

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const featherContract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
            console.log(window.ethereum.selectedAddress)
                
            setLoadingState('loaded');
            featherQuantity();
            nftOwnedInWallet();

            // IF NETWORK ISNT BNB 

            let network = await  provider.getNetwork()

            if (network.name !== 'bnb') {

                var maint = document.getElementById('contain')
                var containert = document.createElement('div');
                containert.classList.add('container-popup-network');
                maint.appendChild(containert);
                
    
                var popupBox = document.createElement('div');
                containert.appendChild(popupBox);
                popupBox.classList.add('popup-box')
    
    
                var title = document.createElement('h3')
                popupBox.appendChild(title);
                title.innerHTML = 'Wrong Network'
                title.classList.add('title-popup-network')
    
    
                var text = document.createElement('p');
                popupBox.appendChild(text);
                text.innerHTML = 'Sorry, You are not on the right network... Please verify that you are on the Binance Smart Chain network and try again.'
                text.classList.add('text-popup-network')
    
    
                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'
    
                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                })
    
    
            }
        }
    }

    async function connectWallet() {


    try{

        await window.ethereum.request({ method: "eth_requestAccounts" });
        window.location.reload();

    }  catch(err) {
         
        var maint = document.getElementById('contain')
        var containert = document.createElement('div');
        containert.classList.add('container-popup-network');
        maint.appendChild(containert);

        var popupBox = document.createElement('div');
        containert.appendChild(popupBox);
        popupBox.classList.add('popup-box')

        var title = document.createElement('h3')
        popupBox.appendChild(title);
        title.innerHTML = 'Connect Wallet'
        title.classList.add('title-popup-network')

        var text = document.createElement('a');
        popupBox.appendChild(text);
        text.innerHTML = 'Please connect your Trust Wallet'
        text.classList.add('text-popup-network');
        text.href="https://link.trustwallet.com/wc?uri=wc%3Aca1fccc0-f4d1-46c2-90b7-c07fce1c0cae%401%3Fbridge%3Dhttps%253A%252F%252Fbridge.walletconnect.org%26key%3Da413d90751839c7628873557c718fd73fcedc5e8e8c07cfecaefc0d3a178b1d8";

        var button = document.createElement('button');
        popupBox.appendChild(button);
        button.classList.add('btn-popup-network')
        button.innerHTML = 'OK'

        button.addEventListener('click', function (e) {
            containert.style.display = 'none'
        })
           
    }
        

    }


    async function featherQuantity() {

        // FETCH QUANTITY OF EACH FEATHER

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const featherContract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);

        var smallFeather = await featherContract.remainingSmall();
        var mediumFeather = await featherContract.remainingMedium();
        var largeFeather = await featherContract.remainingLarge();

        setSmallFeather(smallFeather.toString());
        setMediumFeather(mediumFeather.toString());
        setLargeFeather(largeFeather.toString());

        console.log(smallFeather.toString())
        
    }

    async function nftOwnedInWallet() {

        // FETCH BALANCE 

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const featherContract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
        const epicFeatherContract = new ethers.Contract(epicAddress, GallusFeatherNFT.abi, signer);
        const balanceFeather = await featherContract.balanceOf(window.ethereum.selectedAddress);
        const balanceEpicFeather = await epicFeatherContract.balanceOf(window.ethereum.selectedAddress);

        setNftOwned(Number(balanceFeather));
        setEpicNftOwned(Number(balanceEpicFeather));

        var wallet = document.getElementById('wallet');

            // SHOW WALLET ADDRESS 

            var originalAdress = window.ethereum.selectedAddress;
            var firstWalletAdress = originalAdress.substring(0, originalAdress.length - 36) + '...';
            var lastWalletAdress = originalAdress.substring(38, originalAdress.length - 0);
            var newWalletAdress = firstWalletAdress + lastWalletAdress;
            wallet.innerHTML = newWalletAdress; 

            // SHOW NFT OWNED

            var myNfts = document.getElementById('showNft');
            myNfts.innerHTML = `NFT Owned : ${Number(balanceEpicFeather)  + Number(balanceFeather)}`;
            
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
                                {/* <span className="tag"></span> */}
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/presale" activeClassName="nav-active" className="display">
                                <i class="fas fa-box-open yellow-icon"></i>
                                {/* <img src={icon_2} className="webtest" /> */}
                                Pre Sale
                                    <span className="tag">HOT</span>
                                </NavLink>
                            </li>
                            
                            <li class="menut-item ">
                                <NavLink exact to="/" activeClassName="nav-active " className="display ">
                                <i class="fas fa-home yellow-icon"></i>Website
                                    <span className="tag ">NEW</span>
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
                            <i class="fas fa-lightbulb yellow-icon"></i>Governance
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
        <div className="pool ">
        
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
                    Gallus story
                </div>
            </div>
            <div className="right-nav">
                    <div className="right-item" id="my-nft">
                        <NavLink exact to="/my-nft" className="nft-owned " id='showNft'></NavLink>
                        <a  id="wallet" className="wallet pool1" onClick={connectWallet}>Connect Wallet</a>
                        {/* onClick={connectMetaMask} */}
                    </div>

                </div>
        </div>
        <div className="normal-layout">
            <div className="container container-nft container-story">
                
                <img src={page1} className="story-page" />
                <img src={page2} className="story-page" />
                <img src={page3} className="story-page" />
                
                
            </div>
            
                
            </div>
        
        </div>
        </>
    )
}

export default GallusStory;