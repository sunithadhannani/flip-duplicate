import React from 'react'
import im1 from '../images/flip.jpeg'
import im2 from '../images/offers.webp'
import im3 from '../images/mobile.webp'
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
      <img className='img2 i2' src={im3} alt='mobiles' style={{marginLeft:'100px'}}></img>

      </div>
      <div className='names'>
          <h6 style={{fontSize:'20px', marginLeft:'168px'}}><b>Top Offers</b></h6>
      </div>

    </div>
    </div>
    </>
  )
}