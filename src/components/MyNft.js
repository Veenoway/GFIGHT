import Header from "./Header";
import nftBox from "../images/nft-box.gif";
import NftDescription from "./NftDescription";
import { ethers }from "ethers";
import GallusFeatherNFT from '../GallusFeatherNFT.json';
import { useEffect, useState } from "react";
import NftBoxss from './../images/bg-nft.jpg';
import axios from "axios";
import { NavLink } from "react-router-dom";
import gallusLogo from '../images/logoGallus.png';

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
    

  

    const gallusFeatherNFTAddress = "0x1Ae5F2D1149e0eF80b7C6cAdC27C898CEac1d21A";

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
                test.addEventListener("click", function(e) {
                    e.preventDefault()
                    console.log("woops")
                }, false);


                // Slice wallet adress and Show it
                
                var firstWalletAdress = walletAdress.substring(0, walletAdress.length - 36) + '...';
                var lastWalletAdress = walletAdress.substring(38, walletAdress.length - 0);
                var newWalletAdress = firstWalletAdress + lastWalletAdress;
                test.innerHTML = newWalletAdress; 

                const signer = provider.getSigner();
                const contract = new ethers.Contract(gallusFeatherNFTAddress, GallusFeatherNFT.abi, signer);
                const balance = await contract.balanceOf(walletAdress);
                console.log(balance.toString())

                
                
                // var nftOwned = document.createElement("NavLink");
                // nftOwned.classList.add('nft-owned');
                
                // SetNftOwned('My NFT : ' + balance);
                

                for (let i=0;i<balance;i++) {
                    const nftId = await contract.tokenOfOwnerByIndex(walletAdress, i);
                    console.log(nftId.toString())
                    const uri = await contract.tokenURI(nftId);
                    console.log(uri)

                    // changing url
                  
                  
 
                    var deleteFirstChar = uri.substring(6, uri.length - 0);
                    var url = 'https://gateway.pinata.cloud/ipfs' + deleteFirstChar 
                    
                    
                    // Get url to data
                   
                    await axios
                    .get(url)
                    .then((res) => 
                    data = res.data) 
                    console.log(data)
                    var url = data.image
                        console.log(url)
                        console.log(Http)
                    setHttp(url)
                    var ipfsImage = uri.substring(0, uri.length - 36);
                    console.log(ipfsImage)
var deleteImageChar = data.image.substring(6, data.image.length - 0)
                   var imageUrl = 'https://gallus.mypinata.cloud/ipfs' + deleteImageChar
                   console.log(imageUrl)
                    if ( url.includes('ipfs://') ) {
                        console.log("ok")
                        
                        
                        
                    }
                    

                    let myNft = document.getElementById('main');
                    
                //    var imageUrl = url
            
                    var nftBoxCreated = `<div class="row margin-row">
                    <div class="col-lg-6 flex-container">
                        
                        <div class="image-container ">
                            <div class="neon-nft-perso"></div>
                            
                            
                            <video  width="250" class="image-nft-box " autoPlay muted loop>
                                
                                <source src=${imageUrl} type="video/mp4" autoplay loop/>
                                <source src=${imageUrl} type="video/webm" autoplay loop/>
                            </video>
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
    useEffect(() => {
        connectMetaMask()
    }, [])

   
  
    
    
    
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
                                <NavLink exact to="/" activeClassName="nav-active" className="display disabled">
                               
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
        <div className="pool">
        
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
                    Your Nft
                </div>
            </div>
            <div className="right-nav">
                <div className="right-item">
                    <a href="#my-nft" className="nft-owned ">{NftOwned}</a>
                    <a href="#my-nft" id="test" className="wallet pool1" ></a>
                </div>

            </div>
        </div>
        <div className="normal-layout" >
            <div className="container " id="main">
                {/* <div className="row ">
                    <div className="col-lg-6 flex-container">
                        
                        <div className="image-container ">
                            <div className="neon-nft"></div>
                            <img src={nftBox} alt="" className="image-nft-box" />
                        </div>
                    </div>
                    <div className="col-lg-6 flexBox-nft">

                        <div className="detail-container">
                            <h1 className="title-Nft-desc">Dawnlight Badge - <span className="title-nft-secondColor">Bronze</span></h1>
                            <div className="liseret-nft"></div>
                            <p className="text-description-nft">lorem fhsbhneiuofhoi hnesh oighfosieh gfohgsih si ghopsegjh iogjesijg iojsegio joigse</p>
                            <div className="center-button">
                                <p>Current price : 654$</p>
                                

                            </div>
                            
                        </div>
                    </div>
                </div> */}
                
            </div>
            
                
            </div>
        
        </div>
        </>
    )
}

export default MyNft;