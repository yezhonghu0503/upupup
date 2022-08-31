import Lottie from "lottie-react";
import data from './static/98185-goodvibe-works-logo.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='app'>
        <div id="head">
          <div id="logo">
            {/* <div id="logo-ani"></div> */}
            <Lottie animationData={data}/>
            <img className="logo-font" src="./static/WechatIMG2338.png" alt="" />
          </div>
          <div id="home-car"></div>
          <div id="msg">
            <h1>Upupup学习资源加速网站</h1>
            <h2>🚀享受up带来的便利吧</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
