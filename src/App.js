//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Home from './components/Home'
import Header from './components/Header/Header'
import Movie from './components/Movie';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
