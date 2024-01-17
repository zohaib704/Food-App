import { render } from "preact";
import { App } from "./app.jsx";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Redux/Store.jsx";

render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
  </>,
  document.getElementById("app")
);
