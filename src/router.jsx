import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlovalStyle.style";
import { EnteringPage } from "./pages/EnteringPage";
import App from "./App";

function MainRouter() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<EnteringPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
