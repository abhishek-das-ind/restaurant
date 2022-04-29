import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia quasi, error dolorum maiores ipsum tempora sit rem consequatur.</p>
            <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage}/>
        </div>
    </div>
  )
}

export default About