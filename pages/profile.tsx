import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import { API_URL } from '@/data/static';

const profile = () => {
  const [stake1, setStake1] = useState<number>(2000);
  const [stake2, setStake2] = useState<number>(5000);
  const [stake3, setStake3] = useState<number>(10000);
  const [stake4, setStake4] = useState<number>(25000);
  const [plus1, setPlus1] = useState<number>(2000);
  const [plus2, setPlus2] = useState<number>(5000);
  const [plus3, setPlus3] = useState<number>(10000);
  const [plus4, setPlus4] = useState<number>(25000);
  const [password, setPassword] = useState<string>("");
  
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

  const changePassword = (e: any) => {
    const url = `${API_URL}/client/changepassword`;
    
    Axios.post(url, password, {
      headers: {
        'Content-Type': 'text/plain' // Set the content type to 'text/plain' for raw data
      }
    })
      .then(response => {

      })
      .catch(error => {
      });
  }

  const saveChanges = (e: any) => {
    localStorage.setItem("stake1", stake1.toString());
    localStorage.setItem("stake2", stake2.toString());
    localStorage.setItem("stake3", stake3.toString());
    localStorage.setItem("stake4", stake4.toString());
    localStorage.setItem("plus1", plus1.toString());
    localStorage.setItem("plus2", plus2.toString());
    localStorage.setItem("plus3", plus3.toString());
    localStorage.setItem("plus4", plus4.toString());
  }

  return (
    <>
      <div className="main-body-tabbing">
        <div className="container"> 
          <div className="edit-table m-t-40">
            <div className="table-header">
              <span> Profile </span>
            </div>
            <div className="table-body">
              <div className="edit-fields">
                <div className="table-item">
                  <span className="item-title"> Stake1 </span>
                  <input type="number" value={stake1} onChange={(e) => setStake1(Number(e.target.value))}/>
                </div>
                <div className="table-item">
                  <span className="item-title"> Stake2 </span>
                  <input type="number" value={stake2} onChange={(e) => setStake2(Number(e.target.value))} />
                </div>
                <div className="table-item">
                  <span className="item-title"> Stake3 </span>
                  <input type="number" value={stake3} onChange={(e) => setStake3(Number(e.target.value))} />
                </div>
                <div className="table-item">
                  <span className="item-title"> Stake4 </span>
                  <input type="number" value={stake4} onChange={(e) => setStake4(Number(e.target.value))} />
                </div>
                <div className="table-item">
                  <span className="item-title"> Plus1 </span>
                  <input type="number" value={plus1} onChange={(e) => setPlus1(Number(e.target.value))} />
                </div>
                <div className="table-item">
                  <span className="item-title"> Plus2 </span>
                  <input type="number" value={plus2} onChange={(e) => setPlus2(Number(e.target.value))} />
                </div>
                <div className="table-item">
                  <span className="item-title"> Plus3 </span>
                  <input type="number" value={plus3} onChange={(e) => setPlus3(Number(e.target.value))} />
                </div>
                <div className="table-item">
                  <span className="item-title"> Plus4 </span>
                  <input type="number" value={plus4} onChange={(e) => setPlus4(Number(e.target.value))} />
                </div>
              </div>
              <div className="btns">
                <div className="cmn--btn" style={{cursor: "pointer" }} onClick={saveChanges}>
                  <span> Save Changes </span>
                </div>
                <div className="btn--two" style={{cursor: "pointer" }}>
                  <span> Cancel </span>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-table">
            <div className="table-header">
              <span> Change Password </span>
            </div>
            <div className="table-body">
              <div className="edit-fields">
                <div className="table-item">
                  <span className="item-title"> New Password </span>
                  <input type="password" value={password} onChange={e => { setPassword(e.target.value); }} required/>
                </div>
              </div>
              <div className="cmn--btn" onClick={changePassword} style={{cursor: "pointer" }}>
                <span> Update </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default profile;
