import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header'
import Articles from './components/Articles'
import Article from './components/Article'
import Coding from './components/Coding'
import Football from './components/Football'
import Cooking from './components/Cooking'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/coding" element={<Coding />} />
          <Route path="/football" element={<Football />} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
