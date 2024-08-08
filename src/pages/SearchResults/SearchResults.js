import { Fragment, useState } from "react";
import { HotelCard, Navbar } from "../../components";
import { useDate,useCategory } from "../../context";
import axios from "axios";
import { useEffect } from "react";


export const SearchResults=()=>{
    const {destination}=useDate();
    const {hotelCategory}=useCategory();
    const [hotels,setHotels]=useState([]);
    useEffect(()=>{
        (async ()=>{
            try{
                const {data}=await axios.get(
                    `https://travel-app-backend-five.vercel.app/api/hotels?category=${hotelCategory}`
                );
               setHotels(data);
            }catch(err){
                console.log(err)
            }
        })()
    },[destination]);
    const filteredSearchResults=hotels.filter(({city,address,state}) =>
        address.toLowerCase() === destination.toLowerCase()
        || city.toLowerCase() === destination.toLowerCase()
        || state.toLowerCase() === destination.toLowerCase()

    );


    return(
        <Fragment>
            <Navbar/>
            <section className="main d-flex align-center gap-larger wrap">
                {
                    filteredSearchResults ? ( filteredSearchResults.map((hotel)=>
                    (<HotelCard key={hotel._id} hotel={hotel}/>
                ))
                ):(<h3>Nothing Found</h3>)
                }
            </section>
        </Fragment>
    )
}