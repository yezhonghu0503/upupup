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