import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Apple from '../../img/apple.png';
import cucc from '../../img/cucc.png';
import rolex from '../../img/rolex.png';
import Todo from '../../img/todo.png';
import Pe from '../../img/pe.png';
import CRI from '../../img/cricscorer.png';
import FRE from '../../img/frenzy.png';
import 'swiper/css';


export default function Portfolio() {
  return (
    <div className="portfolio" id='Portfolio'>
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}

      <Swiper
      spaceBetween={60}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Todo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cucc} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Apple} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={rolex} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pe} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CRI} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FRE} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
