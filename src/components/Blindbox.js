import Header from "./Header";
import { NavLink } from "react-router-dom";
import NftDescription from "./NftDescription";
import { ethers } from "ethers";
import GallusFeatherNFT from '../GallusFeatherNFT.json';
import Test from './Test';
import { useEffect, useState } from "react";




import nftBox from "../images/nft-box.gif";
import egg from "../images/eggIncub.jpg";
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
import footerTwitter from "../images/twitter2.png";
import footerMedium from "../images/medium2.png";
import footerMessage from "../images/discord2.png";
import footerTelegram from "../images/telegram2.png";
import video1 from "../images/gallus_intro_low_reso.mp4";
import mediumFeatherImg from "../images/mediumfeather.png";
import smallFeatherImg from "../images/smallfeather.png";
import largeFeatherImg from "../images/largefeather.png";
import Video from "../images/testfeather.mp4";
import Video2 from "../images/testfeather1.mp4";
import Video1 from "../images/testfeather2.mp4";
import VideoSmall from "../images/little.mp4";
import VideoMedium from "../images/medium.mp4";
import VideoLarge from "../images/large.mp4";
import gallusVideo from "../images/gallus_intro_low_reso.mp4";
import icon_2 from "../images/Asset_2.png";
import story from "../images/story.png";
import metamask from "../images/metamask.png"
import walletconnect from "../images/walletconnect.svg"
import point from "../images/3.png"

import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";


