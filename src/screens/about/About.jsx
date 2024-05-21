// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About

import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
// import "../Gsap/Gsap.css"
import '../about/about.css';
import boy from "../../assets/boy.png"

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {


    // Define the GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
        // markers: true,
      }
    });

    // Animation sequence
    tl.to("#fanta", {
      top: "120%",
      left: "0%"
    }, 'orange')
      .to("#orange-cut", {
        top: "160%",
        left: "23%"
      }, 'orange')
      .to("#orange", {
        width: "15%",
        top: "160%",
        right: "10%"
      }, 'orange')
      .to("#leaf", {
        top: "110%",
        rotate: "130deg",
        left: "70%"
      }, 'orange')
      .to("#leaf2", {
        top: "110%",
        rotate: "130deg",
        left: "0%"
      }, 'orange');

    // Cleanup function
    return () => {
      // Ensure to kill animations on unmount to prevent memory leaks
      tl.kill();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='one'> 
      <h1>FANTA</h1>
      <img id="orange-cut" src={boy} alt="" />
      <img id="fanta" src={boy} alt="" />
      <img id="orange" src={boy} alt="" />
      <img id="leaf" src={boy} alt="" />
      <img id="leaf2" src={boy} alt="" />
      <img id="leaf3" src={boy} alt="" />
    </div>
  );
}

export default About;
