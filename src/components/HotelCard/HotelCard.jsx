import "./HotelCard.css"
import { useNavigate } from "react-router-dom";


export const HotelCard=({hotel})=>{
    const navigate=useNavigate();
    if(!hotel) return null;
    const {_id,name,image,address,state,rating,price}=hotel;

    
    const handleHotelCardClick=()=>{
        navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`);
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
                <button className="button btn-wishlist absolute">
                    <span class="material-icons favourite cursor">favorite</span>  
                </button>
         
        </div>
    )
}