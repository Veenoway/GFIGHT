
import './App.css';
import Header from "./components/Header";
import Pool from "./components/Pool";
import Farms from "./components/Farms";
import BlindBox from './components/Blindbox';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NftMarket from './components/NftMarket';
import NftDescription from './components/NftDescription';
import MyNft from './components/MyNft';
import Community from './components/Community';
import GallusStory from './components/GallusStory';
import { HashRouter } from 'react-router-dom'
import Airdrop from './components/Airdrop';
import Medium from './components/MarketComponent/Medium';
import Small from './components/MarketComponent/Small';
import Titan from './components/MarketComponent/Titan';





function App() {

  
  return (
    <div className="App">
      <HashRouter basename="/" hashType="noslash"> 
      <Route exact path="/" component={Home} />
      
      
      <div className="paddingLeft">
        {/* <Route exact path="/gdrgdr" component={NftDescription} /> */}
        <Route exact path="/airdrop" component={Airdrop} />
        <Route exact path="/gallus-story" component={GallusStory} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/my-nft" component={MyNft} />
        {/* <Route exact path="/gsgrf" component={Pool} /> */}
        {/* <Route exact path="/fse" component={Farms}/> */}
        <Route exact path="/presale" component={BlindBox} />
        {/* <Route exact path="/nft-market" component={NftMarket} />
        <Route exact path="/nft-market/medium" component={Medium} />
        <Route exact path="/nft-market/small" component={Small} />
        <Route exact path="/nft-market/titan" component={Titan} /> */}
      
        
        
      
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
