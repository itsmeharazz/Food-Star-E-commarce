import React, { useRef } from "react";
import { coverImage, upComing } from "../../assets/assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 200)}s`;
  };
  return (
    <div className='container mt-28 pt-1 md:h-[30vh] lg:h-[65vh] sm:h-[10em] w-full md:flex justify-between items-center gap-5 overflow-hidden'>
      {/* Hero content right slider */}
      <div className='hero-lef w-full md:w-[75%]   flex justify-between gap-1 '>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className='mySwiper'>
          {/* chatgpt code  */}
          {/* {coverImage.map((cover,index)=>(

            <SwiperSlide key={index}>
              <img src={cover} alt='' />
            </SwiperSlide>
            ))} */}
          {/* chatgpt code end */}
          <SwiperSlide>
            <img src={coverImage.cover} className='object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={coverImage.cover_1} className='object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={coverImage.cover_2} className='object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={coverImage.cover_3} className='object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={coverImage.cover_4} className='object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={coverImage.cover_5} className='object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={coverImage.cover_6} className='object-cover' alt='' />
          </SwiperSlide>

          <div className='autoplay-progress' slot='container-end'>
            <svg viewBox='0 0 48 48' ref={progressCircle}>
              <circle cx='24' cy='24' r='20'></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
      {/* <div className='hero-lef w-full md:w-[75%] flex justify-between gap-1'>
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    loop={true}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    onAutoplayTimeLeft={onAutoplayTimeLeft}
    className='mySwiper'
  >
    {Object.values(coverImage).map((cover, index) => (
      <SwiperSlide key={index}>
        <img src={cover} className='object-cover' />
      </SwiperSlide>
    ))}
    <div className='autoplay-progress' slot='container-end'>
      <svg viewBox='0 0 48 48' ref={progressCircle}>
        <circle cx='24' cy='24' r='20'></circle>
      </svg>
      <span ref={progressContent}></span>
    </div>
  </Swiper>
</div> */}
      {/* hero left content */}

      <div className='hero-right hidden md:block h-full w-[25%] '>
        <h2 className='font-extrabold mb-3 text-accent'>Up Coming Products</h2>
        <div className='w-full h-full  flex flex-col gap-4 overflow-y-scroll pb-5'>
          {upComing.map((comingSoon, index) => (
            <div
              key={index}
              className='coming-soon rounded-3xl p-2 w-[95%] h-[10em] flex justify-between items-center bg-[#e8e4e4] mx-auto gap-6'>
              <img src={comingSoon.img} className='w-[50%] h-[80%]' alt='' />
              <div className='w-[50%]  h-[80%] grid grid-cols-2 gap-3'>
                <p className='text-center pt-3 p-1  text-white bg-[#ff7016] rounded-2xl'>
                  {comingSoon.day} D
                </p>
                <p className='text-center pt-3 p-1  text-white bg-[#ff7016] rounded-2xl'>
                  {comingSoon.hours} H
                </p>
                <p className='text-center pt-3 p-1  text-white bg-[#ff7016] rounded-2xl'>
                  {comingSoon.minutes} M
                </p>
                <p className='text-center pt-3 p-1  text-white bg-[#ff7016] rounded-2xl'>
                  {comingSoon.seconds} S
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
