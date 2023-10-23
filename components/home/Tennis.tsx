import React from 'react'
import Link from 'next/link';
import { tennisData } from '@/data/tennis';

const Tennis = () => {
  return (
    <div className="match-table">
      <div className="table-wrap">
        <div className="table-inner">
          <div className="table-head">
            <div className="left-compo">
              <div className="compo-header">
                <div className="icon">
                    <img src="/img/banner-freature/tennis.svg" alt="feature" />
                </div>
                <span> Tennis </span>
              </div>
              <span> Matched </span>
            </div>
            <ul className="right-compo">
              <li>1</li>
              <li>X</li>
              <li>2</li>
            </ul>
          </div>
          { tennisData.map((tennis) => (
            <div className="table-body" key={tennis.id}>
              <ul className="table-body-left">
                <div className="game-left">
                  <div className={`game-time ${tennis.isPlay && 'active'}`}>
                    <span>{tennis.date}</span>
                    <span>{tennis.time}</span>
                  </div>
                  <div className="game-name">
                    <li>
                      <span>{tennis.team1}</span>
                    </li>
                    <li>
                      <span className="vs">
                        VS
                      </span>
                    </li>
                    <li>
                      <span>{tennis.team2}</span>
                    </li>
                  </div>
                </div>
                <div className="game-match">
                  <div className="match-icons">
                  {tennis.isMatched &&
                    <img src='/img/svg-icon/tv.svg'/>
                  }
                  {tennis.isBM &&
                    <img></img>
                  }
                  {tennis.isF &&
                    <img></img>
                  }
                  </div>
                  <span>{tennis.matched}</span>
                </div>
              </ul>
              
              <div className="table-body-right">
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span>{tennis.bet1[0].rate}</span>
                    <span className="list">{tennis.bet1[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span>{tennis.bet1[1].rate}</span>
                    <span className="list">{tennis.bet1[1].money}</span>
                  </div>
                </div>
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span>{tennis.betx[0].rate}</span>
                    <span className="list">{tennis.betx[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span>{tennis.betx[1].rate}</span>
                    <span className="list">{tennis.betx[1].money}</span>
                  </div>
                </div>
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span>{tennis.bet2[0].rate}</span>
                    <span className="list">{tennis.bet2[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span>{tennis.bet2[1].rate}</span>
                    <span className="list">{tennis.bet2[1].money}</span>
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

export default Tennis;