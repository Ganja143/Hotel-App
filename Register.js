import React from 'react';
import MyReg from './css/register.module.css'

//import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';      

function Register() {
  return (
    <body class={MyReg.body}>


                <div class={MyReg.container}>
                    <div class={MyReg.con2}>
                        <div class={MyReg.container1} id="container1">
                            <div class={MyReg.forForm}>
                                <h3 class={MyReg.h1}>Registration form</h3>
                                <form role="form" class={MyReg}>
                                    <div class={MyReg.formgroup}>
                                        <input type="text" name="first_name" id="first_name" class={MyReg.form}  placeholder="First Name" required/>
                                    </div>
            
                                    <div class={MyReg.formgroup}>
                                        <input type="text" name="last_name" id="last_name" class={MyReg.form} placeholder="Last Name" required/>
                                    </div>
                                    <div class={MyReg.formgroup}>
                                        <input type="text" name="phone" id="phone" class={MyReg.form} placeholder="Phone Number.." required/>
                                    </div>
                                    <div class={MyReg.formgroup}>
                                        <input type="text" name="country" id="country" class={MyReg.form} placeholder="Country.." required/>
                                    </div>
                                    <div class={MyReg.formgroup}>
                                        <input type="text" name="address" id="address" class={MyReg.form} placeholder="Address.." required/>
                                    </div>
                                    <div class="row">
                                        <div class={MyReg.col}>
                                            <div class={MyReg.formgroup}>
                                                <input type="text" name="city" id="city" class={MyReg.form} placeholder="City.." required/>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6">
                                            <div class={MyReg.formgroup}>
                                                <input type="text" name="zip" id="zip" class={MyReg.form}placeholder="Zip.." required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class={MyReg.formgroup}>
                                        <input type="text" name="bio" id="bio" class={MyReg.form} placeholder="About Yourself.." required/>
                                    </div>
                                    
                                    <div class={MyReg.formgroup}>
                                        <input type="email" name="email-1" id="last_name" class={MyReg.form} placeholder="Your Email.." required/>
                                    </div>
            
                                    <div class={MyReg.formgroup}>
                                        <input type="email" name="email-2" id="email" class={MyReg.form} placeholder="Repeat Email Address" required/>
                                    </div>
            
                                    <div class="row">
                                        <div class={MyReg.col}>
                                            <div class={MyReg.formgroup}>
                                                <input type="password" name="password" id="password" class={MyReg.form} placeholder="Password" required/>
                                            </div>
                                        </div>
                                        <div class={MyReg.col}>
                                            <div class={MyReg.formgroup}>
                                                <input type="password" name="password_confirmation" id="password_confirmation" class={MyReg.form} placeholder="Confirm Password" required/>
                                            </div>
                                        </div>
                                    </div>
            
                                    <input type="submit" value="Register" formaction="Login"class={MyReg.btn}/>
                                    
                                </form>
                            </div>
                           
                              
                           
                        
                        </div>
                       
                    </div>
                    
       
                 </div>
                       


</body>

  );
}

export default Register;
