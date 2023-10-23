import React from 'react'
import Link from 'next/link';
import { soccerData } from '@/data/soccer';

const Soccer = () => {
  return (
    <div className="match-table">
      <div className="table-wrap">
        <div className="table-inner">
          <div className="table-head">
            <div className="left-compo">
              <div className="compo-header">
                <div className="icon">
                    <img src="/img/banner-freature/football.svg" alt="feature" />
                </div>
                <span> Soccer </span>
              </div>
              <span> Matched </span>
            </div>
            <ul className="right-compo">
              <li>1</li>
              <li>X</li>
              <li>2</li>
            </ul>
          </div>
          { soccerData.map((soccer) => (
            <div className="table-body" key={soccer.id}>
              <ul className="table-body-left">
                <div className="game-left">
                  <div className={`game-time ${soccer.isPlay && 'active'}`}>
                    <span>{soccer.date}</span>
                    <span>{soccer.time}</span>
                  </div>
                  <div className="game-name">
                    <li>
                      <span>{soccer.team1}</span>
                    </li>
                    <li>
                      <span className="vs">
                        VS
                      </span>
                    </li>
                    <li>
                      <span>{soccer.team2}</span>
                    </li>
                  </div>
                </div>
                <div className="game-match">
                  <div className="match-icons">
                  {soccer.isMatched &&
                    <img src='/img/svg-icon/tv.svg'/>
                  }
                  {soccer.isBM &&
                    <img></img>
                  }
                  {soccer.isF &&
                    <img></img>
                  }
                  </div>
                  <span>{soccer.matched}</span>
                </div>
              </ul>
              
              <div className="table-body-right">
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span>{soccer.bet1[0].rate}</span>
                    <span className="list">{soccer.bet1[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span>{soccer.bet1[1].rate}</span>
                    <span className="list">{soccer.bet1[1].money}</span>
                  </div>
                </div>
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span>{soccer.betx[0].rate}</span>
                    <span className="list">{soccer.betx[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span>{soccer.betx[1].rate}</span>
                    <span className="list">{soccer.betx[1].money}</span>
                  </div>
                </div>
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span>{soccer.bet2[0].rate}</span>
                    <span className="list">{soccer.bet2[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span>{soccer.bet2[1].rate}</span>
                    <span className="list">{soccer.bet2[1].money}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* <!--Prematch--> */}
    </div>
  )
}

export default Soccer;