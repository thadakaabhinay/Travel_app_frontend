import {Home,SearchResults,SingleHotel} from "./pages"
import './App.css';
import { Route,Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/" element={  <Home />}/>
        <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel />}/>
        <Route path="/hotels/:address" element={<SearchResults />} />
        
    </Routes>
  
    
  );
}

export default App;
