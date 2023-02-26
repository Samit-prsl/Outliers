import React,{useState} from 'react'
import Auth from '../Component/Auth2'
import Cookies from 'universal-cookie';
import Hero2 from '../Component/Hero2'
const cookie = new Cookies();
export default function SellDash() {
  const [IsAuth , SetUpAuth] = useState(cookie.get("auth-token"));
  return (
    <div className='container h-[100vh]'>
      <div>
       <>
       
        {IsAuth ? <div>
          <Hero2/>
        </div> :
         <div>
            <Auth SetUpAuth={SetUpAuth}/>
        </div>}
        </>
    </div>
    </div>
  )
}
