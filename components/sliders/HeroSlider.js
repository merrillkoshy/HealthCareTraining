import React, { useEffect } from "react";
import Swiper from "react-id-swiper";

import data from "../../data/heroSliderData.json";
const HeroSlider = ({ children }) => {
  const params = {
    // breakpoints: {
    //   1200: {
    //     spaceBetween: 0,
    //     slidesPerView: 12,
    //     direction: "horizontal"
    //   },
    //   992: {
    //     spaceBetween: 10,
    //     slidesPerView: 3,
    //     direction: "horizontal"
    //   },
    //   768: {
    //     spaceBetween: 10,
    //     slidesPerView: 3,
    //     direction: "horizontal"
    //   },
    //   640: {
    //     spaceBetween: 10,
    //     slidesPerView: 3,
    //     direction: "horizontal"
    //   },
    //   320: {
    //     spaceBetween: 10,
    //     slidesPerView: 3,
    //     direction: "horizontal"
    //   }
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
    // renderPrevButton: () => (
    //   <button className="swiper-button-prev ht-swiper-button-nav">
    //     <i className="pe-7s-angle-left" />
    //   </button>
    // ),
    // renderNextButton: () => (
    //   <button className="swiper-button-next ht-swiper-button-nav">
    //     <i className="pe-7s-angle-right" />
    //   </button>
    // )
  };

  return (
    <div className="slider-area">
      <div className="slider-active nav-style-3">
        <Swiper {...params}>
          {data &&
            data.map((single, key) => {
              return (
                <div
                  key={key}
                  // className="flex slider-height-bg bg-cover bg-center items-center"
                  className="w-screen flex slider-height-bg bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${single.image})`
                  }}
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );

  // data &&
  // data.map((single, key) => {
  //   // <img src={`${single.image}`} key={key} />;
  //   <div>single</div>;
  // })
};
export default HeroSlider;
