import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import App from "./app";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);