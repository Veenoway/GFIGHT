import Navigation from "../nav/Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {

    function AfficherMasquer()
    {
    var divInfo = document.getElementById('hamburger');
     
    if (divInfo.style.display == 'none')
    divInfo.style.display = 'block';
    else
    divInfo.style.display = 'none';
     
    }

    return (
        
                <div class="test">
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
                            {/* activeClassName="nav-active" */}
                           
                            <i class="fas fa-coins yellow-icon"></i>Buy GALLUS
                            <span className="tagSoon ">Soon..</span>
                            
                            
                            </NavLink>
                        </li>
                        <li class="menut-item ">
                            <NavLink exact to="/nft-market" activeClassName="nav-active " className="display disabled">
                            <i class="fas fa-home yellow-icon"></i>Website
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
            </div>
    )
}

export default Header;