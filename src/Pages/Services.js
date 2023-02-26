import React,{useState} from 'react'
import Cookies from 'universal-cookie';
import Auth from '../Component/Auth';
import Hero from '../Component/Hero';
const cookie = new Cookies();
export default function Services() {
  const [IsAuth , SetUpAuth] = useState(cookie.get("auth-token"));
  return (
    <div>
       <>
       
        {IsAuth ? <div>
          <Hero/>
        </div> :
         <div>
            <Auth SetUpAuth={SetUpAuth}/>
        </div>}
        </>
    </div>
  )
}
