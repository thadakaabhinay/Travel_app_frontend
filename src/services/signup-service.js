import axios from "axios";

export const signupHandler = async (username,number,email,password)=>{
    try{
        const data=await axios.post("https://travel-app-backend-five.vercel.app/api/auth/register",{
            username:username,number:number,email:email,password:password
        })
        console.log(data);

    }catch(err){
        console.log("error adding user to database");
    }
}