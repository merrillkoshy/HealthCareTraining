import React, { Fragment, useState, useEffect } from "react";
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wowjs") : null;
import Link from "next/link";
import dynamic from "next/dynamic";
import VisibilitySensor from "react-visibility-sensor";
import ModalVideo from "react-modal-video";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import data from "../../data/heroSliderData.json";

const options = {
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
  responsiveClass: true,
  dots: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  navText: [
    "<i class='icofont-bubble-left'></i>",
    "<i class='icofont-bubble-right'></i>"
  ]
};

const Banner = () => {
  const [isOpen, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(true);

    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 20,
      mobile: true,
      live: true
    }).init();
  });

  return (
    <Fragment>
      {display ? (
        <OwlCarousel
          className="home-slides home-healthcare  owl-theme"
          {...options}
        >
          {data &&
            data.map((single, key) => {
              return (
                <div
                  key={key}
                  // className="flex slider-height-bg bg-cover bg-center items-center"
                  className="main-banner startup-bg1"
                  style={{
                    backgroundImage: `url(${single.image})`
                  }}
                />
              );
            })}
        </OwlCarousel>
      ) : (
        ""
      )}

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="szuchBiLrEM"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};
export default Banner;
