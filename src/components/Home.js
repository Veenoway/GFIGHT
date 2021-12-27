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
import niho from "../images/niho.jpg";
import bios from "../images/bios.jpg";
import $ from 'jquery';
import title from "../images/title.png"
import icon_2 from "../images/Asset_2.png";
import controller from "../images/gamecontroller.png";
import farm from "../images/farm.png";
import governance from "../images/Governance.png";
import reward from "../images/reward1.png";
import stacking from "../images/stacking.png";
import mining from "../images/mining.png";
import swap from "../images/swap.png";
import figurines from "../images/figurine.png";
import finance from "../images/finance.png";
import fightgallus from "../fight_chicken.png";
import docpiece from "../images/doc_piece.png";
import eggs from "../images/oeuf.png";
import VideoLarge from "../images/large.mp4";
import logoGallus from "../images/logoGallus.png";
import team from "../images/moov.png";
import mine from "../images/troll.png";
import mine1 from "../images/mine1.png"




const Home = () => {


    $(function () {
        $(window).on('scroll', function () {
            if ( $(window).scrollTop() > 10 ) {
                $('.header-fixed').addClass('actives');
            } else {
                $('.header-fixed').removeClass('actives');
            }
        });
    });


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


    // function afficher() {

    //     const faq5 = document.getElementById('faq5');
    //     const answer5 = document.createElement('div');
    //     faq5.appendChild(answer5);
    //     answer5.classList.add('item-text');
    //     answer5.style.display = 'none';
    //     answer5.innerHTML = ' At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.'
        
    //     if ( answer5.style.display == "none") {
    //         answer5.style.display = "flex";
    //     } else {
    //         answer5.style.display = "none"
    //     }

            
    // }

    function AfficherMasquer() {

        var faq5 = document.getElementById('faq5');
        var arrow = document.getElementById('arrow5')
        
        if ( faq5.style.display == 'none') {
            
            faq5.style.display = 'flex';
            arrow.style.transform = 'rotate(0.5turn)';
        }
        
        else {

            arrow.style.transform = 'rotate(0turn)';
            faq5.style.display = 'none';

        }
        
    }
    function AfficherMasquer4() {

        var faq5 = document.getElementById('faq4');
        var arrow = document.getElementById('arrow4')
        
        if ( faq5.style.display == 'none') {

            faq5.style.display = 'flex';
            arrow.style.transform = 'rotate(0.5turn)';
        } 
        else {

            faq5.style.display = 'none';
            arrow.style.transform = 'rotate(0turn)';

        }
        
         
    }

    function AfficherMasquer3() {

        var faq5 = document.getElementById('faq3');
        var arrow = document.getElementById('arrow3')
        
        if ( faq5.style.display == 'none') {

        faq5.style.display = 'flex';
        arrow.style.transform = 'rotate(0.5turn)';

        }
        else {

            faq5.style.display = 'none';
            arrow.style.transform = 'rotate(0turn)';
        }
        
         
    }

    function AfficherMasquer2() {

        var faq5 = document.getElementById('faq2');
        var arrow = document.getElementById('arrow2')
        
        if ( faq5.style.display == 'none') {

            faq5.style.display = 'flex';
            arrow.style.transform = 'rotate(0.5turn)';
    
            }
            else {
    
                faq5.style.display = 'none';
                arrow.style.transform = 'rotate(0turn)';
            }
         
    }

    function AfficherMasquer1() {

        var faq5 = document.getElementById('faq1');
        var arrow = document.getElementById('arrow1')
        
        if ( faq5.style.display == 'none') {

            faq5.style.display = 'flex';
            arrow.style.transform = 'rotate(0.5turn)';
    
        }
        else {
    
            faq5.style.display = 'none';
            arrow.style.transform = 'rotate(0turn)';
        }
         
    }


    

    function showHeader() {
        const hamburger = document.getElementById('navClick');
        if (hamburger.style.display == "none") {

            hamburger.style.display = "flex"
        }
        else 
            hamburger.style.display = "none"
            



           

    }

    function Afficher() {
        
    }

  
        
    
    return (
    <div classname="home">
        <div className="header">
            <div className="header-fixed">
                <div className="container-nav-2">
                    
                    
                    {/* <div className="space"></div> */}
                    <div className="nav-list ">
                        <NavLink exact to="/" className="selected font">HOME</NavLink>
                        <NavLink exact to="/#ystery-box" className="unselected font">MYSTERY BOX</NavLink>
                        <NavLink exact to="/gallus-story" className="unselected font">STORY</NavLink>
                        <NavLink exact to="/" className="selected font"><img src={logoGallus} className="logoMain"/></NavLink>
                        <NavLink exact to="/community" className="unselected font">COMMUNITY</NavLink>
                        
                        
                        
                        <a href="/#mystery-box" className="unselected font">APP</a>
                        <a href="https://galluspaper.gallusfighter.com/" className="unselected font">DOCS</a>

                    </div>
                    <img src={logoGallus} className="barreNav-logo" />
                    <a className="menu-icon cursor" id="menu-icon" onClick={showHeader}>
                        <i class="fas fa-bars"></i>
                        
                    </a>
                    <div className="navClick" id="navClick">
                        {/* <img src={gallus} className="logo-nav-mobile" /> */}
                        <ul className="ul-popup">
                            <NavLink exact to="/" className="li-popup"><li>HOME</li></NavLink>
                            <NavLink exact to="/mystery-box"className="li-popup"><li>PRE-SALE</li></NavLink>
                            <NavLink exact to="/gallus-story" className="li-popup"><li>GALLUS STORY</li></NavLink>
                            <NavLink exact to="/community" className="li-popup"><li>COMMUNITY</li></NavLink>
                            <NavLink exact="/mystery-box" className="li-popup"><li>APP</li></NavLink>
                            <a href="https://galluspaper.gallusfighter.com/" className="li-popup"><li>DOCS</li></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-page">
        <div className="section-1">
            <section className="section-common heightMain">
                <div className="normal-layout">
                    <div className="main-title">
                        <div className="left-1">
                            <h3 className="rofi-title">GALLUS FIGHTER<br /> <span className="defight-color">DEFIGHT</span></h3>
                            <p className="p-text">Participate with your GALLUS NFTs in bloody battles and collect your rewards when you are victorious!</p>
                            <p className="p-text">Upgrade your GALLUS FIGHTER, train it or use any DeFi services with your NFTs and/or $GALLUS Tokens and take your profits!</p>
                            <div className="btn-1">
                                <a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x78a499a998bdd5a84cf8b5abe49100d82de12f1c" className="btn-border-color disabled">
                                <img src={icon_2} className="icon-btn " />
                                    LAUNCH 
                                
                                </a>
                                <NavLink exact to="/mystery-box" className="btn-border-color">
                                    <img src={controller} className="icon-btn" />
                                   Gallus APP
                                    
                                </NavLink>
                                
                                <div className="contact">
                                    <a href="https://t.me/gallus_fighter " target="_blank" className="contact-a">
                                        {/* <img src={telegram} alt="discord logo" className="contact-logo"/> */}
                                        <i class="fab fa-telegram-plane contact-logo contact-logo-a"></i>
                                    </a>
                                    <a href="https://twitter.com/GallusFighter" target="_blank" className="contact-a">
                                        {/* <img src={twitter} alt="discord logo" className="contact-logo"/> */}
                                        <i class="fab fa-twitter contact-logo contact-logo-b"></i>
                                    </a>
                                    <a href="https://medium.com/@gallusfighter" target="_blank" className="contact-a">
                                        {/* <img src={medium} alt="discord logo" className="contact-logo"/> */}
                                        <i class="fab fa-medium-m contact-logo contact-logo-c"></i>
                                    </a>
                                    <a href="https://discord.gg/vGe43sRgNr" target="_blank" className="contact-a">
                                        {/* <img src={discord} alt="discord logo" className="contact-logo"/> */}
                                        <i class="fab fa-discord contact-logo contact-logo-d"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="right-home">
                            <img src={gallus} alt="logo jojo" className="image-right"/>
                        </div>

                    </div>
                    {/* <div className="main-stats">
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

                    </div> */}

                </div>

             </section>
            
            <section className="section-common1 ">
                <div className="normal-layout">
                    <h3 className="metaverse-title">GALLUS <span className="yellowColorText">DEFIGHT</span></h3>
                    <div className="metaverse-container">
                        <div className="box-3">
                            <img src={icon_2} alt="nft" className="metaverse-images" />
                            
                            <h5 className="cards-title">De<span >Fi</span>ght<br /> <span className="defight-color">For <span>Fi</span>ght</span></h5>
                            <p className="cards-text">DeFight is a new concept blending a game where you fight other players in 1v1 with your hero with famous DeFi services.
                                Gallus Fighter opens a new era of unlimited possibilities with a First Blood game experience based on Blockchain technology. Choose your Gallus Titan between many different Origins and attributes, improve your skills with training and go fight other players in 1v1 battles and multiplayer deathmatches tournaments to rank up as best fighter of the DeFight Metaverse
                            </p>
                        </div>
                        <div className="box-3">
                            {/* <img src={icon2} alt="nft" className="metaverse-images" /> */}
                            <img src={finance} alt="nft" className="metaverse-images" />
                            <h5 className="cards-title">De<span >Fi</span>ght<br /> <span className="defight-color">For <span>Fi</span>nance</span></h5>
                            <p className="cards-text">With the inception of the now-famous DeFi services, the crypto ecosystem has reached a new step in democratizing decentralized finance and fair wealth to the masses. Gallus Fighter is the next generation of DeFi services offering “classic” Staking, Farming and Exchange products but also new NFT-based yield products: breeding, Cast and many more to discover
                                “The DeFight concept will offer the best APY in the GameFi world on Gallus Fighter DeFi App”
                                In addition to these new DeFi possibilities, you will receive rewards in $GALLUS and through exclusive NFTs
                            </p>
                        </div>
                        <div className="box-3">
                            {/* <img src={icon3} alt="nft" className="metaverse-images" /> */}
                            <img src={figurines} alt="nft" className="metaverse-images" />
                            <h5 className="cards-title">De<span >Fi</span>ght<br /> <span className="defight-color">For <span>Fi</span>gurine</span></h5>
                            <p className="cards-text">NFT stormed the crypto world and opened a new throng of possibilities by mixing real life assets with its digital counterparts, and beyond. The Gallus Fighter Metaverse will mix the last innovations in DeFi and Gaming by introducing the first NFT real-life Figurine to Collect, Stake, Play and earn in the Gaming App.
                                Get the chance to receive a real-life Figurine for your NFT Gallus Hero from our exclusive collection and receive dedicated skins, items and many other special benefits
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            {/* <section className="section-common section-3">
                <div className="normal-layout">
                    <h3 className="tokenomic-title">GALLUS <span className="yellowColorText">PRE SALE </span></h3>
                    <div className="main-tokenomic">
                        <p className="left-text-2">The $GALLUS token is a BEP-20 token running on the Binance Smart Chain (BSC). The BSC is one of the most powerful blockchain stack for decentralized projects looking for very low transaction fees.<br /><br />

                        The basis of $GALLUS Tokenomics is the “Henhouse Vault” burning concept. A large portion of the initial token supply will be locked into this specific address and gradually burned over time. In addition, a fair percentage of each transaction fee is automatically sent to the Vault.
                        The Henhouse Vault smart contract will burn $GALLUS each time it reaches pre-determined numbers of token wallet addresses.<br /> <br />

                        Liquidity will be provided through farming pairs on the Gallus Fighter DeFi App, starting with a BNB / GALLUS pool. A Liquidity boost mechanism will fuel the farm pool with tokens upheld from on-chain $GALLUS transactions.<br /> <br />

                        Redstribution, stream of value
                        </p>
                        <NavLink exact to="/mystery-box" className="btn-border-color-2">
                                    <img src={controller} className="icon-btn" />
                                   GET YOURS !
                                    
                                </NavLink>
                         <div className="token-image-2">
                    </div>
                    <div>
                         <div className="image-container ">
                            <div className="neon-nft-perso"></div>
                                {/* <img src={exemple2} alt="" className="image-nft-box" /> */}
                                {/* <video  width="250" className="image-nft-box-2 " autoPlay muted loop>
                                <source src={VideoLarge} type="video/webm" autoplay loop/>
                                <source src={VideoLarge}type="video/mp4" autoplay loop/>
                            </video>
                            
                            </div>
                         </div>
                    </div>
                </div>
            </section> */} 
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
                    {/* <img src={title} className="img-title" />  */}
                    <h3 className="metaverse-title">Gallus Defi</h3>
                    <div className="section-4-flex">
                        <div className="box-3">
                            
                       
                        
                            {/* <img src={blackHole1} className="box-3-img" alt="logo blackHole"/> */}
                            <img src={swap} alt="nft" className="metaverse-images" />
                            <h5 className="box-title">SWAP / LIQUIDITY</h5>
                            <p className="box-text">Become a liquidity provider ! Every time someone provides liquidity, they will be rewarded with commissions in $GALLUS Tokens when other people in the Gallus community use our liquidity pool. </p>
                        </div>
                        
                        <div className="box-3">
                            
                            {/* <img src={blackHole2} className="box-3-img" alt="logo blackHole"/> */}
                            <img src={stacking} alt="nft" className="metaverse-images" />
                            <h5 className="box-title">STAKING</h5>
                            <p className="box-text">Staking is the process of delegating and/or locking your Tokens to earn rewards in $GALLUS Tokens. Participe to the Next-Generation Staking Pools
</p>
                        </div>
                        <div className="box-3">
                            
                            {/* <img src={blackHole3} className="box-3-img" alt="logo blackHole"/> */}
                            <img src={farm} alt="nft" className="metaverse-images" />
                            <h5 className="box-title">FARMING</h5>
                            <p className="box-text">Farming is a great way to earn rewards in $GALLUS Tokens. Unlike Staking, Farms are made to work with 2 tokens, like $GALLUS&BNB, in order to get new Tokens called LP (Liquidity Provider). Put them into the Farm to earn rewards.
</p>
                        
                    </div>
                        

                    </div>
                    <div className="section-4-flex">
                        <div className="box-3">
                            {/* <img src={blackHole4} className="box-3-img" alt="logo blackHole"/> */}
                            <img src={mining} alt="nft" className="metaverse-images" />
                            <h5 className="box-title">MINING</h5>
                            <p className="box-text">Contribute easily and without knowledge to several online blockchains by owning miners that earn tokens! Done with legal cleanliness and compliance with the necessary protection measures at the facility.</p>
                        </div>
                        <div className="box-3">
                        
                            {/* <img src={blackHole5} className="box-3-img" alt="logo blackHole"/> */}
                            <img src={governance} alt="nft" className="metaverse-images" />
                            <h5 className="box-title">GOVERNANCE</h5>
                            <p className="box-text">Governance is a democratic process that allows each active member to submit or vote on proposals for changes, improvements or evolutions to the entire GALLUS community. To participate in Governance you must commit a certain amount of your $GALLUS Tokens</p>
                        </div>
                        <div className="box-3">
                        
                            {/* <img src={blackHole6} className="box-3-img" alt="logo blackHole"/> */}
                            <img src={reward} alt="nft" className="metaverse-images" />
                            <h5 className="box-title">REWARDS HOLDERS</h5>
                            <p className="box-text">This rewards process is established only for $GALLUS Tokens holders who regularly receive in their wallet an amount in Tokens for their loyalty.
</p>
                        </div>

                    </div>
                </div>
            </section>
           
            
             <section className="section-common section-4-2">
                <div className="normal-layout">
                    <h3 className="gallus-play2earn-title">GALLUS <span className="yellowColorText">PLAY-TO-EARN</span></h3>
                    <div className="container container-play2earn">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="play2earn-left">
                                    <div className="play2earn-image-left">
                                        <img src={eggs} alt="" className="image-play2earn" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="play2earn-right">
                                    <h2 className="play2earn-title">GALLUS</h2>
                                    <p className="play2earn-text-left">Born from a cloning experiment gone wrong, the Gallus are Dino-Coqs who have only one mission: to become the best fighter of the Metaverse. Each Gallus is unique and possess their own specific fighting skills and attributes. From now on the Blockchain can count on these new fighting Heroes!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row play2earn-margin reverse">
                            <div className="col-lg-6">
                                <div className="play2earn-left2">
                                    <h2 className="play2earn-title-right">1 vs 1</h2>
                                    <p className="play2earn-text">Gallus Fighter is an e-sport game featuring 2 heroes dueling in an all out merciless battle! Representatives from all over the world have close eyes on these clashs to see who will come as the strongest Gallus in the whole blockchain Metaverse.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="play2earn-right2 ">
                                    <div className="play2earn-image-right">
                                        <img src={mine} alt="" className="image-play2earn" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row play2earn-margin">
                            <div className="col-lg-6">
                                <div className="play2earn-left">
                                    <div className="play2earn-image-left">
                                        <img src={mine1} alt="" className="image-play2earn" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="play2earn-right">
                                    <h2 className="play2earn-title">Smart tools</h2>
                                    <p className="play2earn-text-left">Smart tools like Upgrade, Breeding or Training are at the core of the Gallus Fighter gameplay! When these fighting heroes are not fighting, their only wish is in becoming better and stronger by leveraging, for example, "training"for a fixed term to improve fighting stats...</p>
                                </div>
                            </div>
                        </div>
                        <div className="row play2earn-margin reverse">
                            <div className="col-lg-6">
                                <div className="play2earn-left2">
                                    <h2 className="play2earn-title-right">Earn $Gallus Tokens</h2>
                                    <p className="play2earn-text">When you reach victory through your feathers, you will be fulfilled with a rainfall of $Gallus Token rewards! Gallus Fighter is the fighting game that best rewards its fighters with Jackpots never seen before in the GameFi Metavers! By stacking your $GALLUS wealth, live it up to use them in the various services of the DeFight Metaverse or just treat yourself for the hard work !</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="play2earn-right2 ">
                                    <div className="play2earn-image-right">
                                        <img src={docpiece} alt="" className="image-play2earn" />
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
                    <div class="row reverse" >
                        <div class="col-md-6 img-meta width100">
                            <img src={metamask1} className="image-metamask" alt="metamask"/>
                        </div>
                        <div class="col-md-6 middle width100">
                            <h3 className="section-5-title">How To Buy <br /> $GALLUS ?</h3>
                            <h5 className="section-5-second-title">Create a wallet</h5>
                            <p className="first-text">On Google Chrome, visit <strong>metamask.io</strong> to download the extension and set up the wallet. Android and IOS users can download the <strong>Trust Wallet</strong> app.</p>
                        </div>
                        </div>
                        <div class="row margin-top" >
                        
                        <div class="col-md-6 middle2 width100"  >
                            
                            <h5 className="create-wallet-title ">Create a wallet</h5>
                            <p className="first-text">On Google Chrome, visit <strong>metamask.io</strong> to download the extension and set up the wallet. Android and IOS users can download the <strong>Trust Wallet</strong> app.</p>
                        </div>
                        <div class="col-md-6 img-meta width100">
                            <img src={metamask2} className="image-metamask" alt="metamask"/>
                        </div>
                        </div>
                        <div className="row margin-top padding-bottom reverse">
                        <div class="col-md-6 width100">
                            <img src={metamask3} className="image-metamask" alt="metamask"/>
                        </div>
                        
                        <div className="col-md-6 middle width100" >
                            
                            <h5 className="section-5-second-title">Use $BNB to exchange $COCK</h5>
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
            
            {/* <section className="section-7">
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
            </section> */}
            {/* <section className="blackBg">
            <h3 className="partners-title">GALLUS <span className="yellowColorText">ROADMAP</span></h3>
            <div className="timeline">
            
                <ul className="timeline-ul">
                    <li className="timeline-li">
                        <div className="contents">
                            <h3>fhofhsoihfpeshf</h3>
                            <p>
                                loihsoihivh jhshfp ehshf sejfopjseopfjpsejfpoj sepofjsoejfoj espfjpse f
                               
                            </p>
                            <div className="time">
                                <h4>January 2018</h4>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-li">
                        <div className="contents">
                            <h3>fhofhsoihfpeshf</h3>
                            <p>
                                loihsoihivh jhshfp ehshf sejfopjseopfjpsejfpoj sepofjsoejfoj espfjpse f
                                
                            </p>
                            <div className="time">
                                <h4>January 2018</h4>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-li">
                        <div className="contents">
                            <h3>fhofhsoihfpeshf</h3>
                            <p>
                                loihsoihivh jhshfp ehshf sejfopjseopfjpsejfpoj sepofjsoejfoj espfjpse f
                                
                            </p>
                            <div className="time">
                                <h4>January 2018</h4>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-li">
                        <div className="contents">
                            <h3>fhofhsoihfpeshf</h3>
                            <p>
                                loihsoihivh jhshfp ehshf sejfopjseopfjpsejfpoj sepofjsoejfoj espfjpse f
                                
                            </p>
                            <div className="time">
                                <h4>January 2018</h4>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-li">
                        <div className="contents">
                            <h3>fhofhsoihfpeshf</h3>
                            <p>
                                loihsoihivh jhshfp ehshf sejfopjseopfjpsejfpoj sepofjsoejfoj espfjpse f
                                
                            </p>
                            <div className="time">
                                <h4>January 2018</h4>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-li">
                        <div className="contents">
                            <h3>fhofhsoihfpeshf</h3>
                            <p>
                                loihsoihivh jhshfp ehshf sejfopjseopfjpsejfpoj sepofjsoejfoj espfjpse f
                                
                            </p>
                            <div className="time">
                                <h4>January 2018</h4>
                            </div>
                        </div>
                    </li>
                    <li className="timeline-li">
                        <div className="contents">
                            <h3>fhofhsoihfpeshf</h3>
                            <p>
                                loihsoihivh jhshfp ehshf sejfopjseopfjpsejfpoj sepofjsoejfoj espfjpse f
                                
                            </p>
                            <div className="time">
                                <h4>January 2018</h4>
                            </div>
                        </div>
                    </li>
                    <div className="clear"></div>
                </ul>
                </div>
            </section> */}



            <section className="background-team"><h3 className="team-main-title">GALLUS <span className="yellowColorText">TEAM</span></h3>
                <div className="background-teamMooving"></div>
                <div className="gallus-team-container">
                    <div className="normal-layout">
                    
                                
                                
                                
                                
                            
{/*                     
                        <div className="team-container container">
                            <div className="team-gallus row">
                            </div>
                        </div> */}
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
                                <a className="fleche1" onClick={AfficherMasquer1}><i class="fas fa-arrow-circle-down" id="arrow1"></i></a>
                            </div>
                            <div className="item-text" id="faq1">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                        </li>
                        <li className="faq-item">
                        
                            <div className="item-title">
                                <span className="tags">2</span>
                                What’s the tokenomics of "Gallus Fighter"? And how do we expect the price of "Gallus Fighter"?
                                <a className="fleche1" onClick={AfficherMasquer2}><i class="fas fa-arrow-circle-down" id="arrow2"></i></a>
                            </div>
                            <div className="item-text" id="faq2">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                        </li>
                        <li className="faq-item">
                        
                            <div className="item-title">
                                <span className="tags">3</span>
                                What’s the tokenomics of "Gallus Fighter"? And how do we expect the price of "Gallus Fighter"?
                                <a className="fleche1" onClick={AfficherMasquer3}><i class="fas fa-arrow-circle-down" id="arrow3"></i></a>
                            </div>
                            <div className="item-text" id="faq3">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                            
                        </li>
                        <li className="faq-item">
                       
                            <div className="item-title" >
                                <span className="tags">4</span>
                                What’s the tokenomics of "Gallus Fighter"? And how do we expect the price of "Gallus Fighter"?
                                <a className="fleche1" onClick={AfficherMasquer4}><i class="fas fa-arrow-circle-down" id="arrow4"></i></a>
                            </div>
                            <div className="item-text" id="faq4">
                            At the begining, 50% of GALLUS tokens will be burned by sending to "Black Hole Account". 10% of each transaction amount on the $GALLUS chain will be deducted and redistributed, of which: 4% is allocated to the currency holding address; 3% is allocated to NFT POOL; 3% is exchanged for $GALLUS/$BNB and injected into PancakeSwap 2.0 liquidity pool. These have guaranteed a continuously rising price floor.
                            </div>
                            
                        </li>
                        <li className="faq-item" >
                            
                            <div className="item-title">
                                <span className="tags">5</span>
                                What’s the tokenomics of "GALLUS"? And how do we expect the price of "GALLUS"?
                                <a className="fleche1"  onClick={AfficherMasquer}><i class="fas fa-arrow-circle-down" id="arrow5"></i></a>
                            </div>
                            <div className="item-text" id="faq5">
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
                        
                        Copyright© 2021 Gallus Fighter - All rights reserved.
      
                    </div>
                </div>
            </section>
            

        </div>
        
    </div>
    )
}

export default Home;