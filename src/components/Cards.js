import egg from "../eggIncub.jpg";
import bsc from "../images/bsc.png";
import NftDescription from "./NftDescription"

const Cards = (props) => {

    const { image } = props;
    function AfficherMasquer()
                    {
                    var divInfo = document.querySelector('.popup');
                     
                    if (divInfo.style.display == 'none'  )
                    divInfo.style.display = 'block';
                    else
                    divInfo.style.display = 'none';
                     
                    }

    console.log(image)
    console.log(image.id)
   
    
  
   var test = image.id
   var testOne = document.getElementsByClassName('buy')

    return (

        <div className="ttt">
            
        <div className="nft-item section-item">
                                    <div className="neon"></div>
                                    
                                    <div className="top">
                                        <div className="avatar avatar1">
                                            <div className="collector">HOT</div>
                                           
                                            <img src={egg} className="image-movie"/>
                                         
                                            
                                        </div>
                                        <div className="avatar-title style">
                                            <div className="title-text">{image.title}
                                            </div>
                                            {/* <div className="bottom-title">{image.original_title}</div> */}
                                        </div>
                                        
                                        <div className="price-market">
                                            <p className="market-price-text">Price : </p>
                                            <div className="container-priceBsc">
                                                <img src={bsc} className="bsc-price-market" />
                                                <p className="market-price-chiffre">0,63</p>
                                            </div>
                                           
                                </div>
                                        
                                    </div>
                                    
                                    <div className="bottom">
                                        
                                        
                                        <div className="buttons">
{/*                                             
                                            <a href="" className="yellow "><div className="neon3"></div><div className="index">DETAILS</div></a> */}
                                            <div className="index2"><div className="neon4"></div>
                                            <input type="button" value="Details" className="yellow" onClick={AfficherMasquer} />
                                                {/* <a href="" className="yellow" ><span className="testttt">DETAILS</span></a> */}
                                                
                                            </div>
                                            
                                                
                                            <div className="index2"><div className="neon4"></div>
                                                <a  className="yellowOne TestONE" ><span className="testtttt">BUY</span></a>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>


                                </div>
                                <div class="popups" >
                                    {image ? (
                                    <div className="popup" id="popup">
                                        <button onClick={AfficherMasquer} className="position-button"><i class="far fa-times-circle"></i></button>
                                        <div class="row margin-row testons">
                                            <div class="col-lg-6 flex-container">
                                                
                                                <div class="image-container ">
                                                    <div class="neon-nft"></div>
                                                    <img src="" alt="" class="image-nft-box" />
                                                </div>
                                            </div>
                                            <div class="col-lg-6 flexBox-nft">
                                        
                                                <div class="detail-container">
                                                    <h1 class="title-Nft-desc">{image.title}<span className="title-nft-secondColor"></span></h1>
                                                    <div class="liseret-nft"></div>
                                                    <p class="text-description-nft">{image.title}</p>
                                                    
               
               
                                                </div>
                                            </div>
                                        </div>
                   
                                    </div>
                                ) : ( null )}
                            </div>   
                        </div>
                            
    )
}

export default Cards;