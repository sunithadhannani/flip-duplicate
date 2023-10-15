import React from 'react'
import im1 from '../images/flip.jpeg'
import im2 from '../images/offers.webp'
import im3 from '../images/mobile.webp'
import im4 from '../images/eloctronics.webp'
import im5 from '../images/tv.webp'
import im6 from '../images/fashon.webp'
import im7 from '../images/beauty.webp'
import im8 from '../images/home.webp'
import im9 from '../images/furniture.webp'
import im10 from '../images/flights.webp'
import im11 from '../images/grocery.webp'
// import s1 from '../images/s1.webp'
// import s2 from '../images/s2.webp'
// import s3 from '../images/s3.webp'
// import s4 from '../images/s4.webp'
// import s5 from '../images/s5.webp'
// import s6 from '../images/s6.webp'
// import s7 from '../images/s7.webp'
export default function Flip() {
  return (
    <>
    <div className='container-fluid'>
    <div className='row sbar' >
        <div className='col-md-2 h'>
        <img className='img' src={im1} alt='flipkartlogo' width='65' height='30'></img>
        </div>
        <div className='col-md-5 h'>
        <input type='text' placeholder='search here' className='form-control bar'></input>
        {/* <i class="fa fa-search  icon"></i> */}
        </div>
        <div className='col-md-5 h'>
        <h4 className='nen'><i class="fa fa-shopping-bag"></i> Become a Seller</h4>
        <h4 className='nen'><i class="fa fa-user-circle"></i> Sign in</h4>
        <h4 className='nen'><i class="fa fa-shopping-cart"></i> Cart</h4>

        </div>
    </div>
    <hr style={{color:'gray'}}></hr>
    <div className='row p2'>
      <div className='items'>
      <img className='img2 i2' src={im2} alt='offers' style={{marginLeft:'180px', marginTop:'20px'}} ></img>
      <img className='img2 i2' src={im3} alt='mobiles' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im4} alt='electronic' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im5} alt='tv' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im6} alt='fashion' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im7} alt='beaty' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im8} alt='home' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im9} alt='furniture' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im10} alt='fligt' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      <img className='img2 i2' src={im11} alt='grocery' style={{marginLeft:'100px',marginTop:'20px'}}></img>
      </div>
      <div className='names'>
          <h6 style={{fontSize:'20px', marginLeft:'168px'}}><b>Top Offers</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'60px'}}><b>Mobiles & Tablets</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'30px'}}><b>Electronics</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'60px'}}><b>TVs & Appliances</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'60px'}}><b>Fashion</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'100px'}}><b>Beauty</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'80px'}}><b>Home & Kitchen</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'60px'}}><b>Furniture</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'100px'}}><b>Fligts</b></h6>
          <h6 style={{fontSize:'20px', marginLeft:'120px'}}><b>Grocery</b></h6>
      </div>

    </div>
    </div>
    </>
  )
}