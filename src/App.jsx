import Blog2 from "./Pages/Blog2";
import "./assets/css/App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
          <Route path="/*" element={<Home />} />
          <Route path="/blog" element={<Blog2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
