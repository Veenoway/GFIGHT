import Navigation from "../nav/Navigation";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        
                <div class="test">
                
                    <div class="vertical-header">
                        <div class="image-top">
                            <NavLink exact to="/" className="logo-top">GALLUS</NavLink>
                        </div>
                        <ul class="ul">
                            <li class="menut-item">
                                {/* <NavLink exact to="/my-nft" activeClassName="nav-active" className="display left-docs"> */}
                                <a href="https://roosterfi.gitbook.io/gamecock-a-defight-metaverse/" class="display left-docs">
                                {/* <i class="fas fa-coins yellow-icon"></i>Buy GALLUS */}
                                <i class="fas fa-file-alt yellow-icon"></i>Docs
                                </a>
                                {/* </NavLink> */}
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/" activeClassName="nav-active" className="display">
                                <i class="fas fa-box-open yellow-icon"></i>Mystery box
                                    <span className="tag">NEW</span>
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/gallus-story" activeClassName="nav-active" className="display">
                                <i class="fas fa-book-open yellow-icon" ></i>Gallus Story
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/community" activeClassName="nav-active" className="display">
                                <i class="fas fa-envelope-open yellow-icon"></i>Community
                                </NavLink>
                            </li>
                            
                            <li class="menut-item ">
                                <NavLink exact to="/nft-market" activeClassName="nav-active " className="display ">
                                <i class="fas fa-shopping-cart yellow-icon"></i>NFT Market
                                    <span className="tagSoon ">Soon..</span>
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
                                        <span className="tag">HOT</span>
                                        
                                </NavLink>
                            </li>
                            
                            <li class="menut-item">
                                <NavLink exact to="/gamebase" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-gamepad yellow-icon"></i>Gamebase
                                </NavLink>
                            </li>
                            
                            <li class="menut-item">
                                <NavLink exact to="/refine" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-lightbulb yellow-icon"></i>Refine
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/breed" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-egg yellow-icon"></i>Breed
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/cast" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-tools yellow-icon"></i>Cast
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/knight" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-feather-alt yellow-icon"></i>Fighter
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
                                <NavLink exact to="/evolve" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-atom yellow-icon"></i>Evolve
                                    
                                </NavLink>
                            </li>
                            
                            <li class="menut-item">
                                <NavLink exact to="/help-center" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-comments yellow-icon"></i>Help Center
                                </NavLink>
                            </li>
                            <li class="menut-item">
                                <NavLink exact to="/app-download" activeClassName="nav-active" className="display disabled">
                                <i class="fas fa-download yellow-icon"></i>App Download
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            
    )
}

export default Header;