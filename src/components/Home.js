import React from 'react';
import discord from "../images/discord.png";
import twitter from "../images/twitter.png";
import medium from "../images/medium.png";
import telegram from "../images/telegram.png";
import cotcot from "../images/fight_chicken_2.png";
import gallus from "../gallus.png";
import icon1 from "../images/icon-metaverse1.svg";
import icon2 from "../images/icon-metaverse2.svg";
import icon3 from "../images/icon-metaverse3.svg";
import tokenomic from "../images/logo.gif";
import { NavLink } from 'react-router-dom';
import blackHole1 from "../images/icon-blackHole.svg";
import blackHole2 from "../images/icon-blackHole-2.svg";
import blackHole3 from "../images/icon-blackHole-3.svg";
import blackHole4 from "../images/icon-blackHole-4.svg";
import blackHole5 from "../images/icon-blackHole-5.svg";
import blackHole6 from "../images/icon-blackHole-6.svg";
import metamask1 from "../images/metamask-1.png";
import metamask2 from "../images/metamask-2.png";
import metamask3 from "../images/metamask-3.png";
import binance from "../images/binance.png";
import binanceNFT from "../images/binanceNFT.png";
import certik from "../images/certik.png";
import coinmarket from "../images/coinmarketcap.png";
import coingecko from "../images/coingecko.png";
import pancakeswap from "../images/pancakeswap.png";
import trustwallet from "../images/trustwallet.png";
import cryptonews from "../images/cryptonews.png";
import footerTwitter from "../images/footer-twitter.svg";
import footerMedium from "../images/footer-medium.svg";
import footerMessage from "../images/footer-message.svg";
import footerTelegram from "../images/footer-telegram.svg";
import figurine from "../testegg.png";
import egg from "../eggIncub.jpg";
import testimg from "../TEST.jpg";
import charles from "../halo2.jpg";
import halo from "../halo.jpg";
import space from "../space.jpg";
import veeno from "../images/veeno.jpg"
import miz from "../images/miz.jpg"
import nico from "../images/nico.jpg"
import macron from "../images/macron.jpg"
import sylvain from "../images/sylvain.jpg"
import niho from "../images/niho.jpg"

