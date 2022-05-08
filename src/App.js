import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Inventories from './Pages/Home/Inventories/Inventories';
import ManageItem from './Pages/ManageItem/ManageItem';
import AddItem from './Pages/AddItem/AddItem';
import Social from './Pages/Social/Social';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Home/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import RemoveItems from './Pages/RemoveItems/RemoveItems';
import About from './Pages/Shared/About/About';
import 'font-awesome/css/font-awesome.min.css'
import MyItems from './Pages/MyItems/MyItems';
import Verification from './Pages/Home/Verification/Verification';

function App() {
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path="/inventory" element={<Inventories></Inventories>}></Route>
        <Route path="/inventory/:itemId" element=
          {
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/removeItems" element={<RemoveItems></RemoveItems>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/social" element={<Social></Social>}></Route>
        <Route path="/verify" element={<Verification></Verification>}></Route>
      </Routes>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
