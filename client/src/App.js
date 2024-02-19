// Import necessary components from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components
import MovieList from './components/MovieList/MovieList';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        
      </Routes>
    </Router>
  );
}

export default App;