const Home = () => {

    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++)
      {
        var page = pages[i];
        if (i % 2 === 0)
          {
            page.style.zIndex = (pages.length - i);
          }
      }
  
    document.addEventListener('DOMContentLoaded', function(){
      for(var i = 0; i < pages.length; i++)
        {
          //Or var page = pages[i];
          pages[i].pageNum = i + 1;
          pages[i].onclick=function()
            {
              if (this.pageNum % 2 === 0)
                {
                  this.classList.remove('flipped');
                  this.previousElementSibling.classList.remove('flipped');
                }
              else
                {
                  this.classList.add('flipped');
                  this.nextElementSibling.classList.add('flipped');
                }
             }
          }
    });

    function AfficherMasquer()
    {
    document.getElementById('divacacher');
     
    if ( document.getElementById('divacacher').style.display == 'none')
    document.getElementById('divacacher').style.display = 'flex';
    else
    document.getElementById('divacacher').style.display = 'none';
     
    }
        
    
    return (
    <div classname="home">
        <div className="header">
            <div className="header-fixed">
                <div className="container-nav">
                    
                    <a href="/" className="nav-logo"></a>
                    <div className="space"></div>
                    <div className="nav-list">
                        <a href="" className="selected font">HOME</a>
                        <a href="" className="unselected font">METAVERSE</a>
                        <a href="" className="unselected font">TOKEN</a>
                        <a href="" className="unselected font">BLIND BOX</a>
                        <a href="" className="unselected font" onClick="AfficherMasquer()">GAMEBASE</a>
                        <a href="" className="unselected font">POOL</a>
                        <a href="" className="unselected font">NFT</a>
                        <a href="" className="unselected font">BOUNTY</a>
                        <a href="" className="unselected font">DOCS</a>

                    </div>
                    <a className="menu-icon">
                        <span className="hamburger-common hamburger-1"></span>
                        <span className="hamburger-common hamburger-2"></span>
                        <span className="hamburger-common hamburger-3"></span>
                    </a>
                </div>
            </div>
        </div>
        <div className="home-page">
        <div className="section-1">
            <section className="section-common ">
                <div className="normal-layout">
                    <div className="main-title">
                        <div className="left-1">
                            <h3 className="rofi-title">GALLUS FIGHTER<br /> <span className="defight-color">DEFIGHT</span></h3>
                            <p className="p-text">Decentralized Meme Coin Creates the BEST Metaverse on BSC</p>
                            <p className="p-text">ROOSTER FIGHT METAVERSE = NFT + GameFi + SmartToy + ROFI World</p>
                            <div className="btn-1">
                                <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x78a499a998bdd5a84cf8b5abe49100d82de12f1c" className="btn-color">BUY $ROFI</a>
                                <NavLink exact to="/blindbox" className="btn-border-color">ROFI APP</NavLink>
                                
                                <div className="contact">
                                    <a href="" className="contact-a">
                                        <img src={telegram} alt="discord logo" className="contact-logo"/>
                                    </a>
                                    <a href="" className="contact-a">
                                        <img src={twitter} alt="discord logo" className="contact-logo"/>
                                    </a>
                                    <a href="" className="contact-a">
                                        <img src={medium} alt="discord logo" className="contact-logo"/>
                                    </a>
                                    <a href="" className="contact-a">
                                        <img src={discord} alt="discord logo" className="contact-logo"/>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="right-1">
                            <img src={gallus} alt="logo jojo" className="image-right"/>
                        </div>

                    </div>
                    <div className="main-stats">
                        <div className="flex-box">
                            <h5 className="stats-numbers">64.25%</h5>
                            <p className="stats-text">Total supply to Black Hole</p>
                        </div>
                        <div className="flex-box">
                            <h5 className="stats-numbers">64.25%</h5>
                            <p className="stats-text">Total supply to Black Hole</p>
                        </div>
                        <div className="flex-box">
                            <h5 className="stats-numbers">64.25%</h5>
                            <p className="stats-text">Total supply to Black Hole</p>
                        </div>
                        <div className="flex-box">
                            <h5 className="stats-numbers">64.25%</h5>
                            <p className="stats-text">Total supply to Black Hole</p>
                        </div>
                        <div className="flex-box">
                            <h5 className="stats-numbers">64.25%</h5>
                            <p className="stats-text">Total supply to Black Hole</p>
                        </div>

                    </div>

                </div>

             </section>
            
            <section className="section-common1 ">
                <div className="normal-layout">
                    <h3 className="metaverse-title">GALLUS <span className="yellowColorText">DEFIGHT</span></h3>
                    <div className="metaverse-container">
                        <div className="box-3">
                            {/* <img src={icon1} alt="nft" className="metaverse-images" /> */}
                            <div className="metaverse-images"><i class="fas fa-gamepad"></i></div>
                            <h5 className="cards-title">De<span >Fi</span>ght<br /> <span className="defight-color">For <span>Fi</span>ght</span></h5>
                            <p className="cards-text">DeFight is a new concept blending a game where you fight other players in 1v1 with your hero with famous DeFi services.
                                Gallus Fighter opens a new era of unlimited possibilities with a First Blood game experience based on Blockchain technology. Choose your Gallus Titan between many different Origins and attributes, improve your skills with training and go fight other players in 1v1 battles and multiplayer deathmatches tournaments to rank up as best fighter of the DeFight Metaverse
                            </p>
                        </div>
                        <div className="box-3">
                            {/* <img src={icon2} alt="nft" className="metaverse-images" /> */}
                            <div className="metaverse-images"><i class="fas fa-hand-holding-usd"></i></div>
                            <h5 className="cards-title">De<span >Fi</span>ght<br /> <span className="defight-color">For <span>Fi</span>nance</span></h5>
                            <p className="cards-text">With the inception of the now-famous DeFi services, the crypto ecosystem has reached a new step in democratizing decentralized finance and fair wealth to the masses. Gallus Fighter is the next generation of DeFi services offering “classic” Staking, Farming and Exchange products but also new NFT-based yield products: breeding, Cast and many more to discover
                                “The DeFight concept will offer the best APY in the GameFi world on Gallus Fighter DeFi App”
                                In addition to these new DeFi possibilities, you will receive rewards in $GALLUS and through exclusive NFTs
                            </p>
                        </div>
                        <div className="box-3">
                            {/* <img src={icon3} alt="nft" className="metaverse-images" /> */}
                            <div className="metaverse-images"><i class="fas fa-feather-alt"></i></div>
                            <h5 className="cards-title">De<span >Fi</span>ght<br /> <span className="defight-color">For <span>Fi</span>gurine</span></h5>
                            <p className="cards-text">NFT stormed the crypto world and opened a new throng of possibilities by mixing real life assets with its digital counterparts, and beyond. The Gallus Fighter Metaverse will mix the last innovations in DeFi and Gaming by introducing the first NFT real-life Figurine to Collect, Stake, Play and earn in the Gaming App.
                                Get the chance to receive a real-life Figurine for your NFT Gallus Hero from our exclusive collection and receive dedicated skins, items and many other special benefits
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <section className="section-common section-3">
                <div className="normal-layout">
                    <h3 className="tokenomic-title">GALLUS <span className="yellowColorText">TOKENOMIC</span></h3>
                    <div className="main-tokenomic">
                        <p className="left-text">The $GALLUS token is a BEP-20 token running on the Binance Smart Chain (BSC). The BSC is one of the most powerful blockchain stack for decentralized projects looking for very low transaction fees.<br /><br />

                        The basis of $GALLUS Tokenomics is the “Henhouse Vault” burning concept. A large portion of the initial token supply will be locked into this specific address and gradually burned over time. In addition, a fair percentage of each transaction fee is automatically sent to the Vault.
                        The Henhouse Vault smart contract will burn $GALLUS each time it reaches pre-determined numbers of token wallet addresses.<br /> <br />

                        Liquidity will be provided through farming pairs on the Gallus Fighter DeFi App, starting with a BNB / GALLUS pool. A Liquidity boost mechanism will fuel the farm pool with tokens upheld from on-chain $GALLUS transactions.<br /> <br />

                        Redstribution, stream of value
                        </p>
                         <div className="token-image">
                             <img src={tokenomic} alt="tokenomic image " className="eggs"/>
                         </div>
                    </div>
                </div>
            </section>
            
            <section className="section-common section-4">
                <div className="normal-layout">
                    <h3 className="black-hole-title">BLACK HOLE <span className="yellowColorText">ALGORITHM</span></h3>
                    <div className="section-4-flex">
                        <div className="box-3">
                            
                       
                        
                            {/* <img src={blackHole1} className="box-3-img" alt="logo blackHole"/> */}
                            <div className="metaverse-images"><i class="fas fa-gamepad"></i></div>
                            <h5 className="box-title">Indestructible</h5>
                            <p className="box-text">Liquidity is locked in PancakeSwap, and the ownership of the contract has been transferred to the burning address.</p>
                        </div>
                        
                        <div className="box-3">
                            
                            {/* <img src={blackHole2} className="box-3-img" alt="logo blackHole"/> */}
                            <div className="metaverse-images"><i class="fas fa-gamepad"></i></div>
                            <h5 className="box-title">100% <br /> Decentralized</h5>
                            <p className="box-text">Gallus Tokens are led by community nodes and managed by volunteers. The ownership of the contract has been burned, and the start-up is completely implemented as liquidity.</p>
                        </div>
                        <div className="box-3">
                            
                            {/* <img src={blackHole3} className="box-3-img" alt="logo blackHole"/> */}
                            <div className="metaverse-images"><i class="fas fa-gamepad"></i></div>
                            <h5 className="box-title">Currency Holding Dividend Mechanism</h5>
                            <p className="box-text">4% of all transactions are allocated to holders. Watch the content your wallet climb the moment you hold $GALLUS.</p>
                        
                    </div>
                        

                    </div>
                    <div className="section-4-flex">
                        <div className="box-3">
                            {/* <img src={blackHole4} className="box-3-img" alt="logo blackHole"/> */}
                            <div className="metaverse-images"><i class="fas fa-gamepad"></i></div>
                            <h5 className="box-title">Fair Launch</h5>
                            <p className="box-text">100% of GALLUS supply is seeded as liquidity, which means that there is no presale and no allocation to team members.</p>
                        </div>
                        <div className="box-3">
                        
                            {/* <img src={blackHole5} className="box-3-img" alt="logo blackHole"/> */}
                            <div className="metaverse-images"><i class="fas fa-gamepad"></i></div>
                            <h5 className="box-title">Continuously Rising Price Floor</h5>
                            <p className="box-text">3% of every transaction fees is locked as liquidity in PancakeSwap GALLUS/BNB pool, creating an ever rising price floor.</p>
                        </div>
                        <div className="box-3">
                        
                            {/* <img src={blackHole6} className="box-3-img" alt="logo blackHole"/> */}
                            <div className="metaverse-images"><i class="fas fa-gamepad"></i></div>
                            <h5 className="box-title">Whale Shock Safety</h5>
                            <p className="box-text">No wallet holds more than 1% of token supply and no transaction can involve more than 10 billion tokens.</p>
                        </div>

                    </div>
                </div>
            </section>
             <section className="section-common section-4">
                <div className="normal-layout">
                    <h3 className="gallus-play2earn-title">GALLUS <span className="yellowColorText">PLAY-TO-EARN</span></h3>
                    <div className="container container-play2earn">
                        <div className="row ">
                            <div className="col-lg-7">
                                <div className="play2earn-left">
                                    <div className="play2earn-image-left">
                                        <img src={testimg} alt="" className="image-play2earn" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="play2earn-right">
                                    <h2 className="play2earn-title">Test en carton</h2>
                                    <p className="play2earn-text">fiueshf feuif iousheioufh siugefhsegoih osgh oisehigoh soghseg hioghiose hoigseiobg obgesiobgioseo ghoigsehiog hioeghiosehgi esoig </p>
                                </div>
                            </div>
                        </div>
                        <div className="row play2earn-margin">
                            <div className="col-lg-5">
                                <div className="play2earn-left2">
                                    <h2 className="play2earn-title">Test en carton</h2>
                                    <p className="play2earn-text">fiueshf feuif iousheioufh siugefhsegoih osgh oisehigoh soghseg hioghiose hoigseiobg obgesiobgioseo ghoigsehiog hioeghiosehgi esoig </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="play2earn-right2 ">
                                    <div className="play2earn-image-right">
                                        <img src={charles} alt="" className="image-play2earn" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row play2earn-margin">
                            <div className="col-lg-7">
                                <div className="play2earn-left">
                                    <div className="play2earn-image-left">
                                        <img src={halo} alt="" className="image-play2earn" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="play2earn-right">
                                    <h2 className="play2earn-title">Test en carton</h2>
                                    <p className="play2earn-text">fiueshf feuif iousheioufh siugefhsegoih osgh oisehigoh soghseg hioghiose hoigseiobg obgesiobgioseo ghoigsehiog hioeghiosehgi esoig </p>
                                </div>
                            </div>
                        </div>
                        <div className="row play2earn-margin">
                            <div className="col-lg-5">
                                <div className="play2earn-left2">
                                    <h2 className="play2earn-title">Test en carton</h2>
                                    <p className="play2earn-text">fiueshf feuif iousheioufh siugefhsegoih osgh oisehigoh soghseg hioghiose hoigseiobg obgesiobgioseo ghoigsehiog hioeghiosehgi esoig </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="play2earn-right2 ">
                                    <div className="play2earn-image-right">
                                        <img src={space} alt="" className="image-play2earn" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-common section-3">
                <div className="normal-layout">
                    <h3 className="tokenomic-title">GALLUS <span className="yellowColorText">FIGURINE</span></h3>
                    <div className="main-tokenomic">
                        <p className="left-text">GALLUS Token is issued based on the Binance Smart Chain, which is completely decentralized, without any private equity and team reservations, and adopts a super combustion mechanism to make the number of Tokens burn very quickly, greatly reducing the circulation of the total supply. Under the premise of fair issuance, GALLUS will trigger the corresponding Token distribution for each transfer or transaction on the chain, which includes currency holding income,
                         Token burn and NFT mining pool, and will burn all private keys to ensure its fairness.</p>
                         <div className="token-image">
                             <img src={figurine} alt="tokenomic image " className="eggs"/>
                         </div>
                    </div>
                </div>
            </section>
            <section className="section-5">
                <div class="container container-metamask">
                    <div class="row" >
                        <div class="col-md-6">
                            <img src={metamask1} className="image-metamask" alt="metamask"/>
                        </div>
                        <div class="col-md-6 middle">
                            <h3 className="section-5-title">How To Buy <br /> $GALLUS ?</h3>
                            <h5 className="section-5-second-title">Create a wallet</h5>
                            <p className="first-text">On Google Chrome, visit <strong>metamask.io</strong> to download the extension and set up the wallet. Android and IOS users can download the <strong>Trust Wallet</strong> app.</p>
                        </div>
                        </div>
                        <div class="row margin-top" >
                        
                        <div class="col-md-6 middle"  >
                            
                            <h5 className="create-wallet-title">Create a wallet</h5>
                            <p className="first-text">On Google Chrome, visit <strong>metamask.io</strong> to download the extension and set up the wallet. Android and IOS users can download the <strong>Trust Wallet</strong> app.</p>
                        </div>
                        <div class="col-md-6">
                            <img src={metamask2} className="image-metamask" alt="metamask"/>
                        </div>
                        </div>
                        <div className="row margin-top padding-bottom">
                        <div class="col-md-6">
                            <img src={metamask3} className="image-metamask" alt="metamask"/>
                        </div>
                        
                        <div className="col-md-6 middle" >
                            
                            <h5 className="create-wallet-title">Use $BNB to exchange $COCK</h5>
                            <p className="first-text">Go to the DApps tab at the bottom, find <strong> PancakeSwap V2 </strong>  , click “Choose Currency”, enter the contract address in the search bar, and you should be able to find COCK.<br/>
                            GALLUS FIGHTER counterparty address: Before the exchange, click the gear and set the <strong> slide to 12-15% </strong>  , set the amount you want to buy and click the exchange button.
                            </p>
                            <p className="first-text"> PancakeSwap :<br /> https://exchange.pancakeswap.finance
                            </p>
                            <p className="first-text"></p>
                        </div>
               
                    </div>
                </div>

            </section>
            
            <section className="section-7">
                <div className="normal-layout">
                    <h3 className="partners-title">GALLUS <span className="yellowColorText">PARTNERS</span></h3>
                    <div className="list-partners">
                        <a href="" className="item-partner">
                            <img src={binance} className="img-partners" alt="logo partners" />
                        </a>
                        <a href="" className="item-partners">
                            <img src={binanceNFT} className="img-partners" alt="logo partners" />
                        </a>
                        <a href="" className="item-partners">
                            <img src={coinmarket} className="img-partners" alt="logo partners" />
                        </a>
                        <a href="" className="item-partners">
                            <img src={coingecko} className="img-partners" alt="logo partners" />
                        </a>
                        <a href="" className="item-partner">
                            <img src={cryptonews} className="img-partners" alt="logo partners" />
                        </a>
                        <a href="" className="item-partners">
                            <img src={certik} className="img-partners" alt="logo partners" />
                        </a>
                        <a href="" className="item-partners">
                            <img src={trustwallet} className="img-partners" alt="logo partners" />
                        </a>
                        <a href="" className="item-partners">
                            <img src={pancakeswap} className="img-partners" alt="logo partners" />
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <div className="gallus-team-container">
                    <div className="normal-layout">
                    
                        <div className="team-container container">
                            <div className="team-gallus row">
                            <h3 className="team-main-title">GALLUS <span className="yellowColorText">TEAM</span></h3>
                                <div className="box-team col-lg-4">
                                    <img src={veeno} className="team-image" alt="gallus team"/> 
                                    <h3 className="team-titre">VEENO</h3>
                                    <h5 className="team-sous-titre">DEVOLOPPER FRONT-END</h5>
                                    {/* <p className="team-text">lfkiolsen ofnsoiefn nefonsofn soenf oinsefn senfsneo nfosnen nsek fnselnf lksen f</p> */}
                                </div>
                                <div className="box-team col-lg-4">
                                    <img src={miz} className="team-image" alt="gallus team"/> 
                                    <h3 className="team-titre">MIZ</h3>
                                    <h5 className="team-sous-titre">GENIUS DESIGN</h5>
                                    {/* <p className="team-text">lfkiolsen ofnsoiefn nefonsofn soenf oinsefn senfsneo nfosnen nsek fnselnf lksen f</p> */}
                                </div>
                                <div className="box-team col-lg-4">
                                    <img src={nico} className="team-image" alt="gallus team"/> 
                                    <h3 className="team-titre">SQUARX</h3>
                                    <h5 className="team-sous-titre">COMMUNITY MANAGER<br /> CO-FOUNDER</h5>
                                    {/* <p className="team-text">lfkiolsen ofnsoiefn nefonsofn soenf oinsefn senfsneo nfosnen nsek fnselnf lksen f</p> */}
                                </div>
                                <div className="box-team col-lg-4">
                                    <img src={sylvain} className="team-image" alt="gallus team"/> 
                                    <h3 className="team-titre">NIAVLYS</h3>
                                    <h5 className="team-sous-titre">PROJECT MANAGER<br /> CO-FOUNDER</h5>
                                    {/* <p className="team-text">lfkiolsen ofnsoiefn nefonsofn soenf oinsefn senfsneo nfosnen nsek fnselnf lksen f</p> */}
                                </div>
                                <div className="box-team col-lg-4">
                                    <img src={macron} className="team-image" alt="gallus team"/> 
                                    <h3 className="team-titre">MACRON</h3>
                                    <h5 className="team-sous-titre">PRESS RELATIONSHIP</h5>
                                    {/* <p className="team-text">lfkiolsen ofnsoiefn nefonsofn soenf oinsefn senfsneo nfosnen nsek fnselnf lksen f</p> */}
                                </div>
                                <div className="box-team col-lg-4">
                                    
                                    <img src={niho} className="team-image" alt="gallus team"/> 
                                    <h3 className="team-titre">NIHOAME</h3>
                                    <h5 className="team-sous-titre">GENIUS DESIGN</h5>
                                    {/* <p className="team-text"> lfkiolsen ofnsoiefn nefonsofn soenf oinsefn senfsneo nfosnen nsek fnselnf lksen f</p> */}
                                </div>
                                <div className="box-team col-lg-4">
                                    <img src={veeno} className="team-image" alt="gallus team"/> 
                                    <h3 className="team-titre">BIOS42</h3>
                                    <h5 className="team-sous-titre">DEVELOPPER BLOCKCHAIN</h5>
                                    {/* <p className="team-text"> lfkiolsen ofnsoiefn nefonsofn soenf oinsefn senfsneo nfosnen nsek fnselnf lksen f</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-8 bottom-8">
                <div className="normal-layout">
                    <h3 className="faq-title">FAQ</h3>
                    <ul className="faq-list">
                        <li className="faq-item">
                            <div className="item-title">
                                <span className="tags">1</span>
                                What’s the tokenomics of "Gallus Fighter"? And how do we expect the price of "Gallus Fighter"?
                            </div>
                            <div className="item-text">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                        </li>
                        <li className="faq-item">
                            <div className="item-title">
                                <span className="tags">2</span>
                                What’s the tokenomics of "Gallus Fighter"? And how do we expect the price of "Gallus Fighter"?
                            </div>
                            <div className="item-text">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                        </li>
                        <li className="faq-item">
                            <div className="item-title">
                                <span className="tags">3</span>
                                What’s the tokenomics of "Gallus Fighter"? And how do we expect the price of "Gallus Fighter"?
                            </div>
                            <div className="item-text">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                        </li>
                        <li className="faq-item">
                            <div className="item-title">
                                <span className="tags">4</span>
                                What’s the tokenomics of "Gallus Fighter"? And how do we expect the price of "Gallus Fighter"?
                            </div>
                            <div className="item-text">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                        </li>
                        <li className="faq-item">
                            <div className="item-title">
                                <span className="tags">5</span>
                                What’s the tokenomics of "GALLUS"? And how do we expect the price of "GALLUS"?
                            </div>
                            <div className="item-text">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                        </li>

                    </ul>

                </div>
            </section>
            <section className="section-9">
                <div className="normal-layout">
                    <div className="contact-footer">
                        <a href="" className="contact-link">
                            <img src={footerTwitter} alt="twitter logo" className="img-footer" />
                        </a>
                        <a href="" className="contact-link">
                            <img src={footerMedium} alt="twitter logo" className="img-footer" />
                        </a>
                        <a href="" className="contact-link">
                            <img src={footerTelegram} alt="twitter logo" className="img-footer" />
                        </a>
                        <a href="" className="contact-link">
                            <img src={footerMessage} alt="twitter logo" className="img-footer" />
                        </a>
                    </div>
                </div>
            </section> 
            
            <section className="section-10">
                <div className="normal-layout">
                    <div className="footer-copyright">
                        
                        Copyright© 2021 Gallus Fighter - Veeno - All rights reserved.
      
                    </div>
                </div>
            </section>
            

        </div>
        
    </div>
    )
}

export default Home;