import "./Navbar.css";
import { useDate,useAuth } from "../../context";



export const Navbar = () => {

  const {destination,dateDispatch,checkInDate,checkOutDate,guests }=useDate();

  const { accessToken,authDispatch}=useAuth();

  const handleSearchClick=()=>{
    if(accessToken){
      dateDispatch({
        type:"OPEN_SEARCH_MODAL",
      });
    }else{
      authDispatch({
        type:"SHOW_AUTH_MODAL",
    })
    }

    }
  

  const handleAuthClick=()=>{
    if(!accessToken){
      authDispatch({ 
        type:"SHOW_AUTH_MODAL",
  
       })

    }
  
  }
  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <a className="link" href="/">
          Travels
        </a>
      </h1>

      <div className="form-container d-flex align-center cursor-pointer shadow " onClick={handleSearchClick}>
        <span className="form-option">{destination || "Any where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
        { checkInDate && checkOutDate ? `${checkInDate.toLocaleDateString("en-US",{day:"numeric",month:"short"})} - ${checkOutDate.toLocaleDateString("en-US",{day:"numeric",month:"short"})}`:"Any Week" }
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">{guests >0 ?`${guests} guests` :"Add Guests"}</span>
        <span class="search material-icons-outlined">search</span>
      </div>
      

      <nav className="d-flex align-center gap-large" onClick={handleAuthClick}>
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-symbols-outlined profile-option menu">menu</span>
          <span className="material-symbols-outlined profile-option person">person_2</span>
        </div>
      </nav>
    </header>
  );
};
