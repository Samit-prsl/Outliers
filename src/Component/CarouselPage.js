import React from 'react'
import MainText from './MainText'
 

export default function CarouselPage() {
  return (
    <div className=''>
        <div className="container my-12 text-lg ">
            <h1 className='text-4xl' style={{fontFamily:'Shantell Sans, cursive'}}>Style that speaks for itself...</h1>
        </div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide my-10" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100 " alt="..." style={{height:'60vh'}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" className="d-block w-100 " alt="..." style={{height:'60vh'}}/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbiUyMHRyZW5keSUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..." style={{height:'60vh'}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    <div className="container my-5">
        <h1 className='text-2xl'  style={{fontFamily:'Shantell Sans, cursive'}}>Fashion trends refer to the popular styles, designs, and colors that dominate the fashion industry at a given time. These trends can apply to clothing, accessories, footwear, and even hairstyles. Fashion trends can change rapidly, influenced by factors such as popular culture, the media, the economy, and global events.So,here we bring up what you were searching for!</h1>    
    </div>
    <div>
        <MainText/>
    </div>
    </div>
    
  )
}