const BlindBox = () => {
    // useEffect(() => {
    //     purshase
    // },[])
    // for metamask (the plugin add "ethereum" to the window object)

    var [nftOwned, setNftOwned] = useState([]);
    var [epicNftOwned, setEpicNftOwned] = useState([])
    

    const [account, setAccount] = useState([])

    var [smallFeather, setSmallFeather] = useState('')
    var [mediumFeather, setMediumFeather] = useState('')
    var [largeFeather, setLargeFeather] = useState('')
    

   
    const [loadingState, setLoadingState] = useState('not-loaded');

    // const gallusFeatherNFTAddress = "REEL : 0x1Ae5F2D1149e0eF80b7C6cAdC27C898CEac1d21A TEST :0xf3b2bF0Cf14011aE704972D6B4726e61dd813d18";
    

    

    useEffect(() => {
        // loadNfts();
        fetchDataWallet()
    }, []);

    const web3Provider = new WalletConnectProvider({
        rpc: {
          // 1: "https://cloudflare-eth.com/", // https://ethereumnodes.com/
          // 137: "https://polygon-rpc.com/", // https://docs.polygon.technology/docs/develop/network-details/network/
          56: "https://bsc-dataseed.binance.org/",
          
          // ...
  
        },
       
          
        // bridge: 'https://bridge.walletconnect.org',
      });

  

    async function buyMediumFeather() { 

        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
            const priceMedium = await contract.getPriceMedium();
            console.log(priceMedium.toString());

            try {
                const transaction = await contract.purchaseMedium({value: priceMedium});
                await transaction.wait();

                var maint = document.getElementById('contain')
                var containert = document.createElement('div');
                containert.classList.add('container-popup-network');
                maint.appendChild(containert);

//                 var popupBox = document.createElement('div');
//                 containert.appendChild(popupBox);
//                 popupBox.classList.add('popup-box-soldout')

                var img = document.createElement('img');
                popupBox.appendChild(img); 
                img.classList.add('img-popup-network')
                img.src = gallus

                var title = document.createElement('h3')
                popupBox.appendChild(title);
                title.innerHTML = "You are now one of the earliest fighter to join the Gallus Army ! Thanks for your purchase"
                title.classList.add('title-popup-soldout')

                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'
                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                })
                window.location.reload();
            }

            catch(err) {

                let network = await provider.getNetwork()
                var maint = document.getElementById('contain')
                var containert = document.createElement('div');
                containert.classList.add('container-popup-network');
                maint.appendChild(containert);

//                 var popupBox = document.createElement('div');
//                 containert.appendChild(popupBox);
//                 popupBox.classList.add('popup-box-soldout')

//                 var img = document.createElement('img');
//                 popupBox.appendChild(img);
                
                img.classList.add('img-popup-network')
                img.src = gallus

                var title = document.createElement('h3')
                popupBox.appendChild(title);
                title.innerHTML = "Presale is closed for now.."
                
                title.classList.add('title-popup-soldout')
                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'
                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                })
                
                if (err.data.message == "execution reverted: Pausable: paused") {
                    title.innerHTML = "Presale is closed for now";
                }
                    
                var sentence = err.data.message.includes("err: insufficient funds for transfer:")
                if (sentence) {
                    title.innerHTML = "Sorry, you don\'t have enough BNB for this transaction";                                   
                }   

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
                    text.classList.add('text-popup-network')
                    text.innerHTML = 'Sorry, You are not on the right network... Please verify that you are on the Binance Smart Chain network and try again.'

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
    }

    // BUY LARGE FEATHER OK

    async function buyLargeFeather() { 

        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
            const priceLarge = await contract.getPriceLarge();

            try {

                const transaction = await contract.purchaseLarge({value: priceLarge});
                await transaction.wait();

                var maint = document.getElementById('contain')
                var containert = document.createElement('div');
                containert.classList.add('container-popup-network');
                maint.appendChild(containert);

                var popupBox = document.createElement('div');
                containert.appendChild(popupBox);
                popupBox.classList.add('popup-box-soldout')

                var img = document.createElement('img');
                popupBox.appendChild(img);
                
                img.classList.add('img-popup-network')
                img.src = gallus

                var title = document.createElement('h3')
                popupBox.appendChild(title);
                title.innerHTML = "You are now one of the earliest fighter to join the Gallus Army ! Thanks for your purchase"
                
                title.classList.add('title-popup-soldout')
                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'
                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                })
                window.location.reload();
            }

            catch(err) {

                let network = await provider.getNetwork()
                var maint = document.getElementById('contain')
                var containert = document.createElement('div');
                containert.classList.add('container-popup-network');
                maint.appendChild(containert);

                var popupBox = document.createElement('div');
                containert.appendChild(popupBox);
                popupBox.classList.add('popup-box-soldout')

                var img = document.createElement('img');
                popupBox.appendChild(img);
                
                img.classList.add('img-popup-network')
                img.src = gallus

                var title = document.createElement('h3')
                popupBox.appendChild(title);
                title.innerHTML = "Presale is closed for now.."
                
                title.classList.add('title-popup-soldout')
                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'
                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                })
                
                if (err.data.message == "execution reverted: Pausable: paused") {
                    title.innerHTML = "Presale is closed for now";        
                }
                    
                var sentence = err.data.message.includes("err: insufficient funds for transfer:")
                if (sentence) {
                    title.innerHTML = "Sorry, you don\'t have enough BNB for this transaction";                      
                }   

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
                    text.classList.add('text-popup-network')
                    text.innerHTML = 'Sorry, You are not on the right network... Please verify that you are on the Binance Smart Chain network and try again.'

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
    }

    const gallusFeatherNFTAddress = "0x1Ae5F2D1149e0eF80b7C6cAdC27C898CEac1d21A";
    const epicAddress = "0xBE748f53ACfc0410abf42a04D00702c40Fa76FA5";

    // CONNECT TO WALLET 

    async function walletConnect() {
        await web3Provider.enable();
        console.log("ok")
    }

    async function metamaskConnect() {
        await window.ethereum.request({ method: "eth_requestAccounts" })
    }

    // SHOW MULTI WALLET POP UP 

    async function showMultiWallet() {

        const container = document.getElementById('popupwallet');
        const popup = 
        `<div class="multiwallet-container">
            <div class="multiwallet-box">
                <div class="multiwallet-top">
                    <div class="mwContainer-title">
                        <h2 class="multiwallet-title">Connect Wallet</h2>
                    </div>
                    <button class="multiwallet-close-btn" id='x'>X</button>
                </div>
                <div class="multiwallet-center">
                    <div class="multiwallet-grid">
                        <button class="metamask-containerMW commun-btn-connect"  id="walletconnectId">
                            <img src=${walletconnect} class="walletconnect-logoMW"/>
                            <div class="metamask-text">
                                Connect Wallet
                            </div>
                        </button>
                        <button class="walletConnect-containerMW commun-btn-connect" id="metaconnectId" >
                            <img src=${metamask} class="metamask-logoMW"/>
                            <div class="metamask-text">
                                Metamask
                            </div>
                        </button>
                    </div> 
                </div>
                <div class="multiwallet-bottom">
                    <p class="multiwallet-bottom-text">Haven't got a crypto wallet yet ?</p>
                    <a href="" class="multiwallet-bottom-link">Learn How to Create one</a>
                </div>
            </div>
        </div> `;
        container.innerHTML = popup;
        const metaconnect = document.getElementById('metaconnectId');
        metaconnect.addEventListener('click',async () => {
            await metamaskConnect();
            container.style.display = "none";
            window.location.reload()
        })
        const walletconnectId = document.getElementById('walletconnectId');
        walletconnectId.addEventListener('click',async () => {
            await walletConnect();
            container.style.display = "none";
            window.location.reload()
        })

        const xButton = document.getElementById('x');
        xButton.addEventListener('click', () => {
            container.style.display = "none";
            console.log('helloword')
            window.location.reload()
                })
    }

    var loaded = "not-loaded";

    async function fetchDataWallet() {
   
        var web3;
        var wallet;
        web3 = new Web3(window.ethereum)
        var provider = new ethers.providers.Web3Provider(web3.currentProvider);
        console.log(typeof window.ethereum)
        
            try {
            
                var walletNo = await web3.eth.getAccounts();
                wallet = walletNo[0]
                console.log(walletNo[0])
                loaded = 'loaded metamask'
                console.log(web3.currentProvider)
                
                if (wallet === undefined) {
                    wallet = web3Provider.wc.accounts[0]
                    console.log(wallet)
                    loaded = 'loaded walletConnect' 
                    console.log(web3.currentProvider)
                }
    
            } catch(err){
                console.log(err)
                
            } 
         
            // try {
            //     wallet = web3Provider.wc.accounts[0]
            //     console.log(wallet)
            //     loaded = 'loaded walletConnect' 
            //     console.log(web3.currentProvider)
    
            // } catch(err) {
            //     console.log(err)
                
            // }  
            
        
        
            
        

        const featherContract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, provider);
        const epicFeatherContract = new ethers.Contract(epicAddress, GallusFeatherNFT.abi, provider);
        
        const balanceEpicFeather = await epicFeatherContract.balanceOf(wallet);
        const balanceFeather = await featherContract.balanceOf(wallet);
        const totalBalance = Number(balanceFeather) + Number(balanceEpicFeather)
    
        var wallets = document.getElementById('wallet');
        var firstWalletAdress =  wallet.substring(0,  wallet.length - 36) + '...';
        var lastWalletAdress =  wallet.substring(38,  wallet.length - 0);
        var newWalletAdress = firstWalletAdress + lastWalletAdress;
        wallets.innerHTML = newWalletAdress; 

        fetchNft(provider)
        var myNfts = document.getElementById('showNft');
        myNfts.innerHTML = `NFT Owned : ${totalBalance}`; 
            
        document.getElementById('buySmall').addEventListener('click',async () => {
            buySmall(provider)
            console.log("buy Small Feather")
        });
    }

    async function buySmall(provider) {
     
        const signer = provider.getSigner();
        const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer)
        const priceSmall = await contract.getPriceSmall();
                
        try {
            const transaction = await contract.purchaseSmall({value: priceSmall});
            await transaction.wait();

        } catch(err) {
            console.log(err)
        }
    }

    async function fetchNft(provider) {

        const featherContract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, provider);
    
        var smallFeather = await featherContract.remainingSmall();
        var mediumFeather = await featherContract.remainingMedium();
        var largeFeather = await featherContract.remainingLarge();

        setSmallFeather(smallFeather.toString());
        setMediumFeather(mediumFeather.toString());
        setLargeFeather(largeFeather.toString());
    }


