import "./router.sass"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import APropos from './pages/A-propos/A-Propos';
import Error from './components/Error/Error';
import Home from './pages/Home/Home';
import Logements from './pages/Logements/Logements';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div className="container">
          <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/logements" element={<Logements />} />
          <Route path="*" element={<Error />} /> 
        </Routes>
        </div>
      <Footer />
    </Router>
  );
};

export default App;
