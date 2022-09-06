import React from 'react';
import Sear from './css/search.module.css'

//import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';      

function Search() {
  return (
    <body class={Sear.bo}>


                <div class={Sear.container}>

                    <div class={Sear.flexStuff}>

                        <a class={Sear.link1} href="Home">Home</a>
                        <a class={Sear.link2} href="about-us#">About Us</a>
                        <a class={Sear.link3} href="Contact#">Contact</a>
                    </div>

                </div>
                       


</body>

  );
}

export default Search;
