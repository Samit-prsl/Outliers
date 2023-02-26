import React from 'react'
export default function MainText() {
  return (
    <>
    <div className="container card-group my-10" >
    <div  className="card">
    <img src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjB0cmVuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'300px'}}/>
    <div className="card-body">
      <h5 className="card-title text-xl font-semibold">Want to learn about Cloth-Swapping?</h5>
      <button className="btn btn-success text-black my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Say Yes</button>

    <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
     <div className="offcanvas-header">
     <h5 className="offcanvas-title font-bold" id="offcanvasTopLabel">Cloth-Swapping</h5>
     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body font-semibold" style={{fontFamily:'Poppins, sans-serif'}}>
    Clothes swapping is a sustainable and fun way to update your wardrobe without buying new clothes. Not only is it a sustainable way to update your wardrobe, but it's also a great way to socialize and connect with others.
    </div>
    </div>
    </div>
  </div>
  <div className="card">
    <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzaGlvbiUyMHRyZW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'300px'}}/>
    <div className="card-body">
      <h5 className="card-title text-xl font-semibold">Know more about fabric wastage!</h5>
      <button className="btn btn-success text-black my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Click Here</button>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title font-bold" id="offcanvasRightLabel">Fabric Wastage</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body font-semibold" style={{fontFamily:'Poppins, sans-serif',width:'300px'}}>
  Fabric wastage is a common problem in the textile and fashion industry, where large amounts of fabric are discarded during the manufacturing and production process.By implementing some  strategies, we can reduce fabric wastage and minimize the environmental impact of the textile and fashion industry.
  <button className='btn btn-outline-success text-black my-3 '><a href='/'>Click to go back</a></button>
  </div>
</div>
</div>
  </div>
  <div className="card">
    <img src="https://images.unsplash.com/photo-1557777586-f6682739fcf3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMHRyZW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." style={{height:'300px'}}/>
    <div className="card-body">
      <h5 className="card-title text-xl font-semibold">We have a mission to fulfill...</h5>
      <button className="btn btn-success text-black my-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Know about this</button>

<div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title font-bold" id="offcanvasBottomLabel">Our Mission</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body small font-semibold" style={{fontFamily:'Poppins, sans-serif'}}>
    We at Outliers aim at collecting your waste or obsolete clothing which was a burden for your wadrobe , which will then be properly treated to make up a new idea which will both be trendy and environment friendly!
  </div>
</div>
</div>
  </div>
  <div>
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
