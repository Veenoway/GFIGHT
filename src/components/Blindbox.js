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
import footerTwitter from "../images/twitter2.png";
import footerMedium from "../images/medium2.png";
import footerMessage from "../images/discord2.png";
import footerTelegram from "../images/telegram2.png";
import video1 from "../images/gallus_intro_low_reso.mp4";

import Video from "../images/testfeather.mp4";
import Video2 from "../images/testfeather1.mp4";
import Video1 from "../images/testfeather2.mp4";


import VideoSmall from "../images/little.mp4";
import VideoMedium from "../images/medium.mp4";
import VideoLarge from "../images/large.mp4";




import gallusVideo from "../images/gallus_intro_low_reso.mp4";
import icon_2 from "../images/Asset_2.png";
import story from "../images/story.png";




const BlindBox = () => {
    // useEffect(() => {
    //     purshase
    // },[])
    // for metamask (the plugin add "ethereum" to the window object)

    var [NftOwned, SetNftOwned] = useState('')
    var [quantity, SetQuantity] = useState([])
    var [quantityLargeNft, SetQuantityLargeNft] = useState([])
    var [quantitySmallNft, SetQuantitySmallNft] = useState([])

    const gallusFeatherNFTAddress = "0xBA5112b636d75e33d789175690b8Af70881ce336";
    
    async function connectMetaMask() {

        
            //  console.log(network.name)
            //  if (network.name === 'rinkeby' ) {
            //  }

        if (typeof window.ethereum !== 'undefined') {
            
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            let network = await  provider.getNetwork()
            console.log(window.ethereum.selectedAddress);
            console.log(network)
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
                SetNftOwned('MY NFT : ' + balance);
                

                for (let i=0;i<balance;i++) {
                    const nftId = await contract.tokenOfOwnerByIndex(walletAdress, i);
                    console.log(nftId.toString())
                    const uri = await contract.tokenURI(nftId);
                    console.log(uri)
                }

            }
        }
    }
    
    async function purshaseSmall() {
        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);
        
        // request metamask to access the account
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
            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log(window.ethereum.selectedAddress);

            
            const signer = provider.getSigner();
            const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
            const priceSmall = await contract.getPriceSmall();
            const priceMedium = await contract.getPriceMedium();
            // const priceLarge = await contract.getPriceLarge();


          
            var quantitySmall = await contract.remainingSmall();
            var smallQuantity = quantitySmall.toString()
            SetQuantitySmallNft(smallQuantity)
            
           
            console.log(quantitySmallNft)
            console.log(priceSmall.toString())
            try {
                const transaction = await contract.purchaseSmall({value: priceSmall});
                await transaction.wait();
            }
            catch(error){
                console.log(error.data.message)

                if (error.data.message == "execution reverted: Pausable: paused") {

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
                }

                var sentence = error.data.message.includes("err: insufficient funds for transfer:")
                if (sentence) {

               


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
                title.innerHTML = "Sorry you don't have enough BNB..."
                
                title.classList.add('title-popup-soldout')


                


                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'

                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                    })
                }

               
                alert(error.data.message)
                var dataMessage = error.data.message.search("err: insufficient funds for transfer:")
               

                alert(dataMessage)
                alert(sentence)



            }
       }
    }


    async function showMediumQuantity() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);
        
        // request metamask to access the account

            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log(window.ethereum.selectedAddress);

           
            const signer = provider.getSigner();
            const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
             var quantityMedium = await contract.remainingMedium();
            const priceMedium = await contract.getPriceMedium();
            
            var mediumQuantity = quantityMedium.toString()

            SetQuantity(mediumQuantity)
            console.log(quantity)
            console.log(priceMedium.toString())
    }
    
    useEffect(() => {    showMediumQuantity()  }, []);

    async function showSmallQuantity() {
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(provider);
        console.log(window.ethereum.selectedAddress);
    
    // request metamask to access the account
        try {
            
        
        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log(window.ethereum.selectedAddress);

        
        const signer = provider.getSigner();
        const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
        const priceSmall = await contract.getPriceSmall();
        const priceMedium = await contract.getPriceMedium();
        // const priceLarge = await contract.getPriceLarge();


      
        var quantitySmall = await contract.remainingSmall();
        var smallQuantity = quantitySmall.toString()
        SetQuantitySmallNft(smallQuantity)
        
        console.log(quantitySmallNft)
        console.log(priceSmall.toString())
}
        catch(error) {
           
            SetQuantityLargeNft('SOLD OUT')
        }
    }

    useEffect(() => {
    showSmallQuantity()
    }, [])
    async function showLargeQuantity() {
        
        try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(provider);
        console.log(window.ethereum.selectedAddress);
    
    // request metamask to access the account

        await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log(window.ethereum.selectedAddress);

        
        const signer = provider.getSigner();
        const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
        const priceLarge = await contract.getPriceLarge()

        
        
        var quantityLarge = await contract.remainingLarge();
        var largeQuantity = quantityLarge.toString()
        SetQuantityLargeNft(largeQuantity)
        
        console.log(quantityLargeNft)
        console.log(priceLarge.toString())

        }
        catch(error) {
           
            SetQuantityLargeNft('SOLD OUT')
        }

        
    }
    useEffect(() => {
    showLargeQuantity()
    }, [])

    async function purshaseLarge() {
        if (typeof window.ethereum !== 'undefined') {

            try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);
        
        // request metamask to access the account
            


        
        let network = await  provider.getNetwork()
            if (network.name !== 'bnb') {

            var maint = document.getElementById('hamburger')
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
            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log(window.ethereum.selectedAddress);

            
            const signer = provider.getSigner();
            const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
            const priceLarge = await contract.getPriceLarge();
            var quantityLarge = await contract.remainingLarge();
            var largeQuantity = quantityLarge.toString()
            SetQuantityLargeNft(largeQuantity)
            console.log(priceLarge.toString())
            console.log(quantityLargeNft)
            
            
                const transaction = await contract.purchaseLarge({value: priceLarge});
                await transaction.wait();
                console.log(quantityLargeNft)
            }
            catch(error){
                console.log(error.data.message)

                if (error.data.message == "execution reverted: Pausable: paused") {

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
                }

                var sentence = error.data.message.includes("err: insufficient funds for transfer:")
                if (sentence) {

               


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
                title.innerHTML = "Sorry you don't have enough BNB..."
                
                title.classList.add('title-popup-soldout')


                


                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'

                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                    })
                }

               
                alert(error.data.message)
                var dataMessage = error.data.message.search("err: insufficient funds for transfer:")
               

                alert(dataMessage)
                alert(sentence)



            }
       }
    }

    function showNft() {


        const videoSmallTest = document.getElementById('videoOfsmall');
        

        if (videoSmallTest.src == Video1) {
            videoSmallTest.src = VideoSmall
        } else{
            videoSmallTest.src = Video1
        }

    }
    function showNormalNft() {


        const videoSmallTest = document.getElementById('videoOfsmall');
        

        if (videoSmallTest.src == VideoSmall) {
            videoSmallTest.src = Video1
        } else{
            videoSmallTest.src = VideoSmall
        }

    }
  

    async function purshaseMedium() {
        if (typeof window.ethereum !== 'undefined') {

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            console.log(provider);
            console.log(window.ethereum.selectedAddress);
        
        // request metamask to access the account
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
            await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log(window.ethereum.selectedAddress);

           
            const signer = provider.getSigner();
            const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
             var quantityMedium = await contract.remainingMedium();
            const priceMedium = await contract.getPriceMedium();
            
            var mediumQuantity = quantityMedium.toString()

            SetQuantity(mediumQuantity)
            console.log(quantity)
            console.log(priceMedium.toString())
            try {
                const transaction = await contract.purchaseMedium({value: priceMedium});
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
                title.innerHTML = 'Achat effectué'
                title.classList.add('title-popup-soldout')


                


                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'

                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                })

            }
            catch(error){
                console.log(error.data.message)

                if (error.data.message == "execution reverted: Pausable: paused") {

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
                }

                var sentence = error.data.message.includes("err: insufficient funds for transfer:")
                if (sentence) {

               


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
                title.innerHTML = "Sorry you don't have enough BNB..."
                
                title.classList.add('title-popup-soldout')


                


                var button = document.createElement('button');
                popupBox.appendChild(button);
                button.classList.add('btn-popup-network')
                button.innerHTML = 'OK'

                button.addEventListener('click', function (e) {
                    containert.style.display = 'none'
                    })
                }

               
                alert(error.data.message)
                var dataMessage = error.data.message.search("err: insufficient funds for transfer:")
               

                alert(dataMessage)
                alert(sentence)



            }
       }
    }
    console.log(quantity)

    function AfficherMasquer()
                    {
                    var divInfo = document.getElementById('hamburger');
                     
                    if (divInfo.style.display == 'none')
                    divInfo.style.display = 'block';
                    else
                    divInfo.style.display = 'none';
                     
                    }
    
                    
    

    return (
        <div id="contain">
           
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
                                {/* <span className="tag"></span> */}
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/presale" activeClassName="nav-active" className="display">
                                <i class="fas fa-box-open yellow-icon"></i>
                                {/* <img src={icon_2} className="webtest" /> */}
                                Mystery box 
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
                        <a  id="test"  onClick={connectMetaMask} className="wallet pool1" >Connect Wallet</a>
                    </div>
                    {/* onClick={connectMetaMask} */}

                </div>
            </div>
        
        
            <div className="normal-layout padding-nft-2">
            <div className="main-title">
                        <div className="left-1">
                            <h3 className="rofi-title-2">THE ROYAL FEATHER<br /> <span className="defight-color">NFT Collection BY</span></h3>
                            <p className="p-text">Welcome to the very first collection of rare NFT Feathers <br /><span className="royalFeather">to introduce the latest evolution in the GameFi universe : </span><br />the DEFIGHT Metaverse</p>
                            <p className="p-text">Each NFT Feather is a unique piece of digital art. Participate in our mystery box pre-sale to capture an Exclusive NFT Feather among the 500 available.
Choose the model you want: Small, Medium or Titan! </p>
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
            <div className="pool background-section-2">
            
            <div className="normal-layout">
            
               
               <div className="container-nft-2">
               
                    <div className="row card-nft">
                    
                        <div className="col-lg-6 flex-container">
                            <div className="image-container ">
                                
                            <div className="neon-nft-perso"></div>
                            <video  width="250" className="image-nft-box " id ="videoOfsmall"  autoPlay muted loop>
                                <source src={VideoSmall} type="video/webm"   autoplay loop/>
                                <source src={VideoSmall}type="video/mp4" id ="videosmall"onClick={showNft}autoplay loop/>
                            </video>
                            <button className="buttons-loot"onClick={showNft}>Random version</button>
                        <button className="buttons-loot-2"onClick={showNormalNft}>Possible loot</button>
                            </div>
                        </div>
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">sickle feather - <span className="title-nft-secondColor"><br />small </span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">This fine feather will allow you to get a Premium reward in our universe of Play2Earn and in this way increase your capital in $GALLUS token.
Take advantage of this unique benefit with the DeFi 
                                </p>   
                                <div className="bsc row">
                                <div className="bsc-price-text  CentPourcent col-sm-12 col-md-2">Premium Reward : </div>
                                <div className="col-sm-12 col-md-6 CentPourcent2">   
                                
                                {/* <img src={exemple1} alt="" className="image-nft-box" /> */}
                                <img src={gallus} className="bsc-price" />
                                    <p className="bsc-price-chiffre">$GALLUS Tokens</p>
                                </div>
                                </div> 
                                <div className="bsc">
                                    <p className="bsc-price-text">Quantity : </p>
                                   
                                    <p className="bsc-price-chiffre">{quantitySmallNft}</p>
                                </div>     
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">0,33 BNB</p>
                                </div>
                                
                                <div className="center-button">
                                    <div className="">
                                    <a  className="btn-border-color-small" onClick={purshaseSmall} >
                                    <img src={icon_2} className="icon-btn" />BUY SMALL</a></div>
                                    {/* onClick={purshase} */}
                                    <div className="prenium-box-nft">
                                        Small Edition *
                                    </div>

                                </div>
                                
                            </div></div>
                        </div>
                    </div>
                    <div className="row play2earn-margin reverseRow card-nft">
                        
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container ">
                                <h1 className="title-Nft-desc">lancet feather - <span className="title-nft-secondColor"><br />Medium</span></h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">All holders of this great feather will earn a high reward in $GALLUS Token and this will give you a considerable advantage to enter the GameFi.
Take advantage of this unique benefit with the DeFi.
</p>
<div className="bsc row">
                                    <div className="bsc-price-text  CentPourcent3 col-sm-12 col-md-6">High Reward : </div>
                                    <div className="CentPourcent2 col-sm-12 col-md-6">
                                        <img src={gallus} className="bsc-price" />
                                        <p className="bsc-price-chiffre">$GALLUS Tokens</p>
                                    </div>
                                </div> 
                                <div className="bsc">
                                    <p className="bsc-price-text">Quantity : </p>
                                   
                                    <p className="bsc-price-chiffre">{quantity}</p>
                                </div> 
                                <div className="bsc">
                                    
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">1,15 BNB</p>
                                </div>
                                
                                <div className="center-button">
                                    
                                <a  className="btn-border-color-medium" onClick={purshaseMedium} >
                                    <img src={icon_2} className="icon-btn" />BUY MEDIUM</a>
                                    <div className="prenium-box-nft">
                                        Medium Edition *
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
                    <div className="row play2earn-margin card-nft">
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
                                <p className="text-description-nft">Only the best of the GALLUS Army can hope to open one of the rarest boxes containing a mysterious golden feathers. You only got one chance to join a private live Discord group with the Full Gallus Team.
                                    Take advantage of this unique benefit with the DeFi.
                                </p>
                                <div className="bsc row">
                                <div className="bsc-price-text  CentPourcent4 col-sm-12 col-md-6">Crazy Reward : <img src={gallus} className="bsc-price" /></div>
                                    <div className="CentPourcent1 col-sm-12 col-md-12">
                                        
                                        <p className="bsc-price-chiffre1">$GALLUS Tokens + VIP Access with Gallus Team</p>
                                    </div>
                                </div> 
                                
                                <div className="bsc">
                                    <p className="bsc-price-text">Quantity : </p>
                                   
                                    <p className="bsc-price-chiffre">{quantityLargeNft}</p>
                                </div> 
                                <div className="bsc">
                                    <p className="bsc-price-text">Price : </p>
                                    <img src={bsc} className="bsc-price" />
                                    <p className="bsc-price-chiffre">2,95 BNB</p>
                                </div>
                                <div className="center-button">
                                <a  className="btn-border-color-titan" onClick={purshaseLarge} >
                                    <img src={icon_2} className="icon-btn" />BUY TITAN</a>
                                    <div className="prenium-box-nft">
                                        Titan Edition *
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
                        
                     Copyright© 2021 Gallus Fighter - All rights reserved.
      
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