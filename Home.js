import React from 'react';
import  MyHome from './css/style.module.css'
import decor from './images/capeviewclifton.webp'
import image1 from './images/2.jpg'
import image2 from './images/C1.jpg'
import image3 from './images/mandelarhodesplace.jpg'
import image4 from './images/1.jpg'
//import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';      

function Home() {
  return (
    <body class={MyHome.datBody}>
      
      
      <div class={MyHome.container}>
         <div class={MyHome.links}>
    <a href="/" class={MyHome.home1}>Home</a> 
    <a href="/Gallery#Gallery" class={MyHome.home2}>Gallery</a>
    <a href="Login" class={MyHome.home3}>Login</a>
    <a href="Register" class={MyHome.home4}>Register</a>

</div>

<div class={ MyHome.titleContainer} >
    <img class={ MyHome.img1} src={decor}/>
    <div class={MyHome.title}><h2>The best Port hotels in South Africa</h2></div>
</div>
<div class={ MyHome.main}>

        <div class={MyHome.gallery}> 
            <h2>Gallery</h2>
        </div>

        <div class={ MyHome.images}>
                <img src={image1} class={ MyHome.image1} />
                <article class={ MyHome.h1}>
                    <p>. Manyisa Golden Hotel</p>
                    <p>. Luxurious and five star Hotel rooms</p>
                    <p>. 600 Rooms and the Durban beach and beautiful views</p>
                    <p>. Affordable and easy access</p>
                </article>
        </div>
        <div class={ MyHome.image2}>
            <img src={image2} class={ MyHome.image1} />
            <article class={ MyHome.h1}>
                <p>. Manyisa Golden Hotel</p>
                <p>. Luxurious and five star Hotel rooms</p>
                <p>. 100 rooms near the beach of Cape Town</p>
                <p>. Beautiful views by the table Mountain</p>
                <p>. Affordable and easy access</p>
            </article>
        </div>
        <div class={ MyHome.image4}>
            <img src={image4} class={ MyHome.image1} />
            <article class={ MyHome.h1}>
                <p>. Manyisa Golden Hotel</p>
                <p>. Luxurious and five star Hotel rooms</p>
                <p>. 300 rooms near the beach of Pietermaritzburg</p>
                <p>. Beautiful port view and the Zulu culture costumes and events</p> 
                <p>. Affordable and easy access</p>
            </article>
        </div>
        <div class={ MyHome.image3}>
            <img src={image3} class={ MyHome.image1} />
            <article class={ MyHome.h1}>
                <p>. Manyisa Golden Hotel</p>
                <p>. Luxurious and five star Hotel rooms</p>
                <p>. 300 rooms near the beach of Port Elizabeth</p>
                <p>. Beautiful port view and the Xhosa culture costumes and events</p> 
                <p>. Affordable and easy access</p>
            </article>
        </div>

</div>


</div>


    </body>

  );
}

export default Home;
