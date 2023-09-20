
import { Route, Routes, } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home'
import Ayurveda from './pages/Ayurveda';
import Sindha from './pages/Sindha';
import Unani from './pages/Unani';
import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    [
      <Navbar></Navbar>,
      <Routes>
          <Route path='/' Component={Home} exact></Route>
          <Route path='/ayurveda' Component={Ayurveda} exact></Route>
          <Route path='/unani' Component={Unani} exact></Route>
          <Route path='/sindha' Component={Sindha} exact></Route>
          <Route path='/aboutus' Component={Aboutus} exact></Route>
          <Route path='/login' Component={Login} exact></Route>
          <Route path='/signup' Component={Signup} exact></Route>
      </Routes>,
      //for scroll you can delete it
      
    ]
  );
}

export default App;
