import React from 'react'
import Think from '../../images/ThinkLikeAnOwner.jpg';
import Feed from '../../images/Feed2.JPG';
import './AboutText.css'; 
function AboutText() {
  return (
  <div className='main-product'>
    <div style={{marginTop:'200px'}}></div>
    <div className='amount-images'>
      <div className='img-container'>
        <img src={Think} alt='dayoldchick' className='dayoldchick' />

      </div>
      <div className='img-container'>
         <h1>About US</h1>
         <p style={{justifyContent:'true', textAlign:'justify',fontWeight:'lighter',paddingLeft:'30px', paddingRight:'30px'}}>
          EthioChicken is one of the leading poultry companies in East Africa. The company produces
          and sells improved breed of day-old chickens(DOCs) and blended poulty feed to it's customers,
          thereby driving gains in productivity and creating a more stable and diverse supply of protein at
          the rural household level.EthioChicken is the only private company in Ethiopia focused exclusively
          on reaching smallholder farmers, and has created an innovative, economically viable, and replicable distribution
          model, EthioChicken has produced millions of day-old chickens and impacted millions of rural household across Ethiopia.  
         </p>
        
      </div>
    </div>
  </div>
  )
}

export default AboutText
