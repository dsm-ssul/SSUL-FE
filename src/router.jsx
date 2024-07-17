import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlovalStyle.style";
import { EnteringPage } from "./pages/EnteringPage";
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
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
