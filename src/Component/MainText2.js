import React from 'react'
import { Link } from 'react-router-dom'

export default function MainText2() {
  return (
    <div className='maintext h-[100vh]'>
      <div className="card mb-3 my-5" style={{Width:'540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://plus.unsplash.com/premium_photo-1673502750959-bc29600bc189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFicmljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="..." style={{width:'450px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-2xl">Sell Your old cloths</h5>
        <p className="card-text">Want to sell your old and obsolete cloths which no longer fits in your wardrobe? or its just not trendy now? Hold up we got the solution , click below to get started!</p>
        <button type="button" className="btn btn-outline-success my-3"><Link to='/SellDash'>Click Here!</Link></button>
      </div>
    </div>
  </div>
</div>
<div className="card mb-3 my-5" style={{Width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-start" alt="..." style={{width:'450px'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title text-2xl">Buy a new one!</h5>
        <p className="card-text">Obssessed with the new fashion trends? Find in one place!</p>
        <button type="button" className="btn btn-outline-success my-3"><Link to='/Services'>Click Here!</Link></button>
      </div>
    </div>
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
