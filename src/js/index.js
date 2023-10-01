//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.CSS";

import Home from "./component/home/T"
import TrafficLights from "./component/home/TrafficLights";
//render your react application
ReactDOM.render(<TrafficLights />, document.querySelector("#app"));