import React from 'react'
import { auth,provider } from '../FireBase-Config';
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookie = new Cookies();
export default function Auth(props) {
    const {SetUpAuth} = props; 
  const SignIn = async ()=>{
    try{
    const res = await signInWithPopup(auth,provider);
    cookie.set("auth-token",res.user.refreshToken);
    SetUpAuth(true);
    }catch(err)
    {console.log(err);}
  }
  return (
    <div className='container my-10 h-[100vh]'>
      <h1 className='text-2xl my-5'  style={{fontFamily:'Shantell Sans, cursive',fontWeight:'normal'}}>Every piece of fabric has the potential to become something new and beautiful. Let's not waste that potential. Join us in the movement.</h1>
      <div className="card text-center my-12">
       
  <div className="card-header text-2xl p-6">
    Sign Up Required!
  </div>
  <div className="card-body bg-slate-100">
    <h5 className="card-title text-lg">Sign in with Google</h5> 
    <button  className="btn btn-outline-success mt-2 pb-2" onClick={SignIn}>Sign In</button>
  </div>
  <hr/>
  <div className="card-footer text-muted text-xl p-6">
    Hang on! We are searching for some new trends in the meantime lol..
  </div>
</div>
<div className="card text-center bg-transparent">
    <div className="card-body">
    <h5 className="card-title my-2 text-2xl ">By Team Outliers</h5>
    <p className="card-text my-2 text-xl">We care both the Environment and your Wadrobe.</p>
    </div>
    </div>
    </div>
  )
}
