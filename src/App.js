import {Home,Payment,SearchResults,SingleHotel,Wishlist,OrderSummary} from "./pages"
import './App.css';
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/" element={  <Home />}/>
        <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />}/>
        <Route path="/hotels/:address" element={<SearchResults />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/confirm-booking/stay/:id" element={<Payment />} />
        <Route path="order-summary" element={<OrderSummary />}/>
    </Routes>
  
    
  );
}

export default App;
