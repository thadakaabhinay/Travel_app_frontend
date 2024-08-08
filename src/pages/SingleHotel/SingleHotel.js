import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { FinalPrice, HotelDetails, HotelImages, Navbar } from "../../components";
import "./SingleHotel.css"


export const SingleHotel=()=>{
  
    const {id}=useParams();
    const [singleHotel,setSingleHotel]=useState({});

    useEffect(()=>{
        (async ()=>{
            try{
                const {data}=await axios.get(`https://travel-app-backend-five.vercel.app/api/hotels/${id}`)
                setSingleHotel(data);
               
            }catch(err){
                console.log(err);
            }
        })()
    },[id])
    const {name,state}=singleHotel;
    return (
        <>
        <Navbar/>
        <main className="single-hotel-page">
            <p className="hotel-name-address">{name},{state}</p>
            <HotelImages singleHotel={singleHotel}/>
            <div className="d-flex ">
                <HotelDetails singleHotel={singleHotel}/>
                <FinalPrice singleHotel={singleHotel}/>
            </div>
        </main>
        </>
    )
}