import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList/MovieList';
import MovieCard from './components/MovieList/MovieCard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/" element={<MovieCard />} />
        
      </Routes>
    </Router>
  );
}

export default App;
