import React from 'react';


export default function SignupTwo() {
    return (
        
        
        <div>
                <h4 className="text-center user-text">Welcome Jimoh</h4>
                <p className="pw-text text-center">Your account has been created. Create your store</p>
                <form onSubmit="">
                    <div className="form-group ph-text"> 
                        <label>Your store name </label>
                        <input  type="text"
                                className="form-control p-text"
                                placeholder="Enter the name you want for your store" 
                                required
                                />
                    </div>
                    <div className="form-group ph-text">
                        <label>What's your address </label>
                        <input 
                                type="text" 
                                className="form-control p-text"
                                placeholder="Enter your address" 
                                required
                                />
                    </div>
                   
                   <div className="row ph-text">
                       <div  class="form-group col-md-6">
                       <label>Your State </label>
                       <input type="text" className="form-control p-text"
                        placeholder="Enter your state" />
                       </div>
                       
                       <div  class="form-group col-md-6">
                       <label>Your City </label>
                       <input type="text" className="form-control p-text"
                        placeholder="Enter your city" />
                       </div>
                    </div>

                  
                    <p className="pw-text text-center">By signing up you are agreeing to our terms of services and privacy policy</p>
                    <div className="form-group">
                        <input type="submit" value="Save details" className="btn save-btn btn-danger btn-lg" />
                    </div>
                </form>
            </div>
   
    )
}
