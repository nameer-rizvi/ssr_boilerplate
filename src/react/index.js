import { element, store, serviceWorker } from "./setup/index";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/index";

element.create();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element.get()
);

serviceWorker.register();
