import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../asset/css/_swiper.css';

// import required modules
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';



const Service = () => {

    return (
        <>
            
         <div className="swiperText" id="service"><span>서비스 라인업</span></div>

          <Swiper
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, HashNavigation]}
            className="mySwiper firstSwiper" 
          >
           <div className="swiperWrap">
            <SwiperSlide className="serSwiper"data-hash="slide1">
              <div className="slideTxt">
               <p>타다 넥스트</p>
               <p>넓고 쾌적한 차량으로 새로운 기준을 제시하는 일상 이동 서비스</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="serSwiper" data-hash="slide2">
               <div className="slideTxt">
               <p>타다 플러스</p>
               <p>베테랑 드라이버와 준고급 세단으로 안락한 프리미엄 이동 서비스</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="serSwiper" data-hash="slide3">
               <div className="slideTxt">
               <p>타다 라이프</p>
               <p>바로배차 시스템과 합리적 가격으로 운영되는 도심 이동 서비스</p>
               </div>
            </SwiperSlide>
            <SwiperSlide className="serSwiper" data-hash="slide4">
            <div className="slideTxt">
               <p>타다 트립</p>
               <p>공항 및 골프장 이동, 시간 대절 등 여유로운 예약 이동 서비스</p>
               </div>
            </SwiperSlide>
            </div>
          </Swiper>
        
        </>
      );

}

export default Service;