import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { greyhoundData } from '@/data/greyhound';

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
const GreyhoundGames = () => {
    return (
        <div className="virtual-spots pb-20">
            <div className="section-header d-flex align-items-center">
                <div className="icon">
                    <i className="fas fa-paw"></i>
                </div>
                <h2>
                    Greyhound
                </h2>
            </div>
            <Swiper
                autoplay={true}
                navigation={{
                    enabled: true,
                    nextEl: '.swiper-btn-next',
                    prevEl: '.swiper-btn-prev',
                }}
                modules={[Autoplay, Navigation]}
                spaceBetween={10}
                slidesPerView={'auto'}
                className="virtual-wrap">
                {
                    greyhoundData.map(greyhound => (
                        <SwiperSlide className="virtual-items swiper-items" key={greyhound.id}>
                            <a className="d-flex align-items-center swiper-cards">
                                <img src={`/img/flag-img/${greyhound.country}.png`} className="flag-image"></img>
                                <span className="card-details">
                                    <span className="market-time">
                                        {`${greyhound.time}`}
                                    </span>
                                    <span className="race-name">
                                        {`${greyhound.name} (${greyhound.country})`}
                                    </span>
                                </span>
                            </a>
                        </SwiperSlide>
                        )
                    )
                }
                <button className='swiper-btn-prev'><i className='fas fa-chevron-left'></i></button>
                <button className='swiper-btn-next'><i className='fas fa-chevron-right'></i></button>
            </Swiper>
        </div>
    );
};

export default GreyhoundGames;