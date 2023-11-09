import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';

const Welcome = () => {
  return (
    <div className='welcome'>
       {/* <Navbar/> */}
       <div className="button-container">
        <Link to="/login">
          <button className="welcome-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="welcome-button">Register</button>
        </Link>
      </div>
       <div className='welcome2'>
       <span className="TUINUE WASICHANA">
            {/* Welcome to <span class="text-style-1"></span>TUINUE WASICHANA */}
         </span>

      
       </div>
    </div>
  );
};

export default Welcome;
