import React from 'react'
import Link from 'next/link';
import { cricketData } from '@/data/cricket';

const Cricket = () => {
  return (
    <div className="match-table">
      <div className="table-wrap">
        <div className="table-inner">
          <div className="table-head">
            <div className="left-compo">
              <div className="compo-header">
                <div className="icon">
                    <img src="/img/banner-freature/cricket.svg" alt="feature" />
                </div>
                <span> Cricket </span>
              </div>
              <span> Matched </span>
            </div>
            <ul className="right-compo">
              <li>1</li>
              <li>X</li>
              <li>2</li>
            </ul>
          </div>
          { cricketData.map((cricket) => (
            <div className="table-body" key={cricket.id}>
              <ul className="table-body-left">
                <div className="game-left">
                  <div className={`game-time ${cricket.isPlay && 'active'}`}>
                    <span>{cricket.date}</span>
                    <span>{cricket.time}</span>
                  </div>
                  <div className="game-name">
                    <li>
                      <span>{cricket.team1}</span>
                    </li>
                    <li>
                      <span className="vs">
                        VS
                      </span>
                    </li>
                    <li>
                      <span>{cricket.team2}</span>
                    </li>
                  </div>
                </div>
                <div className="game-match">
                  <div className="match-icons">
                  {cricket.isMatched &&
                    <img src='/img/svg-icon/tv.svg'/>
                  }
                  {cricket.isBM &&
                    <img></img>
                  }
                  {cricket.isF &&
                    <img></img>
                  }
                  </div>
                  <span>{cricket.matched}</span>
                </div>
              </ul>
              
              <div className="table-body-right">
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span className="list">{cricket.bet1[0].rate}</span>
                    <span>{cricket.bet1[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span className="list">{cricket.bet1[1].rate}</span>
                    <span>{cricket.bet1[1].money}</span>
                  </div>
                </div>
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span className="list">{cricket.betx[0].rate}</span>
                    <span>{cricket.betx[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span className="list">{cricket.betx[1].rate}</span>
                    <span>{cricket.betx[1].money}</span>
                  </div>
                </div>
                <div className="table-point">
                  <div className="table-pointing-box">
                    <span className="list">{cricket.bet2[0].rate}</span>
                    <span>{cricket.bet2[0].money}</span>
                  </div>
                  <div className="table-pointing-box color-pink">
                    <span className="list">{cricket.bet2[1].rate}</span>
                    <span>{cricket.bet2[1].money}</span>
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

export default Cricket;