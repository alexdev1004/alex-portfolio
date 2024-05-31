import Image from "next/image";
import themeforest from "../../../public/assets/logos/themeforest-dark-background.webp";
import photodune from "../../../public/assets/logos/photodune-dark-background.webp";
import graphicriver from "../../../public/assets/logos/graphicriver-dark-background.webp";
import codecanyon from "../../../public/assets/logos/codecanyon-dark-background.webp";
import audiojungle from "../../../public/assets/logos/audiojungle-dark-background.webp";
import activeden from "../../../public/assets/logos/activeden-dark-background.webp";
import docean from "../../../public/assets/logos/3docean-dark-background.webp";
import oseparate from "../../../public/assets/separator-opposite.webp";
import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients-container animated-layer fade-in-right-animation fadeInUp wow">
        <h3>My Clients</h3>
        <Swiper
          {...salimovSlider.clients}
          className="swiper swiper-clients fadeInUp wow"
        >
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <Image src={themeforest} alt="client" width={150} height={25} />
            </div>
            <div>
              <Image src={photodune} alt="client" width={150} height={33} />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <Image src={graphicriver} alt="client" width={150} height={33} />
            </div>
            <div>
              <Image src={codecanyon} alt="client" width={150} height={25} />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <Image src={audiojungle} alt="client" width={150} height={28} />
            </div>
            <div>
              <Image src={activeden} alt="client" width={150} height={34} />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <Image src={docean} alt="client" width={150} height={29} />
            </div>
            <div>
              <Image src={themeforest} alt="client" width={150} height={25} />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <Image src={activeden} alt="client" width={150} height={34} />
            </div>
            <div>
              <Image src={audiojungle} alt="client" width={150} height={28} />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          {/* SWIPER ITEM STARTS */}
          <SwiperSlide className="swiper-slide">
            <div>
              <Image src={graphicriver} alt="client" width={150} height={33} />
            </div>
            <div>
              <Image src={codecanyon} alt="client" width={150} height={25} />
            </div>
          </SwiperSlide>
          {/* SWIPER ITEM ENDS */}
          <div className="swiper-pagination" />
        </Swiper>
      </div>
      <Image
        alt="oseparate"
        className="z-1 hide-mobile opposite-separator"
        src={oseparate}
      />
    </section>
  );
};
export default Clients;
