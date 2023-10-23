import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';

import CasinoGames from './CasinoGames';
import HorseGames from './HorseGames';
import Soccer from './Soccer';
import Tennis from './Tennis';
import Cricket from './Cricket';
import { API_URL, IS_LOCAL } from '@/data/static';
import { marketAllData } from '@/data/marketAll';


const Hometab = () => {
    const percentStyle = { "--percent": 28 } as React.CSSProperties;
    const [marketData, setMarketData] = useState< Array<any> >();
    const [horseData, setHorseData] = useState< Array<any> >();
    const [greyHoundData, setGreyHoundData] = useState< Array<any> >();
    const [soccerData, setSoccerData] = useState< Array<any> >();
    const [tennisData, setTennisData] = useState< Array<any> >();
    const [cricketData, setCricketData] = useState< Array<any> >();

    useEffect(() => {
        getMarketAll();
    }, []);

    useEffect(() => {
        if(marketData) {
            setSoccerData(marketData.filter(data => data.Event.TypeId == 1));
            setCricketData(marketData.filter(data => data.Event.TypeId == 2));
            setTennisData(marketData.filter(data => data.Event.TypeId == 4));
            setHorseData(marketData.filter(data => data.Event.TypeId == 7));
            setGreyHoundData(marketData.filter(data => data.Event.TypeId == 4339));
        }
    }, [marketData]);

    const getMarketAll = () => {
        if(IS_LOCAL) {
            setMarketData(marketAllData);
        }
        else {
            Axios.get(`${API_URL}/markets/all`)
            .then(response => {
                setMarketData(response.data);
            })
            .catch(error => {
            });
        }
    }

    return (
        <div className="main-body-tabbing">
            <div className="container">
                <div className="main-tabbing pt-0">
                    <div className="tab-content" id="tabContentmain">
                        {/* <!--all tab start--> */}
                        {/* <!--Header start--> */}
                        <div className="match-table">
                            <div className="filter-banner">
                                <div className="filter-banner-wrap">
                                    <div className="accordion-item">
                                        <div className="accordion-header p-2">
                                            <span style={{marginRight:"25px"}}> Credit: 0 </span>
                                            <span style={{marginRight:"25px"}}> Balance: 0 </span>
                                            <span style={{marginRight:"25px"}}> Liable: 0 </span>
                                            <span> Active Bets: 0 </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--CasinoGames Carausol--> */}
                            <CasinoGames />

                            {/* <!--HorseRace Swiper--> */}
                            <HorseGames horseRaceData={horseData}/>

                            {/* <!--Greyhound Swiper--> */}
                            <HorseGames horseRaceData={greyHoundData}/>
                        </div>
                        {/* <!--Header end--> */}
                        
                        {/* <!--tab views--> */}
                        <ul className="nav">
                            <li className="nav-item head">
                                <Link className="nav-link link-secondary active tab-item" id="all-tab" data-bs-toggle="tab" data-bs-target="#playing" href="#">
                                    <div className="icon">
                                        <img src="/img/banner-freature/live.svg" alt="feature" />
                                    </div>
                                    <span>In Play</span>
                                    <div className="tags-count">
                                        <span>9</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item head">
                                <Link className="nav-link link-secondary tab-item" id="combo-tab01" data-bs-toggle="tab" data-bs-target="#cricket" href="#">
                                    <div className="icon">
                                        <img src="/img/banner-freature/cricket.svg" alt="feature" />
                                    </div>
                                    <span>Cricket</span>
                                    <div className="tags-count">
                                        <span>7</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item head">
                                <Link className="nav-link link-secondary tab-item" id="combo-tab02" data-bs-toggle="tab" data-bs-target="#tennis" href="#">
                                    <div className="icon">
                                        <img src="/img/banner-freature/tennis.svg" alt="feature" />
                                    </div>
                                    <span>Tennis</span>
                                    <div className="tags-count">
                                        <span>4</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item head">
                                <Link className="nav-link link-secondary tab-item" id="combo-tab03" data-bs-toggle="tab" data-bs-target="#soccer" href="#">
                                    <div className="icon">
                                        <img src="/img/banner-freature/football.svg" alt="feature" />
                                    </div>
                                    <span>Soccer</span>
                                    <div className="tags-count">
                                        <span>7</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>

                        <div className="tab-pane fade show active" id="playing" role="tabpanel">
                            {/* <!--Soccer Table--> */}
                            <Soccer />
                            <Tennis />
                            <Cricket />
                        </div>
                        
                        <div className="tab-pane fade" id="cricket" role="tabpanel">
                            <Cricket />
                        </div>
                        
                        <div className="tab-pane fade" id="tennis" role="tabpanel">
                            <Tennis />
                        </div>
                        
                        <div className="tab-pane fade" id="soccer" role="tabpanel">
                            <Soccer />
                        </div>
                        {/* <!--all tab End--> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hometab;