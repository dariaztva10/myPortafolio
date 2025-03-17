import routes from './routes/routes';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './component/navbar.jsx';
import { Footer } from './component/footer.jsx';

function App() {


  return (
    <BrowserRouter basename='/'>
      <div id="top"></div>
      <Navbar />
      <Routes>
        {routes.map((route) => <Route {...route} key={route.path} />)}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
