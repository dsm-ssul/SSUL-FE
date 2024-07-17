import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlovalStyle.style";
import { EnteringPage } from "./pages/EnteringPage";
import { CalculatorPage } from "./pages/CalculatorPage";
import { SharePage } from "./pages/SharePage";
import { ShareEXPage } from "./pages/ShareEXPage";
import { ShareEX2Page } from "./pages/ShareEX2Page";

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
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
