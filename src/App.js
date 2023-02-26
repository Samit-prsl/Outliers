
import './App.css';
import CarouselPage from './Component/CarouselPage';
import Navbar from './Component/Navbar';
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import SellDash from './Pages/SellDash';
import Cart from './Pages/Cart';
function App() {
  return (
    <Router>
     <Navbar/>
    <Routes>
      <Route exact path='/' element={<CarouselPage/>}/>
      <Route  path='/About' element={<About/>}/>
      <Route  path='/Services' element={<Services/>}/>
      <Route  path='/Contact' element={<Contact/>}/>
      <Route  path='/SellDash' element={<SellDash/>}/>
      <Route  path='/Cart' element={<Cart/>}/>
    </Routes>
    </Router>
  );
}

export default App;
