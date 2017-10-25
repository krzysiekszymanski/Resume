import React, { Component } from 'react';

class Testemonials extends Component {
  render() {
    if (this.props.data) {
      var testimonials = this.props.data.testimonials.map(function(testimonial){
        return
      });
    }
    return (
      <section id="testimonials">
      <div className="text-container">
      <video playsinline loop autoPlay muted poster="testimonials-bg.jpg" id="bgvid">
        <source src="images/video/klawiatura.mp4" type="video/mp4" />
      </video>

         <div className="row">
            <div className="two columns header-col">
               <h1><span>Client Testimonials</span></h1>
            </div>
            <div className="ten columns flex-container">
               <div className="flexslider">
                  <ul className="slides">
                     <li>
                        <blockquote>
                           <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                           to do what you believe is great work. And the only way to do great work is to love what you do.
                           If you havent found it yet, keep looking. Dont settle. As with all matters of the heart, youll know when you find it.
                           </p>
                           <cite>Steve Jobs</cite>
                        </blockquote>
                     </li>

                     <li>
                        <blockquote>
                           <p>This is Photoshops version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                           Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                           nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
                           </p>
                           <cite>Mr. Adobe</cite>
                        </blockquote>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
       </div>
   </section>
    );
  }
}

export default Testemonials;
