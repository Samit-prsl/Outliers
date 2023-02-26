import React,{useState} from 'react'

export default function Hero2() {
  
    const [picture, setPicture] = useState(null);
  
    const handlePictureInputChange = (event) => {
      setPicture(event.target.files[0]);
    }
    const click = ()=>{
      alert("Verified Successfully")
    }
    const btnClick = ()=>
    {
      alert("Your request is processing , we will get back to you soon")
    }
  return (
    <div className='container my-10'>
       <h1 className='text-2xl' style={{fontFamily:'Shantell Sans, cursive'}}>The fashion industry is one of the biggest polluters in the world. Let's change that by adopting sustainable practices and reducing our fabric waste.</h1>
       <form>
  <div className="mb-3 my-5">
    <label htmlFor="exampleInputEmail1" className="form-label text-xl">Your Full Name</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-xl">Your Address</label>
    <input type="address" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 my-5">
    <label htmlFor="exampleInputEmail1" className="form-label text-xl">District</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-xl">City</label>
    <input type="address" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 my-5">
    <label htmlFor="exampleInputEmail1" className="form-label text-xl">Pin code</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-xl">Fabric Material</label>
    <input type="address" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className=' my-5'>
      <h1 className='text-xl'>Provide us some pictures of the same...</h1>
      <input type="file" accept="image/*" onChange={handlePictureInputChange} className='my-2'/>
      {picture && <img src={URL.createObjectURL(picture)} alt='...' style={{height:'200px',width:'300px'}} />}
    </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input " id="exampleCheck1" onClick={click}/>
    <label className="form-check-label text-lg" htmlFor="exampleCheck1">You are not a robot</label>
  </div>
 
  <button type="submit" className="btn btn-outline-success text-black font-semibold" onClick={btnClick}>Submit</button>
</form>
<div className="card text-center bg-transparent my-3">
    <div className="card-body">
    <h5 className="card-title my-2 text-2xl ">By Team Outliers</h5>
    <p className="card-text my-2 text-xl">We care both the Environment and your Wadrobe.</p>
    </div>
    </div>
    </div>
  )
}
