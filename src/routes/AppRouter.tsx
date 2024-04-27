import { BrowserRouter, Routes, Route } from "react-router-dom";
import SimplePage from "../Pages/simple page/SimplePage";
// import SimplePage from "../pages/simple page/SimplePage";
const AppRouter = () => {
  return (
    <BrowserRouter>
          {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<SimplePage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;