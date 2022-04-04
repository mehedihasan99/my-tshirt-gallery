import { Route, Routes } from 'react-router-dom';
import './App.css';
import GrandPa from './components/GrandPa/GrandPa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/orderReview' element={<OrderReview></OrderReview>} />
        <Route path='/grandPa' element={<GrandPa></GrandPa>} />
      </Routes>
    </div>
  );
}

export default App;
