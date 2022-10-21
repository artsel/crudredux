import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";


function Game() {
	return <div className="game"><App /></div>

}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Game />);