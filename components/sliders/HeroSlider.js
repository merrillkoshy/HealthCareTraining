import Swiper, { SwiperSlide } from "swiper";
import data from "../../data/heroSliderData.json";
const HeroSlider = ({ children }) => {
  var swiper = new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  return (
    <div>
      {/* <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={swiper => console.log(swiper)}
      > */}
      <div class="swiper-container">
        <div class="swiper-wrapper">
          {data &&
            data.map((single, key) => {
              return (
                <div className="swiper-slide">
                  <img src={`${single.image}`} key={key} />
                </div>
              );
            })}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
      {/* </Swiper> */}
    </div>
  );

  // data &&
  // data.map((single, key) => {
  //   // <img src={`${single.image}`} key={key} />;
  //   <div>single</div>;
  // })
};
export default HeroSlider;
