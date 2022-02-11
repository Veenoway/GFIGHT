
import Header from './Header';

const Farms = () => {
    return (
    <div className="farms">
        <Header />
       <div className="wallet-nav">
           <div className="logo-nav">
               <a href="" className="logoGALLUS"></a>
                <div clasName="pool">
                    Farms
                </div>
            </div>
            <div className="right-nav">
                <div className="right-item">
                    <a href="" className="wallet">Connect Wallet</a>
                </div>

            </div>
        </div>
        <div className="main-pool">
            <section className="pool-page">
                <div className="banner-bg-farms">

                </div>
                <div class="farms-title">
                Farms - Share 2,200,000,000 $ROFI
                </div>
                <div className="farms-brief">
                Stake GALLUS/BNB LP and Earn $ROFI, share 2,200,000,000 $GALLUS
                </div>
                <div className="button-brown">
                    <a href="" className="brown">More Info</a>
                </div>
            </section>
       </div>
       <section className="farms-view">
            <div className="content">
                <div className="farms-items">
                    <div className="farms-top">
                        <div className="top-item">
                            <img src="" className="coin"/>
                            <div className="top-text">
                                ROFI/BNB
                            </div>
                        </div>
                        <div className="top-item-column">
                            <div className="value-liquidity">$3,340,143</div>
                            <div className="title-item">Liquidity</div>
                        </div>
                        <div className="top-item-column">
                            <div className="valueRed">733.46%</div>
                            <div className="title-item">APR</div>
                        </div>
                        <div className="top-item-token">
                            <div className="value token-value">
                                <img src="" className="coin"/>1,369,954,326
                                <span className="value-text"> = $ 1,035,676</span>
                            </div>
                            <div className="title-item">Remaining Tokens in Pool</div>
                        </div>
                    </div>
                    <div className="farm-bottom">
                        <div className="bottom-item margin-right">
                            <div className="">
                                <div className="token-value value">
                                    <img src="" className="coin1"/>0
                                    <span className="value-text">= $0</span>
                                </div>
                                <div className="title-item">Staked</div>
                            </div>
                            <div className="button center">
                                <a href="" className="yellowButton">Stake</a>
                            </div>
                        </div>
                        <div className="bottom-item">
                            <div className="">
                                <div className="token-value value">
                                    <img src=""className="coin1"/>0
                                    <span className="value-text">= $0</span>
                                </div>
                                <div className="title-item">Harvest</div>
                            </div>
                            <div className="button center">
                                <a href="" className="yellowButton">Harvest</a>
                            </div>
                        </div>
                    </div>
                    

                </div>
                

            </div>
            <section className="faq">
                        <div className="main-title">FAQ</div>
                        <ul className="content-faq">
                            <div className="faq-item">
                                <div className="faq-value">1. You can stake GALLUS/BNB LP and Earn $ROFI;</div>
                            </div>
                            <div className="faq-item">
                                <div className="faq-value">2. Please be sure to perform the operations of adding liquidity and removing liquidity on the ROFI official website, otherwise 10% of $ROFI will be burned during the operation.</div>
                            </div>

                        </ul>
                    </section>
        </section>
        
    </div>
    )
}

export default Farms;