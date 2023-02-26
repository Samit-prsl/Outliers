import React from 'react'

export default function Hero(){
  const btnclick = ()=>{
    alert('Website Under Progress , we will reach out soon as we get some stocks.')
  }
  return (
    <div className='container my-10 h-[100vh]'>
    <div className="row row-cols-1 row-cols-md-3 g-3 my-5">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29tZW4lMjBjbG90aGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'450px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">For Her</h5>
        <p className="card-text text-xl font-normal">Check Out the latest styles and brands for her.</p>
        <button className='btn btn-outline-success text-black my-3' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 ">
      <img src="https://images.unsplash.com/photo-1618453292507-4959ece6429e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'450px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">For Him</h5>
        <p className="card-text text-xl font-normal">Why leave the men on Wait?</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1534881210762-dc317b7fb644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtpZHMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'450px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">For the little ones too</h5>
        <p className="card-text text-xl font-normal">Even the Children wanna look trendy!</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
</div>
<div className="row row-cols-1 row-cols-md-3 g-3 my-5">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwY2xvdGhpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'300px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">Look at your shoes!</h5>
        <p className="card-text text-xl font-normal">Your foot aslo deserves style and comfort</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1428790067070-0ebf4418d9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="..." style={{height:'300px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">Sports shoes any?</h5>
        <p className="card-text text-xl font-normal">Bring up the game bro!</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1612015670817-0127d21628d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF0aGxlaXN1cmUlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'300px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">Athleisure is important!</h5>
        <p className="card-text text-xl font-normal">Shoes both casual and for the GYM</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
</div>
<div className="row row-cols-1 row-cols-md-3 g-3 my-5">
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHklMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'400px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">Let's get ready for the date?</h5>
        <p className="card-text text-xl font-normal">Everyone needs something special to feel special</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1511130558090-00af810c21b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcnR5JTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'400px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">Casuals for her!</h5>
        <p className="card-text text-xl font-normal my-3">She too wants to be comfortable...</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src="https://images.unsplash.com/photo-1519090846590-90696b6a0af4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y291cGxlJTIwZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'400px'}}/>
      <div className="card-body">
        <h5 className="card-title text-2xl font-medium">For Something Memorable!</h5>
        <p className="card-text text-xl font-normal my-3">For moments we can cherish...</p>
        <button className='btn btn-outline-success text-black my-5' onClick={btnclick}>Check Out!</button>
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
