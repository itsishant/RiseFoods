// import React from "react";
// import ReactDOM from "react-dom/client";
// import { jsx } from "react/jsx-runtime";

// //React.createElement => Object => HTMLElement(render)

// // const Heading = () => {
// //     return  <h1 className="one"> Hello Ishant</h1>-dom
// // };

// // const Heading = () => {
// //     return {2+3} <h1 className="hello"> Hello Ishant</h1>
// // };

// const Title= () => (
    
//     <h1>
//          <Headingcomponent />
//          This is very easy
//     </h1>
// );

// // Component Composition 
// const Headingcomponent = () => (
//     <div id="container">
//         <h1> Hello ishu</h1>
//     </div>
// );

// // JSX => Babel transpiles it to React.createElement => ReactElemnet- JS Object => HTMLElemnet(render)

// const root = ReactDOM.createRoot(document.getElementById("root")); // we are dealing with browser so ReactDOM

// root.render(<Headingcomponent />);