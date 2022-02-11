import Header from "./Header";
import { NavLink } from "react-router-dom";
import egg from "../images/eggIncub.jpg"

const NftDescription = () => {
    return (
        <div className="pool">
            <Header />
            <div className="wallet-nav">
            <div className="logo-nav">
                <a href="" className="logoGALLUS"></a>
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
            <div className="normal-layout">
                <div className="container container-nft">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="image-container">
                                <img src={egg} alt="" className="image-nft-box" />
                            </div>
                        </div>
                        <div className="col-lg-6 flexBox-nft">
                            <div className="detail-container">
                                <h1 className="title-Nft-desc">Dawnlight Badge - Bronze</h1>
                                <div className="liseret-nft"></div>
                                <p className="text-description-nft">lorem fhsbhneiuofhoi hnesh oighfosieh gfohgsih si ghopsegjh iogjesijg iojsegio joigse</p>
                                <div className="center-button">
                                    <NavLink exact to="/nft-description" className="button-nft">BUY GALLUS NFT</NavLink>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-nft">
                    <div className="row">
                    <div className="">
                            <h2 className="title-Nft-bot">Discover more Gallus NFT</h2>
                        </div>
                        <div className="col-lg-4">
                        
                        <div className="nft-item section-item2">
                        <div className="neon"></div>
                                    
                                    <div className="top">
                                        <div className="avatar avatar1">
                                            <div className="collector">HOT</div>
                                           
                                            <img src={egg} className="image-nft-test"/>
                                         
                                            
                                        </div>
                                        <div className="avatar-title style">
                                            <div className="title-text">test
                                            </div>
                                            {/* <div className="bottom-title">{image.original_title}</div> */}
                                        </div>
                                    </div>
                                    <div className="tire"></div>
                                    <div className="bottom">
                                        
                                        
                                        <div className="buttons">
                                            
                                            <a href="" className="yellow "><div className="neon3"></div><div className="index">DETAILS</div></a>
                                            {/* <div className="index2"><div className="neon4"></div>
                                                <a href="" className="yellow"><span className="testtttt">DETAILS</span></a>
                                            </div> */}
                                            
                                                
                                            <div className="index2"><div className="neon4"></div>
                                                <a href="" className="yellowOne"><span className="testtttt">BUY</span></a>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                        
                        <div className="nft-item section-item2">
                        <div className="neon"></div>
                                    
                                    <div className="top">
                                        <div className="avatar avatar1">
                                            <div className="collector">HOT</div>
                                           
                                            <img src={egg} className="image-nft-test"/>
                                         
                                            
                                        </div>
                                        <div className="avatar-title style">
                                            <div className="title-text">test
                                            </div>
                                            {/* <div className="bottom-title">{image.original_title}</div> */}
                                        </div>
                                    </div>
                                    <div className="tire"></div>
                                    <div className="bottom">
                                        
                                        
                                        <div className="buttons">
                                            
                                            <a href="" className="yellow "><div className="neon3"></div><div className="index">DETAILS</div></a>
                                            {/* <div className="index2"><div className="neon4"></div>
                                                <a href="" className="yellow"><span className="testtttt">DETAILS</span></a>
                                            </div> */}
                                            
                                                
                                            <div className="index2"><div className="neon4"></div>
                                                <a href="" className="yellowOne"><span className="testtttt">BUY</span></a>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                       
                        <div className="nft-item section-item2">

                        <div className="neon"></div>
                                    
                                    <div className="top">
                                        <div className="avatar avatar1">
                                            <div className="collector">HOT</div>
                                           
                                            <img src={egg} className="image-nft-test"/>
                                         
                                            
                                        </div>
                                        <div className="avatar-title style">
                                            <div className="title-text">test
                                            </div>
                                            {/* <div className="bottom-title">{image.original_title}</div> */}
                                        </div>
                                    </div>
                                    <div className="tire"></div>
                                    <div className="bottom">
                                        
                                        
                                        <div className="buttons">
                                            
                                            <a href="" className="yellow "><div className="neon3"></div><div className="index">DETAILS</div></a>
                                            {/* <div className="index2"><div className="neon4"></div>
                                                <a href="" className="yellow"><span className="testtttt">DETAILS</span></a>
                                            </div> */}
                                            
                                                
                                            <div className="index2"><div className="neon4"></div>
                                                <a href="" className="yellowOne"><span className="testtttt">BUY</span></a>
                                            </div>
                                        </div>
                                        
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftDescription;