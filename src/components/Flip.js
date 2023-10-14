import React from 'react'
import im1 from '../images/flip.jpeg'
import offer from '../images/offers.webp'
export default function Flip() {
  return (
    <>
    <div className='container-fluid'>
    <div className='row sbar' >
        <div className='col-md-2 h'>
        <img className='img' src={im1} alt='flipkartlogo' width='65' height='30'></img>
        </div>
        <div className='col-md-5 h'>
        <input type="text" placeholder='      search' className="form-control  bar" style={{ borderRadius: "30px"}}></input>
        </div>
        <div className='col-md-5 h'>
        <h4 className='nen'><i class="fa fa-shopping-bag"></i> Become a Seller</h4>
        <h4 className='nen'><i class="fa fa-user-circle"></i> Sign in</h4>
        <h4 className='nen'><i class="fa fa-shopping-cart"></i> Cart</h4>
        </div>
    </div>
    <hr style={{color:'gray'}}></hr>
    <div className='row p2'>
    <img className='img1' src={offer} alt='' width='65' height='30' style={{marginLeft:150, marginTop:20}}></img>
    </div>
    </div>
    </>
  )
}