//     function getChrono() {

    
//         const now = new Date().getTime();
//         const countDownDate = new Date('January 4, 2022 19:00:00 GMT+00').getTime();

//         const distanceBase = countDownDate - now ;
//         var days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distanceBase % (1000 * 60 * 60 )) / (1000 * 60));
//         var seconds = Math.floor((distanceBase % (1000 * 60)) / 1000 );
//         console.log(days, hours, minutes,seconds)
//         var countdownDays = document.getElementById('countdownDays');
//         var countdownHours = document.getElementById('countdownHours');
//         var countdownMinutes = document.getElementById('countdownMinutes');
//         var countdownSeconds = document.getElementById('countdownSeconds');
        

//         var countdownDays2 = document.getElementById('countdownDays2');
//         var countdownHours2 = document.getElementById('countdownHours2');
//         var countdownMinutes2 = document.getElementById('countdownMinutes2');
//         var countdownSeconds2 = document.getElementById('countdownSeconds2');
        

//         var countdownDays3 = document.getElementById('countdownDays3');
//         var countdownHours3 = document.getElementById('countdownHours3');
//         var countdownMinutes3 = document.getElementById('countdownMinutes3');
//         var countdownSeconds3 = document.getElementById('countdownSeconds3');
        

//         // COUNTDOWN

