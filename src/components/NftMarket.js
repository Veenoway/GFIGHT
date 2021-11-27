import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Header from "./Header";





const NftMarket = () => {

    const [data, setData] = useState([])

    useEffect(() => {

        axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then((res) => 
            setData(res.data)
        )

        console.log(data)

    }, [])

    function AfficherMasquer()
                    {
                    var divInfo = document.getElementById('popup');
                     
                    if (divInfo.style.display == 'none')
                    divInfo.style.display = 'block';
                    else
                    divInfo.style.display = 'none';
                     
                    }
    
    
    

    return (


    <div className="pool">
        <Header />
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
                
                                {data.map((image) => (
                                    <Cards image={image} key={image.title} />
                                    
                                ))}
                            </div>

        </div>
        
    </div>
    
    )};

    export default NftMarket;