import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from"./components/cart/cart";
import Main from"./components/main/main";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Main/>}></Route>
      <Route path="/"element={<Cart/>}></Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
