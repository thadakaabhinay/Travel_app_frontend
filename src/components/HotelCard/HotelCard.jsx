import "./HotelCard.css"
import { useNavigate } from "react-router-dom";
import { useWishlist,useAuth } from "../../context";
import { findHotelInWishlist } from "../../utils";


export const HotelCard=({hotel})=>{
    const navigate=useNavigate();
    const {wishlistDispatch,wishlist}=useWishlist();
    const {accessToken,authDispatch}=useAuth();

   
    if(!hotel) return null;
    const {_id,name,image,address,state,rating,price}=hotel;
    const isHotelInWishlist=findHotelInWishlist(wishlist,_id);
  
    
    const handleHotelCardClick=()=>{
        navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`);
    }
    const handleWishlistClick=()=>{
        if(accessToken){
            if(!isHotelInWishlist){
                wishlistDispatch({
                    type:"ADD_TO_WISHLIST",
                    payload:hotel,
                });
                navigate("/wishlist")
            }else{
                wishlistDispatch({
                   type:"REMOVE_FROM_WISHLIST",
                   payload:_id, 
                })
            }

        }else{
            authDispatch({
                type:"SHOW_AUTH_MODAL",
            })
        }
        
       
    }
    return (
        <div  className="relative hotelcard-container shadow cursor-pointer">
            <div onClick={handleHotelCardClick}>
                <img className="img" src={image}/>
                <div className="hotelcard-details">
                    <div className="d-flex align-center space-btw">
                        <span className="location">{address}, {state}</span>
                        <span classname="rating d-flex align-center">
                            <span className="material-icons-outlined">star</span>
                            <span>{rating}</span>
                        </span>
                    </div>
                    <p className="hotel-name">{name}</p>
                    <p className="price-details">
                        <span className="price">{price}</span>
                        <span>night</span>
                    </p>
                </div>
                
            </div>
                <button className="button btn-wishlist absolute" onClick={handleWishlistClick}>
                    <span class={`material-icons favourite cursor ${isHotelInWishlist ? "fav-selected" :""}`}>favorite</span>  
                </button>
         
        </div>
    )
}