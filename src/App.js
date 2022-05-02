import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Inventory from './Pages/Home/Inventory/Inventory';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventories/Inventories';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItem from './Pages/AddItem/AddItem';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path="/inventory" element={<Inventories></Inventories>}></Route>
        <Route path="/inventory/:itemId" element={<ManageItem></ManageItem>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
