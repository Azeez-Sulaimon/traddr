import React from 'react';
import styled from 'styled-components';
import logo from '../img.jpeg';
import SignupTwo from './Signup-two';

export default function () {
    return (
        <React.Fragment>
           <div className="container-fluid">
            
              
                <div className="row">
                  <div className="col-sm-6">
                  
                  <div className="cname">traddr.co</div>
                  <div>
                  <img src={logo} alt="logo"className="mx-auto d-block img-fluid img"/>
                  </div>
                  </div>
                
                  <div className="col-sm-6 create">
                      <div className="container">
                         <div className="row justify-content-center">
                             
                             <div className="col-8 create-form">
                             <SignupTwo />
                             </div>
                             
                         </div>
                      </div>
                      </div>
                  </div>
                  </div>
        
            
       
        </React.Fragment> 
    )
}
