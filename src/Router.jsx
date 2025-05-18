import "./router.sass";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import APropos from "./pages/A-propos/A-Propos";
import Error from "./components/Error/Error";
import Home from "./pages/Home/Home";
import Logements from "./pages/Logements/Logements";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <div className="layout">
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/a-propos" element={<APropos />} />
              <Route path="/logements/:id" element={<Logements />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

        </div>
                  <Footer />
      </div>
    </Router>
  );
};

export default App;
