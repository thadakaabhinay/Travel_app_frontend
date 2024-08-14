import {Home,SearchResults,SingleHotel,Wishlist} from "./pages"
import './App.css';
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/" element={  <Home />}/>
        <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />}/>
        <Route path="/hotels/:address" element={<SearchResults />} />
        <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  
    
  );
}

export default App;
