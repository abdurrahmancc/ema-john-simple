import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./utilities/Component/About/About";
import Header from "./utilities/Component/Header";
import Inventory from "./utilities/Component/Inventory/Inventory";
import NotFound from "./utilities/Component/NotFound/NotFound";
import Orders from "./utilities/Component/Orders/Orders";
import Shop from "./utilities/Component/Shop/Shop";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
