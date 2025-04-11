import React, { useEffect, useState } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) setTime(time - 1000);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className='w-[50%] md:w-[100%] h-[80%] grid grid-cols-2 gap-3'>
      <p className='text-center py-2 px-2 font-bold text-white md:text-sm bg-[#ff7016] rounded-2xl flex items-center '>
        {days} D
      </p>
      <p className='text-center py-2 px-2 font-bold text-white md:text-sm bg-[#ff7016] rounded-2xl  flex items-center'>
        {hours} H
      </p>
      <p className='text-center py-2 px-2 font-bold text-white md:text-sm bg-[#ff7016] rounded-2xl  flex items-center'>
        {minutes} M
      </p>
      <p className='text-center py-2 px-2 font-bold text-white bg-[#ff7016] rounded-2xl  flex items-center'>
        {seconds} S
      </p>
    </div>
  );
};

export default Timer;
