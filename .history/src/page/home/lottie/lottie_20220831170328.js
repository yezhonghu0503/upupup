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
