import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import DetailPage from "../components/DetailPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
