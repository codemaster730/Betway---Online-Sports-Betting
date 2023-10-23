import React, { useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import BreadCrumb from '@/components/BreadCrumb';
import { useRouter } from 'next/router';
import { API_URL } from '@/data/static';
import { IS_LOCAL } from '@/data/static';

const login = () => {
   const [email, setEmail] = useState<string>("");
   const [password, setPassword] = useState<string>("");
   const [remember, setRemember] = useState<boolean>(true);
   const [error, setError] = useState<string>("");
   const router = useRouter();

   const submit = (e: any) => {
      e.preventDefault();

      if(IS_LOCAL) {
         sessionStorage.setItem("auth-token", "111");
         sessionStorage.setItem("username", email);
         router.push('/');
      }
      else {
         const config = {
            headers:{
               'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json',
            }
         };
         const url = `${API_URL}/client/login?login=${email}&password=${password}&source=web`;
         
         Axios.get(url)
            .then(response => {
               if(response.status == 200) {
                  if(remember) {
                     localStorage.setItem("auth-token", response.headers['authorization']);
                     localStorage.setItem("username", email);
                  }
                  else {
                     sessionStorage.setItem("auth-token", response.headers['authorization']);
                     sessionStorage.setItem("username", email);
                  }
                  router.push('/');
               }
               else {
                  setError(response.data.Message);
               }
            })
            .catch(error => {
               setError(error.response.data.Message);
            });
      } 
   }

   return (
      <>
         <main>
            <div className="modal mylogin show login-img">
               <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                     <div className="modal-header">
                        <div className="head">
                           <h5>
                              Sign into your account
                           </h5>
                        </div>
                     </div>
                     <div className="modal-body">
                        <div className="register-from">
                           <form action="#0" onSubmit={submit}>
                              <div className="items">
                                 <div className="form-input">
                                    <label htmlFor="email3" className="form-label">Username</label>
                                    <input type="input" id="email3" placeholder="Your Username" onChange={(e) => setEmail(e.target.value)} required/>
                                 </div>
                              </div>
                              <div className="items">
                                 <div className="form-input">
                                    <label htmlFor="password-field" className="form-label">Password</label>
                                    <div className="form-group">
                                       <input id="password-field" type="password" className="form-control" placeholder="Your Password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                                    </div>
                                 </div>
                              </div>
                              <div className="items">
                                 <div className="remember d-flex align-items-center justify-content-between">
                                    <div className="form-check">
                                       <label className="form-check-label" htmlFor="flexCheckDefault22">
                                          <input className="form-check-input" type="checkbox" id="flexCheckDefault22" onClick={() => setRemember(!remember) } checked={remember}/>
                                          Remember me
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              {error !== "" &&
                                 <div className="items">
                                    <div className="error">
                                       <span> {error} </span>
                                    </div>
                                 </div>
                              }
                              <div className="items text-center">
                                 <button type="submit" className="cmn--btn">
                                    <span>Start Playing</span>
                                 </button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </>
   );
};

export default login;