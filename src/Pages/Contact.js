import React from 'react'

export default function Contact() {
  const btnclick = ()=>{
    alert('Your response is send')
  }
  return (
    <>
    <div className='container my-10 h-[90vh] text-2xl text-black p-5'>
     Feel Free to ask!
    <div className="mb-3 my-4">
    <label for="exampleFormControlInput1" className="form-label my-3">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
    <label for="exampleFormControlInput1" className="form-label my-3">Phone</label>
    <input className="form-control" id="exampleFormControlInput1" placeholder="+91-XXXXX-XXXXX"/>
    </div>
    <div className="mb-3">
    <label for="exampleFormControlTextarea1" className="form-label my-2">Your Feedback</label>
    <textarea className="form-control my-3" id="exampleFormControlTextarea1" rows="3" placeholder='Your reviews/suggestions here'></textarea>
    <button className='btn btn-outline-success text-black font-semibold' onClick={btnclick}>Send</button>
    </div>
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
