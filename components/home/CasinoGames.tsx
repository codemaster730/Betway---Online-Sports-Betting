import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";
import { imgUrl } from '@/data/img-url';


const CasinoGames = () => {
    return (
        <div className="virtual-spots pb-20">
            <div className="section-header d-flex align-items-center">
                <div className="icon">
                    <i className="fas fa-dice"></i>
                </div>
                <h2>
                    Casino Games
                </h2>
            </div>
            <Swiper
                loop={true}
                autoplay={true}
                modules={[Autoplay]}
                speed={3500}
                breakpoints={{
                    320: {
                        spaceBetween: 2
                    },
                    480: {
                        spaceBetween: 4
                    },
                    992: {
                        spaceBetween: 6
                    },
                    1200: {
                        spaceBetween: 8
                    },
                }}
                slidesPerView={'auto'}
                className="virtual-wrap">
                    { imgUrl.map(url => (
                        <SwiperSlide className="virtual-items swiper-items" key={url.id}>
                            <img src={url.url} className="casino-image"/>
                        </SwiperSlide>))
                    }
            </Swiper>
        </div>
    );
};

export default CasinoGames;