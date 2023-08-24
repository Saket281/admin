import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import UserList from "./components/pages/userlist/UserList";
import User from "./components/pages/user/User";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewUser from "./components/pages/newuser/NewUser";
import ProductList from "./components/pages/productlist/ProductList";
import Product from "./components/pages/product/Product";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
