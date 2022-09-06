import React from 'react';
import MyLog from './css/login.module.css'
//import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';      

function Login() {
  return (
    <body>
      
      <div class={MyLog.container}>

<div class={MyLog.cover1}>

    <form class={MyLog.form}>

        <table>
            <tr><td><input type="email" name="mail" class={MyLog.in} placeholder="Username"  required/></td></tr>
            <tr><td><input type="Password" name="pword" placeholder="Password" class={MyLog.in1} id="pword" required /></td></tr>
            <tr><td><button type ="submit" formaction="hotelBooking" class={MyLog.btn}>Login</button></td></tr>
            <tr><td><p>No Username and Password?</p></td><td><a type="submit" href="register" class={MyLog.btn1}>Register Here For Free!</a></td></tr>
        </table>
    </form>

   
    
</div>
   
</div>



    </body>

  );
}

export default Login;
