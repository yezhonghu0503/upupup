import './App.css';
import Animation from './lottie/lottie'

function App() {
  return (
    <div className="App">
      <div id='app'>
        <div id="head">
          <div id="logo">
            {/* <div id="logo-ani"></div> */}
            <Animation
              {...{
                path: "./static/79511-pick-up-ignite-animatio.json",
                loop: true,
                renderer: "svg",
              }}
            />
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
