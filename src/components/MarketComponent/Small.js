import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cards from "../Cards";
import CardMedium from "./CardMedium";

import Header from "../Header";
import CardSmall from "./CardSmall";





const Small = () => {

    const [data, setData] = useState([])
    const [test, setTest] = useState([])

    useEffect(() => {

        axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then((res) => 
            setData(res.data)
            
        )

        console.log(data)
        for (let i=0;i<data.length;i++) {

            var tt = data[i].director
            console.log(tt)

           

                

                var testu = `{data.map((image) => (
                    
                    <Cards image={image} key={image.title} />
            
                    ))}
                    <h2>fdnhoisfnhsoenf oifopise</h2>
                    <h1>dhnvrhnoiesiofjso</h1>`
                
                
                    document.getElementById('mediumData').innerHTML = testu
        
        
            

            console.log(data[i].director)
        }

        

    }, [])
    
    
    
    function AfficherMasquer()
                    {
                    var divInfo = document.getElementById('popup');
                     
                    if (divInfo.style.display == 'none')
                    divInfo.style.display = 'block';
                    else
                    divInfo.style.display = 'none';
                     
                    }
    
    
    function activeClass() {

        
        

    }
    
    
    
    
    const medium = document.getElementById('medium');

    return (


    <div className="pool" id="none">
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
                            Pre Sale 
                                <span className="tag ">HOT</span>
                            </NavLink>
                        </li>
                        
                        <li class="menut-item ">
                            <NavLink exact to="/" activeClassName="nav-active " className="display ">
                            <i class="fas fa-home yellow-icon"></i>Website
                                
                            </NavLink>
                        </li>
                        <li class="menut-item ">
                            <NavLink to="/nft-market" activeClassName="nav-active " className="display">
                            <i class="fas fa-shopping-cart yellow-icon"></i>NFT Market
                            <span className="tag ">NEW</span>
                            </NavLink>
                        </li>
                        <li class="menut-item">
                            <NavLink exact to="/my-nft" activeClassName="nav-active" className="display disabled">
                           
                            <i class="fas fa-coins yellow-icon"></i>Buy GALLUS
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
                            <NavLink exact to="/airdrop" activeClassName="nav-active" className="display ">
                            <i class="fas fa-gifts yellow-icon"></i>Airdrop
                            <span className="tag ">NEW</span>
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
        
        <div className="wallet-nav">
            <div className="logo-nav">
                <a href="" className="logoJOJO"></a>
                    <div className="pool1">
                        NFT Market
                    </div>
                </div>
                <div className="right-nav">
                    <div className="right-item">
                        <a href="" className="wallet pool1">VIEW COLLECTION</a>
                    </div>

                </div>
        </div>
        
        <div className="main-nft">
            <div className="pool-grid">
                <div className="nft-title-main">
                    <h1 className="title-nft-main"> Exclusive NFT'S Collection <br />by GALLUSFIGHTER</h1>
                    <p className="text-nft-main">The first FirstBlood in the GameFi coming soon: GALLUSFIGHTER!This Exclusive NFT's Collection is only available on Opensea and it's the announcement of the opening of your future platform GALLUSFIGHTER.com .
The feathers are classified by rarity; the rarer your feather is, the more it gives you a Collector's Reward!
Stay tuned and enter the arena for NFT's fights.</p>
                </div>
                <section className="search-section">
                    <div className="search-container">
                       
                    <div className="main-pool list-marketnft">
           <div className="menus">
               <div className="menu-list">
                    <a href="/#nft-market" className="menu-item unselected">All</a>
                   <a href="/#nft-market/titan" className="menu-item unselected" id="titan">Titan Feather</a>
                   <a href="/#nft-market/medium" className="menu-item unselected" id="medium">Medium Feather</a>
                   <a href="/#nft-market/small" className="menu-item selected-market">Small Feather</a>
                   
               </div>
           </div>
           <div className="menus">
               <div className="menu-list">
                    <a href="/#nft-market" className="menu-item selected-market">ALL</a>
                   <a href="/#nft-market/titan" className="menu-item unselected" id="titan">NFT</a>
                  
                   
               </div>
           </div>
        </div>
                        <div className="space"></div>
                        
                    </div>
                </section>
                <div id="mediumData">
                                {data.map((image) => (

                                    
                                    
                                    <CardSmall image={image} key={image.title} />
                                    
                                ))}
                             
                             </div>
                            </div>

        </div>
        
    </div>
    
    
    )};

    export default Small;