import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper";

const dateToTime = (date : any) => {
    const res = new Date(date);
    const hour = res.getHours();
    const min = res.getMinutes();
    if(hour >= 12) return `${hour-12}:${min} PM`;
    else return `${hour}:${min} AM`
}

const HorseGames = (props : any) => {
    return (
        <div className="virtual-spots pb-20">
            <div className="section-header d-flex align-items-center">
                <div className="icon">
                    <i className="fas fa-flag-checkered"></i>
                </div>
                <h2>
                    Horse Race
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
                { props.horseRaceData && 
                    props.horseRaceData.map((horse: any) => (
                        <SwiperSlide className="virtual-items swiper-items" key={horse.Id}>
                            <a className="d-flex align-items-center swiper-cards">
                                <img src={`/img/flag-img/${horse.Event.CountryCode}.png`} className="flag-image"></img>
                                <span className="card-details">
                                    <span className="market-time">
                                        {`${dateToTime(horse.Event.StartTime)}`}
                                    </span>
                                    <span className="race-name">
                                        {`${horse.Event.Name} (${horse.Event.CountryCode})`}
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

export default HorseGames;