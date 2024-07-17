import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlovalStyle.style";
import { EnteringPage } from "./pages/EnteringPage";
import { LoadingPage } from "./pages/LoadingPage";
import { MainPage } from "./pages/MainPage";
import { VotePage } from "./pages/VotePage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<EnteringPage />} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/voting" element={<VotePage/>} />
        <Route path="/Loading" element={<LoadingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
