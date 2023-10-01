//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


function TrafficLights() {
    const [selectedColor, setSelectedColor] = useState("red");
    console.log(selectedColor);

    return (
        <div>
            <div className="traffic-post">
            </div>
            <div className="traffic-light">
                <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
                <div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glowyellow" : "")}></div>
                <div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glowgreen" : "")}></div>
            </div>
        </div>
    );
};
export default TrafficLights;





















