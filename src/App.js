import Home from './pages/Home';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Resume" element={<Resume />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Projects" element={<Projects />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
