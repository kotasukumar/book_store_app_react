import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import BookStoreHome from './Components/Home/BookStoreHome';
import Cart from './Components/Cart/Cart';


function App() {
  return (
    <div className="App">
     <Header/> 
        <Routes>
          <Route path='' element={<BookStoreHome/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
