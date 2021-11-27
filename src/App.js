import logo from './logo.svg';
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



function App() {

  
  return (
    <div className="App">
      <HashRouter basename="/" hashType="noslash"> 
      {/* <Route exact path="/" component={Home} /> */}
      
      
      <div className="paddingLeft">
        <Route exact path="/description" component={NftDescription} />
        <Route exact path="/gallus-story" component={GallusStory} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/my-nft" component={MyNft} />
        <Route exact path="/pool" component={Pool} />
        <Route exact path="/farms" component={Farms}/>
        <Route exact path="/" component={BlindBox} />
        <Route exact path="/nft-market" component={NftMarket} />
      
        
        
      
      </div>
      </HashRouter>
    </div>
  );
}

export default App;
