"use client";
import React from 'react'
import Countdown from 'react-countdown';

const endingDate = new Date("2023-09-25")

const CountDown = () => {
  return (
//     <div>CountDown</div>
      <Countdown className='font-bold text-5xl text-red-700 ' date={endingDate} />
  )
}

export default CountDown