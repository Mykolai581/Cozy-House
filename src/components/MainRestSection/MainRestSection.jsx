import "./MainRestSection.css";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import MainPetsCart from "../MainPetsCart/MainPetsCart";
import Image1 from "../../../Images/MainRestSection/pets-katrine.jpg";
import Image2 from "../../../Images/MainRestSection/pets-jennifer.png";
import Image3 from "../../../Images/MainRestSection/pets-woody.png";

import ButtonElement from "../ButtonElement/ButtonElement";
import Animation from "../ScrollAnimation/ScrollAnimation.jsx";

export default function MainRestSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState({ prevEl: null, nextEl: null });

  useEffect(() => {
    setNavigation({
      prevEl: prevRef.current,
      nextEl: nextRef.current,
    });
  }, []);

  return (
    <section className="main__rest rest">
      <div className="rest__container">
        <Animation>
          <h2 className="rest__title">
            Our friends who are looking for a house
          </h2>
        </Animation>

        <div className="slider-container">
          <button ref={prevRef} className="custom-prev">
            ←
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true }}
            breakpoints={{
              300: { slidesPerView: 1 },
              700: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
            }}
            navigation={navigation}
          >
            <SwiperSlide>
              <Animation>
                <MainPetsCart
                  img={Image1}
                  name={"Katrine"}
                  title={"British Shorthair cat"}
                  text={
                    "Katrin is a sweet one-year-old British Shorthair cat who is patiently waiting for her new home. This little girl loves to go outside, run and play, but she doesn't hesitate to make a mess inside the house if she has all her favorite toys."
                  }
                  age={"1 year old"}
                />
              </Animation>
            </SwiperSlide>
            <SwiperSlide>
              <Animation>
                <MainPetsCart
                  img={Image2}
                  name={"Jennifer"}
                  title={"Dog - Labrador"}
                  text={
                    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
                  }
                  age={"2 months"}
                />
              </Animation>
            </SwiperSlide>
            <SwiperSlide>
              <Animation>
                <MainPetsCart
                  img={Image3}
                  name={"Woody"}
                  title={"Dog - Labrador"}
                  text={
                    "Woody is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
                  }
                  age={"1 year old"}
                />
              </Animation>
            </SwiperSlide>
            <SwiperSlide>
              <Animation>
                <MainPetsCart
                  img={Image1}
                  name={"Katrine"}
                  title={"British Shorthair cat"}
                  text={
                    "Katrin is a sweet one-year-old British Shorthair cat who is patiently waiting for her new home. This little girl loves to go outside, run and play, but she doesn't hesitate to make a mess inside the house if she has all her favorite toys."
                  }
                  age={"1 year old"}
                />
              </Animation>
            </SwiperSlide>
            <SwiperSlide>
              <Animation>
                <MainPetsCart
                  img={Image2}
                  name={"Jennifer"}
                  title={"Dog - Labrador"}
                  text={
                    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
                  }
                  age={"2 months"}
                />
              </Animation>
            </SwiperSlide>
            <SwiperSlide>
              <Animation>
                <MainPetsCart
                  img={Image3}
                  name={"Woody"}
                  title={"Dog - Labrador"}
                  text={
                    "Woody is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
                  }
                  age={"1 year old"}
                />
              </Animation>
            </SwiperSlide>
            <SwiperSlide>
              <Animation>
                <MainPetsCart
                  img={Image2}
                  name={"Jennifer"}
                  title={"Dog - Labrador"}
                  text={
                    "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys."
                  }
                  age={"2 months"}
                />
              </Animation>
            </SwiperSlide>
          </Swiper>
          <button ref={nextRef} className="custom-next">
            →
          </button>
        </div>

        <ButtonElement text={"Get to know the rest"} />
      </div>
    </section>
  );
}
