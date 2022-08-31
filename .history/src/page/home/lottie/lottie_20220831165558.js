// import lottie from 'lottie-web';
// import React, { useEffect, useRef, useState } from 'react';
// // // lottie渲染动画
// // //标签集合
// // // let head = document.querySelector("#head");
// // // let logo = document.querySelector("#logo");
// // let containerEnum = {
// //     head: document.querySelector("#home-car"),
// //     logo: document.querySelector("#logo-ani")
// // }

// // //主页左上角图标动画
// // const lottieAnimation_home_logo = lottie.loadAnimation({
// //     container: containerEnum.logo,
// //     path: "./static/98185-goodvibe-works-logo.json",
// //     loop: true,
// //     renderer: "svg"
// // })

// //主页车车动画
// // const lottieAnimation_home_car = lottie.loadAnimation({
// //     // 选取一个容器，用于渲染动画
// //     container: containerEnum.head,
// //     // 定义JSON文件路径
// //     path: "../static/79511-pick-up-ignite-animatio.json",
// //     // 是否循环播放
// //     loop: true,
// //     // 渲染的格式svg/canvas/html，svg性能更优，兼容性更好
// //     renderer: "svg",
// // });


 
// const Animation = props => {
//     const { renderer, loop, path, canvasStyle }  = props;
//     const lottieRef = useRef(null);
//     const [, setLottie] = useState(null);
//     useEffect(() => {
//         setLottie(
//             lottie.loadAnimation({
//                 container: lottieRef.current,
//                 // 渲染方式
//                 renderer,
//                 // autoplay 自动播放
//                 // 是否循环播放
//                 loop,
//                 // 路径
//                 path,
//             })
//         );
//     }, []);
//     return (
//         <div>
//             <div ref={lottieRef} className="lottie" style={canvasStyle}></div>
//         </div>
//     );
// };
// export default Animation;


import React from 'react'
import lottie from 'lottie-web';
import './style.less'
const heepNewYear = require('./static/98185-goodvibe-works-logo.json')
const lotTrustJSON = require('./static/98185-goodvibe-works-logo.json')
const LottieView = React.createClass({
  getInitialState() {
    return {

    }
  },
  componentDidMount: function () {
    // 初始化
    const lot = lottie.loadAnimation({
      container: document.getElementById('lottie'), 
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: 'https://assets6.lottiefiles.com/packages/lf20_vwml2zcv.json',
      // path: 'https://assets9.lottiefiles.com/datafiles/MUp3wlMDGtoK5FK/data.json',
      // animationData: './json/42357-christmas.json',
    });
    // 开始播放动画
    lot.play();
    const lotNewYear = lottie.loadAnimation({
      container: document.getElementById('lotNewYear'), 
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: heepNewYear,
    });
    lotNewYear.play();

    const lotTrust = lottie.loadAnimation({
      container: document.getElementById('lotTrust'), 
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: lotTrustJSON,
    })
    lotTrust.play()
  },
  render: function() {
    return <div className="lottie-box">
      <div className="lottie" id="lotTrust"></div>
      <div className="lottie" id="lotNewYear"></div>
      <div className="lottie" id="lottie"></div>
    </div>
  }

})
React.render(<LottieView />, document.getElementById('body-wrap'));