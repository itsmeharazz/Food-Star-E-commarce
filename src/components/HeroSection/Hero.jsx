import React, { useRef} from "react";
import { coverImage, upComing } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Timer from "../timer/Timer";


const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  // Timer state and logic
  // const initialDuration = 1000 * 24 * 60 * 60 * 1000; // 10 days in ms
  // const [time, setTime] = useState(initialDuration);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime((prev) => (prev > 0 ? prev - 1000 : 0));
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // const getFormattedTime = (milliseconds) => {
  //   const totalSeconds = Math.floor(milliseconds / 1000);
  //   const days = Math.floor(totalSeconds / (60 * 60 * 24));
  //   const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  //   const minutes = Math.floor((totalSeconds % 3600) / 60);
  //   const seconds = totalSeconds % 60;
  //   return { days, hours, minutes, seconds };
  // };

  // const { days, hours, minutes, seconds } = getFormattedTime(time);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 200)}s`;
  };

  return (
    <div className='container mt-28 pt-1 md:h-[30vh] lg:h-[65vh] sm:h-[10em] w-full md:flex justify-between items-center gap-5 overflow-hidden'>
      {/* Hero Slider */}
      <div className='hero-lef w-full md:w-[65%] lg:w-[75%] flex justify-between gap-1'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className='mySwiper'>
          {Object.values(coverImage).map((cover, index) => (
            <SwiperSlide key={index}>
              <img src={cover} className='object-cover' alt='' />
            </SwiperSlide>
          ))}
          <div className='autoplay-progress' slot='container-end'>
            <svg viewBox='0 0 48 48' ref={progressCircle}>
              <circle cx='24' cy='24' r='20'></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>

      {/* Right Panel */}
      <div className='hero-right hidden md:block h-full w-[25%] md:w-[30%]'>
        <h2 className='font-extrabold mb-3 text-accent'>Up Coming Products</h2>
        <div className='w-full h-full flex flex-col gap-4 overflow-y-scroll pb-5'>
          {upComing.map((comingSoon, index) => (
            <div
              key={index}
              className='coming-soon rounded-3xl p-2 w-[95%] min-h-[10em] md:h-[13em] flex justify-between items-center bg-[#e8e4e4] mx-auto gap-6'>
              <img
                src={comingSoon.img}
                className='min-w-[50%] md:w-[30%] min-h-[80%] md:h-[50%]'
                alt=''
              />
              <div className='w-full h-[80%]'>
                <Timer duration={100 * 24 * 60 * 60 * 1000} />
              </div>
              {/* <div className='w-[50%] md:w-[75%] h-[80%] grid grid-cols-2 gap-3'>
                <p className='text-center pt-3 p-1 text-white md:text-sm bg-[#ff7016] rounded-2xl'>
                   D
                </p>
                <p className='text-center pt-3 p-1 text-white md:text-sm bg-[#ff7016] rounded-2xl'>
                   H
                </p>
                <p className='text-center pt-3 p-1 text-white md:text-sm bg-[#ff7016] rounded-2xl'>
                   M
                </p>
                <p className='text-center pt-3 p-1 text-white bg-[#ff7016] rounded-2xl'>
                   S
                </p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
