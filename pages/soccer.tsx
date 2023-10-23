import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import { tabData } from '@/data/tab-menu';
import AllTab from '@/components/event/AllTab';

const soccer = () => {
   const router = useRouter();
   const [stake, setStake] = useState(0);
   const [stake1, setStake1] = useState(2000);
   const [stake2, setStake2] = useState(5000);
   const [stake3, setStake3] = useState(10000);
   const [stake4, setStake4] = useState(25000);
   const [plus1, setPlus1] = useState(2000);
   const [plus2, setPlus2] = useState(5000);
   const [plus3, setPlus3] = useState(10000);
   const [plus4, setPlus4] = useState(25000);
   
   useEffect(() => {
      let res = localStorage.getItem("stake1");
      if(res) setStake1( Number(res) );
      res = localStorage.getItem("stake2");
      if(res) setStake2( Number(res) );
      res = localStorage.getItem("stake3");
      if(res) setStake3( Number(res) );
      res = localStorage.getItem("stake4");
      if(res) setStake4( Number(res) );
      
      res = localStorage.getItem("plus1");
      if(res) setPlus1( Number(res) );
      res = localStorage.getItem("plus2");
      if(res) setPlus2( Number(res) );
      res = localStorage.getItem("plus3");
      if(res) setPlus3( Number(res) );
      res = localStorage.getItem("plus4");
      if(res) setPlus4( Number(res) );
   }, []);

   return (
      <>
        <div className="event-body">
          <div className="main-body-tabbing event-width">
            <div className="container">
               <div className="main-tabbing pt-0">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}

                     {/* <!--Header start--> */}
                     <div className="match-table">
                        <div className="filter-banner">
                           <div className="filter-banner-wrap">
                              <div className="accordion-item">
                                 <div className="accordion-header">
                                    <div className="event-header">
                                       <div className="up-panel">
                                       <div className="left-panel">
                                          <div className="ico-match">
                                             <img src="/img/banner-freature/football.svg" alt="feature" />
                                          </div>
                                          <div className="event-details">
                                             <span className="date-time">
                                                <img src='/img/svg-icon/time.svg'></img>
                                                <span> 29 minutes ago | Aug 14  3:00 PM </span>
                                             </span>
                                             
                                             <div className="game-name">
                                                <li> <span> Bucheon FC 1995 </span> </li>
                                                <li>
                                                   <span className="vs">
                                                      VS
                                                   </span>
                                                </li>
                                                <li>
                                                   <span> Gyeongnam </span>
                                                </li>
                                             </div>

                                             <div className="matched-number">
                                                <span> Matched : </span>
                                                <span className="number"> 55,575 </span>
                                             </div>
                                          </div>
                                       </div>
                                          <div className="board-status">
                                             <span>Inplay</span>
                                          </div>
                                       </div>
                                       {/* <div className="down-panel">
                                          <div className="nav">
                                          {
                                             tabData.map(tab => (
                                                <li className="nav-item panel-item" key={tab.id}>
                                                      <Link className="nav-link link-secondary tab-item" id={`compo-${tab.name}`} data-bs-toggle="tab" data-bs-target={`#${tab.target}`} href="#">
                                                         <span>{tab.name}</span>
                                                         <div className="tags-count">
                                                            <span>{tab.count}</span>
                                                         </div>
                                                      </Link>
                                                </li>
                                             ))
                                          }
                                          </div>
                                       </div> */}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <!--Header end--> */}

                     <div className="bet-table">
                        <div className="table-header">
                           <div className="team1">
                              <span className="detail"> Bucheon FC 1995 </span>
                              <span> 0 </span>
                           </div>
                           <div className="time">
                              <span className="detail"> Time </span>
                              <span> 28' </span>
                           </div>
                           <div className="team2">
                              <span className="detail"> Gyeongnam </span>
                              <span> 0 </span>
                           </div>
                        </div>

                     </div>
                     {/* <!--all tab End--> */}
                     <div className="bet-listing">
                        <div className="tab-pane fade show active" id="all" role="tabpanel">
                           <AllTab />
                        </div>
                        
                        <div className="tab-pane fade" id="toss" role="tabpanel">

                        </div>
                        
                        <div className="tab-pane fade" id="fancy" role="tabpanel">

                        </div>
                        
                        <div className="tab-pane fade" id="bookmaker" role="tabpanel">

                        </div>

                        <div className="tab-pane fade" id="figure" role="tabpanel">

                        </div>

                        <div className="tab-pane fade" id="even-odd" role="tabpanel">

                        </div>

                        <div className="tab-pane fade" id="other" role="tabpanel">

                        </div>
                     </div>

                  </div>
               </div>
            </div>
          </div>
                                             
          <div className="right-site-menu">
            <div className="right-box">
              <div className="right-wrapper-area">
                 <div className="tabs-nav">
                     <Link href="#0" className="link-button">
                        <span className="text-bets"> Tv </span>
                     </Link>
                     <Link href="#0" className="link-button">
                        <span className="text-bets"> Score Card </span>
                     </Link>
                  </div>
                  <iframe 
                     height="320" id="score-card" scrolling="no"
                     width="100%"
                     src="https://playfair.games/score_cards?score_card_id=39036871&amp;pf_user_id=62109&amp;pf_auth_token=TiaY2Qcs5qtCem5SYhRa">
                  </iframe>
                  <div className="order-panel">
                     <div className="order-panel-header">
                        <div className="bet-header">
                           <span> Bet Slip </span>
                           <span className="bet-edit" onClick={() => { router.push('/profile'); }}> Edit Stakes </span>
                        </div>
                     </div>
                     
                     <div className="stake-list">
                        <div className="table">
                           <table style={{width: "100%"}}>
                              <tbody>
                                 <tr>
                                    <th>Bet for</th>
                                    <th>Odds</th>
                                    <th>Stake</th>
                                    <th>Profit</th>
                                 </tr>
                                 <tr>
                                    <td className="title"> <span> Bucheon FC 1995 </span> </td>
                                    <td className="odds" style={{width:"5px"}}> <input type="number" value="5.2" disabled/> </td>
                                    <td className="stake"> <input type="number" value={stake} onChange={(e) => setStake(Number(e.target.value))}/> </td>
                                    <td className="profit"> <span> {`${Math.floor(stake * (5.2 - 1))}/-${stake}`}</span> </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                     <div className="stake-btns">
                        <div className="normal-stakes">
                           <div className="stake-button" onClick={() => { setStake(stake1); }}>
                              <span> {stake1} </span>
                           </div>
                           <div className="stake-button" onClick={() => { setStake(stake2); }}>
                              <span> {stake2} </span>
                           </div>
                           <div className="stake-button" onClick={() => { setStake(stake3); }}>
                              <span> {stake3} </span>
                           </div>
                           <div className="stake-button" onClick={() => { setStake(stake4); }}>
                              <span> {stake4} </span>
                           </div>
                        </div>
                        <div className="plus-stakes">
                           <div className="stake-button" onClick={() => { setStake(stake + plus1); }}>
                              <span> {`+${plus1}`} </span>
                           </div>
                           <div className="stake-button" onClick={() => { setStake(stake + plus1); }}>
                              <span> {`+${plus2}`} </span>
                           </div>
                           <div className="stake-button" onClick={() => { setStake(stake + plus1); }}>
                              <span> {`+${plus3}`} </span>
                           </div>
                           <div className="stake-button" onClick={() => { setStake(stake + plus1); }}>
                              <span> {`+${plus4}`} </span>
                           </div>
                        </div>
                        <div className="action-btns">
                           <div className="btn--two" style={{cursor:"pointer"}}>
                              <span> Close </span>
                           </div>
                           <div className="btn--two" style={{cursor:"pointer"}}>
                              <span> Cancel </span>
                           </div>
                           <div className="cmn--btn" style={{cursor:"pointer"}}>
                              <span> Submit </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="user-competitions-listings">
                     <div className="order-panel">
                        <div className="order-panel-header">
                           <span> Unmatched Bets ( 0 ) </span>
                        </div>
                        <div className="bet-lists-unmatched">
                           <div className="table">
                              <table style={{width: "100%"}}>
                                 <tr>
                                    <th>Runner</th>
                                    <th>Price</th>
                                    <th>Size</th>
                                 </tr>
                              </table>
                           </div>
                        </div>
                     </div>
                     
                     <div className="order-panel">
                        <div className="order-panel-header">
                           <span> Matched Bets ( 0 ) </span>
                        </div>
                        <div className="bet-lists-unmatched">
                           <div className="table">
                              <table style={{width: "100%"}}>
                                 <tr>
                                    <th>Runner</th>
                                    <th>Price</th>
                                    <th>Size</th>
                                 </tr>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  
                  <div className="order-panel">
                     <div className="order-panel-header">
                        <span> Related Events </span>
                     </div>
                     <div className="event-related-panel">
                        <div className="table-row">
                           <div className="event-date">
                              <span> Today </span>
                              <span> 15:30 </span>
                           </div>
                           <div className="event-cell">
                              <span> Cheonan City </span>
                              <span> vs </span>
                              <span> Gimpo City </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
          </div>
        </div>
      </>
   );
};

export default soccer;