import React, { useState, useEffect, useRef } from "react";
import * as THREE from "../../../public/three.min.js";
import FOG from "../../../public/vanta.fog.min.js";
import "./Vanta.css";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div ref={myRef} className="vanta"></div>;
};

export default Vanta;
