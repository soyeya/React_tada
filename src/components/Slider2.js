import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';


const Slider2 = () => {

     return(

        <>
        <div className="secondSlide_title"  id ="use">
         <p>목적지까지 바로가다</p>
         <p>앱을 열고 도착할 때까지 더 간편한 이동을 만나보세요</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
      //   loop={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper secondSwiper"
      >

      <div className="secondSlider">
        <SwiperSlide className='second_slider'></SwiperSlide>
        <SwiperSlide className='second_slider'></SwiperSlide>
        <SwiperSlide className='second_slider'></SwiperSlide>
        <SwiperSlide className='second_slider'></SwiperSlide>
        <SwiperSlide className='second_slider'></SwiperSlide>
        <SwiperSlide className='second_slider'></SwiperSlide>
        </div>
        <div className="sliderFrame"></div> 
      </Swiper>
    </>

     )
}
export default Slider2;