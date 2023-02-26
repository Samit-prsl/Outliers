import React from 'react'

export default function Cart() {
  return (
    <>
    <div className='container my-10 h-[60vh] text-2xl text-black p-5' style={{display:'flex',justifyContent:'centre',alignItems:'center'}}>
      The Cart is empty , As soon as we update the stocks , You can browse on it and select your favourites...
    </div>
    <div className="card text-center bg-transparent">
    <div className="card-body">
    <h5 className="card-title my-2 text-2xl ">By Team Outliers</h5>
    <p className="card-text my-2 text-xl">We care both the Environment and your Wadrobe.</p>
    </div>
    </div>
    </>
  )
}
