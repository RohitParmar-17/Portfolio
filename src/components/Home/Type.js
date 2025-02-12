// import React from "react";
// import Typewriter from "typewriter-effect";

// function Type() {
//   return (
//     <Typewriter
//       options={{
//         strings: [
//           "Software Developer",
//           "3rd Year Student",
//           "MERN Stack Developer",
//         ],
//         autoStart: true,
//         loop: true,
//         deleteSpeed: 50,
//       }}
//     />
//   );
// }

// export default Type;

import React from "react";
import { TypeAnimation } from "react-type-animation";

function Type() {
  return (
    <div className="TypeAnimation">
      <TypeAnimation
        sequence={[
          "Software Developer", 1000, 
          "3rd Year Student", 1000, 
          "MERN Stack Developer", 1000
        ]}
        speed={50}
        wrapper="span"
        repeat={Infinity}
      />
    </div>
  );
}

export default Type;
