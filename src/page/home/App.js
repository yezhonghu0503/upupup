import Lottie from "lottie-react";
import logoani from './lottie/98185-goodvibe-works-logo.json'
import homecar from './lottie/79511-pick-up-ignite-animatio.json'
import './App.css';
import Collection from '../collection/collection'

function App() {
  return (
    <div className="App">
      <div id='app'>
        <div id="head">
          <div id="logo">
            <Lottie animationData={logoani}/>
            <img className="logo-font" src="./static/WechatIMG2338.png" alt="" />
          </div>
          <Lottie animationData={homecar} />
          <div id="msg">
            <h1>Upupup学习资源加速网站</h1>
            <h2>🚀享受up带来的便利吧</h2>
          </div>
        </div>
        <Collection />
      </div>
    </div>
  );
}

export default App;