//         if (days || hours || minutes || seconds !== 0) {

//             countdownDays.innerHTML = `${days}D`;
//             countdownHours.innerHTML = `${hours}H`;
//             countdownMinutes.innerHTML = `${minutes}M`;
//             countdownSeconds.innerHTML = `${seconds}S`;

//             countdownDays2.innerHTML = `${days}D`;
//             countdownHours2.innerHTML = `${hours}H`;
//             countdownMinutes2.innerHTML = `${minutes}M`;
//             countdownSeconds2.innerHTML = `${seconds}S`;

//             countdownDays3.innerHTML = `${days}D`;
//             countdownHours3.innerHTML = `${hours}H`;
//             countdownMinutes3.innerHTML = `${minutes}M`;
//             countdownSeconds3.innerHTML = `${seconds}S`;

//             var medium = document.getElementById('buyMedium');
//             var small = document.getElementById('buySmall');
//             var large = document.getElementById('buyLarge');

//             medium.classList.add('disabled');
//             small.classList.add('disabled');
//             large.classList.add('disabled');
//             console.log(days)

           

//         } else {
//             days = 0;
//             hours = 0;
//             minutes =0;
//             seconds = 0
//         }
//         if (days, hours, minutes, seconds <= 0 ) {

            

//             countdownDays2.innerHTML = "L";
//             countdownHours2.innerHTML = "I";
//             countdownMinutes2.innerHTML = "V";
//             countdownSeconds2.innerHTML = "E";

//              countdownDays.innerHTML = `L`;
//             countdownHours.innerHTML = `I`;
//             countdownMinutes.innerHTML = `V`;
//             countdownSeconds.innerHTML = `E`;
            
//             countdownDays3.innerHTML = "L";
//             countdownHours3.innerHTML = "I";
//             countdownMinutes3.innerHTML = "V";
//             countdownSeconds3.innerHTML = "E";

//             medium.classList.remove('disabled');
//             small.classList.remove('disabled');
//             large.classList.remove('disabled');
            

//         }   

        

        

//     }

    

//     const countDownInterval = setInterval(() => {

