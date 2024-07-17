import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlovalStyle.style";
import { EnteringPage } from "./pages/EnteringPage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { SharePage } from "./pages/SharePage";
import { ShareEXPage } from "./pages/ShareEXPage";
import { ShareEX2Page } from "./pages/ShareEX2Page";
import { LoadingPage } from "./pages/LoadingPage";
import { MainPage } from "./pages/MainPage";
import { VotePage } from "./pages/VotePage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<EnteringPage />} />
        <Route path="/Calculator" element={<CalculatorPage />} />
        <Route path="/Share" element={<SharePage />} />
        <Route path="/ShareEX" element={<ShareEXPage />} />
        <Route path="/ShareEX2" element={<ShareEX2Page />} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/voting" element={<VotePage/>} />
        <Route path="/Loading" element={<LoadingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
