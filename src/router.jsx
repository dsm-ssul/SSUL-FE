import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlovalStyle.style";
import { EnteringPage } from "./pages/EnteringPage";
import { CalculatorPage } from "./pages/CalculatorPage";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<EnteringPage />} />
        <Route path="/Calculator" element={<CalculatorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
