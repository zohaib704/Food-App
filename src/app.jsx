import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