//         getChrono()
//     }, 1000)

    return (
        <div id="contain">
           <div className="test hamburgertest " id="hamburger">
                <div class="vertical-header vertical-nft-header">
                    <a className="hamburger-header" id="hhh" onClick="{AfficherMasquer}">
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
                            <a href="https://galluspaper.gallusfighter.com/" target="_blank" class="display left-docs">  
                                <i class="fas fa-file-alt yellow-icon"></i>Gallus Paper
                            </a>     
                        </li>   
                    </ul>
                </div>
            </div> 
            <div className="pool background-section" >
            <Test />
                <div className="wallet-nav">
                    <div className="button-aside-nav" >
                        <img src={gallusLogo} className="gallus-title-logo" />
                        <a className="hamburger-nav-app" id="hhh" onClick="{AfficherMasquer}">
                            <i className="fas fa-bars hamburger-img"></i>
                        </a>
                    </div>
                    <div className="logo-nav-wallet">
                        <a href="" className="logoGALLUS"></a>
                        <div className="pool1" >
                            Exclusive Pre-Sale Launch 
                        </div>
                    </div>
                    <div className="right-nav">
                        <div className="right-item" id="my-nft">
                            <NavLink exact to="/my-nft" className="nft-owned " id="showNft"></NavLink>
                            <a  id="wallet"  onClick={showMultiWallet} className="wallet pool1" >Connect Wallet</a>
                        </div>
                    </div>
                </div>
                <div className="normal-layout padding-nft-2" >
                    <div className="main-title">
                        <div className="left-1">
                            <h3 className="rofi-title-2">THE GALLUS ROYAL FEATHER NFT Collection</h3>
                            <p className="p-text">Welcome to the very first collection of rare NFT Feathers to introduce
                                the latest evolution in the GameFi universe : the DEFIGHT Metaverse
                            </p>
                            <p className="p-text">Each NFT Feather is a unique piece of digital art. Participate in our mystery box pre-sale
                                to capture an Exclusive NFT Feather among the 500 available.
                                Choose the model you want: Small, Medium or Titan! <br /><br />
                                Each NFT Feather is inside one of 6 beautiful boxes decorated with 6 beautiful stickers and 7 different
                                colored crests that make this collection so rare. 
                                Enjoy Great Rewards Customized to the model of your NFT Feather!
                            </p>
                            <div className="btn-1">
                                {/* <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x78a499a998bdd5a84cf8b5abe49100d82de12f1c" className="btn-border-color">
                                <img src={icon_2} className="icon-btn" />
                                    BUY Gallus
                                
                                </a>
                                <NavLink exact to="/blindbox" className="btn-border-color">
                                    <img src={icon_2} className="icon-btn" />
                                   Gallus APP
                                    
                                </NavLink> */}
                               {/* <NavLink exact to="/blindbox" className="btn-border-color">
                                    <img src={icon_2} className="icon-btn" />
                                   Our Story
                                    
                                </NavLink> */}   
                            </div>
                        </div>
                        <div className="right-1">
                            <img src={gallusLogo} alt="logo jojo" className="image-right"/>
                        </div>
                    </div>
                </div>
                <div className="pool background-section-2" id="popupwallet">
                    <div className="normal-layout">
            
               
                        <div className="container-nft-2">
                
                            <div className="row card-nft">
                    
                                <div className="col-lg-6 flex-container">
                                    <div className="image-container ">
                                    
                                        <div className="neon-nft-perso"></div>
                                        <video  width="250" className="image-nft-box " id ="videoOfsmall"  autoPlay muted loop>
                                            <source src={VideoSmall} type="video/webm"   autoplay loop/>
                                            <source src={VideoSmall}type="video/mp4" id ="videosmall"onClick="{showNft}"autoplay loop/>
                                        </video>
                                    </div>
                                </div>
                                <div className="col-lg-6 flexBox-nft">
                                    <div className="detail-container width100">
                                        <h1 className="title-Nft-desc">sickle feather - <span className="title-nft-secondColor"><br />small </span></h1>
                                        <div className="liseret-nft"></div>
                                        <p className="text-description-nft">This fine feather will allow you to get a Premium reward in our universe
                                            of Play2Earn and in this way increase your capital in $GALLUS token.
                                            Take advantage of this unique benefit with the DeFi 
                                        </p>   
                                        <div className="bsc row">
                                            <div className="bsc-price-text  CentPourcent col-sm-12 col-md-2">Premium Reward : </div>
                                            <div className="col-sm-12 col-md-6 CentPourcent2 position">   
                                                <img src={gallus} className="bsc-price" />
                                                <p className="bsc-price-chiffre">$GALLUS Tokens</p>
                                            </div>
                                        </div> 
                                        <div className="bsc">
                                            <div className="left-t">
                                                <p className="bsc-price-text">Quantity : </p>
                                            </div>
                                            <div className="left-t">
                                                <p className="bsc-price-chiffre" id="smallFeather">{smallFeather}</p>
                                            </div>
                                        </div>     
                                        <div className="bsc">
                                            <div className="left-container-resp">
                                                <p className="bsc-price-text">Price : </p>
                                            </div>
                                            <div className="right-container-resp">
                                                <img src={bsc} className="bsc-price" />
                                                <p className="bsc-price-chiffre">0,33 BNB</p>
                                            </div>
                                        </div>
                                        <div className="center-button">
                                            <div className="flexDis">
                                                <a  className="btn-border-color-small" id="buySmall"  >
                                                    <img src={icon_2} className="icon-btn icon-btn2" />
                                                    BUY SMALL
                                                </a>
                                            </div>
                                            <div className="prenium-box-nft" >
                                                <div className="countdown" id="countdownDays">L</div>
                                                <div className="countdown" id="countdownHours">I</div>
                                                <div className="countdown" id="countdownMinutes">V</div>
                                                <div className="countdown" id="countdownSeconds">E</div>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row play2earn-margin reverseRow card-nft ">
                            <div className="col-lg-6 flexBox-nft">
                                <div className="detail-container ">
                                    <h1 className="title-Nft-desc">lancet feather - <span className="title-nft-secondColor"><br />Medium</span></h1>
                                    <div className="liseret-nft"></div>
                                    <p className="text-description-nft">All holders of this great feather will earn a high reward in $GALLUS Token
                                        and this will give you a considerable advantage to enter the GameFi.
                                        Take advantage of this unique benefit with the DeFi.
                                    </p>
                                    <div className="bsc row">
                                        <div className="bsc-price-text  CentPourcent col-sm-12 col-md-6">High Reward : </div>
                                        <div className="CentPourcent2 col-sm-12 col-md-6">
                                            <img src={gallus} className="bsc-price" />
                                            <p className="bsc-price-chiffre">$GALLUS Tokens</p>
                                        </div>
                                    </div> 
                                    <div className="bsc">
                                        <p className="bsc-price-text">Quantity : </p>
                                        <p className="bsc-price-chiffre">{mediumFeather}</p>
                                    </div> 
                                    <div className="bsc">
                                        <div className="left-container-resp">
                                            <p className="bsc-price-text">Price : </p>
                                        </div>
                                        <div className="right-container-resp">
                                            <img src={bsc} className="bsc-price" />
                                            <p className="bsc-price-chiffre">1.15 BNB</p>
                                        </div>
                                    </div>
                                    <div className="center-button">
                                        <a  className="btn-border-color-medium" id="buyMedium" onClick={buyMediumFeather} >
                                        <img src={mediumFeatherImg} className="icon-btn icon-btn3" />BUY MEDIUM</a>
                                        <div className="prenium-box-nft" >
                                            <div className="countdown" id="countdownDays3">L</div>
                                            <div className="countdown" id="countdownHours3">I</div>
                                            <div className="countdown" id="countdownMinutes3">V</div>
                                            <div className="countdown" id="countdownSeconds3">E</div> 
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-lg-6 flex-container">
                                <div className="image-container">
                                <div className="neon-nft-perso"></div>
                                <video  width="250" className="image-nft-box " autoPlay muted loop>
                                    <source src={VideoMedium} type="video/webm" autoplay loop/>
                                    <source src={VideoMedium}type="video/mp4" autoplay loop/>
                                </video>
                                </div>
                            </div>
                        </div>
                        <div className="row play2earn-margin card-nft titan-margin">
                            <div className="col-lg-6 flex-container">
                                <div className="image-container ">
                                <div className="neon-nft-perso"></div>
                                <video  width="250" className="image-nft-box " autoPlay muted loop>
                                    <source src={VideoLarge} type="video/webm" autoplay loop/>
                                    <source src={VideoLarge}type="video/mp4" autoplay loop/>
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container last-detail-container">
                                <h1 className="title-Nft-desc">sickle feather - <span className="title-nft-secondColor"><br />TITAN</span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">Only the best of the GALLUS Army can hope to open one of the rarest boxes containing
                                    a mysterious golden feathers. You only got one chance to join a private live Discord group with the Full Gallus Team.
                                    Take advantage of this unique benefit with the DeFi.
                                </p>
                                <div className="bsc row">
                                    <div className="bsc-price-text  CentPourcent4 col-sm-12 col-md-6">Crazy Reward : </div>
                                        <div className="CentPourcent1 col-sm-12 col-md-12">
                                            <img src={gallus} className="bsc-price" />
                                            <p className="bsc-price-chiffre1">$GALLUS Tokens + VIP Access with Gallus Team</p>
                                        </div>
                                    </div> 
                                    <div className="bsc">
                                        <p className="bsc-price-text">Quantity : </p>
                                        <p className="bsc-price-chiffre">{largeFeather}</p>
                                    </div> 
                                    <div className="bsc">
                                        <div className="left-container-resp">
                                            <p className="bsc-price-text">Price : </p>
                                        </div>
                                        <div className="right-container-resp">
                                            <img src={bsc} className="bsc-price" />
                                            <p className="bsc-price-chiffre">2.95 BNB</p>
                                        </div>
                                    </div>
                                    <div className="center-button">
                                        <a  className="btn-border-color-titan" id="buyLarge" onClick={buyLargeFeather}>
                                        <img src={largeFeatherImg} className="icon-btn icon-btn4" />BUY TITAN</a>
                                        <div className="prenium-box-nft" >
                                            <div className="countdown" id="countdownDays2">L</div>
                                            <div className="countdown" id="countdownHours2">I</div>
                                            <div className="countdown" id="countdownMinutes2">V</div>
                                            <div className="countdown" id="countdownSeconds2">E</div>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="section ">
                            <div className="normal-layout">
                                <div className="contact-footer margeTop">
                                    <a href="https://twitter.com/GallusFighter" target="_blank" className="contact-link">
                                        <img src={footerTwitter} alt="twitter logo" className="img-footer twitter-footer" />
                                    </a>
                                    <a href="https://medium.com/@gallusfighter" target="_blank" className="contact-link">
                                        <img src={footerMedium} alt="medium logo" className="img-footer medium-footer" />
                                    </a>
                                    <a href="https://t.me/gallus_fighter " target="_blank" className="contact-link">
                                        <img src={footerTelegram} alt="telegram logo" className="img-footer telegram-footer" />
                                    </a>
                                    <a href="https://discord.gg/vGe43sRgNr" target="_blank" className="contact-link">
                                        <img src={footerMessage} alt="discord logo" className="img-footer discord-footer" />
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section className="section">
                            <div className="normal-layout">
                                <div className="footer-copyright">
                                    Copyright© 2022 Gallus Fighter - All rights reserved.
                                </div>
                            </div>
                        </section>
                    </div>
                </div>     
            </div>
        </div>
    )
                    }

export default BlindBox;