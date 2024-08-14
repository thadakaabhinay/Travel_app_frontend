import "./Auth.css";
import { useAuth } from "../../context";
import { validateEmail,validateName,validateNumber,validatePassword } from "../../utils";
import  {signupHandler} from "../../services";


let isNumberValid,isNameValid,isEmailValid,isPasswordValid,isConfirmPasswordValid;

export const AuthSignup = ()=>{

    const {username,email,password,number,confirmPassword,authDispatch}=useAuth();

    const handleNumberChange=(event)=>{
        isNumberValid=validateNumber(event.target.value)
        if(isNumberValid){
            console.log("valid input");
            authDispatch({
                type:"NUMBER",
                payload:event.target.value,
            })

        }else{
            console.log("INVALID NUMBER");
        }
        
      
    }
    const handleNameChange=(event)=>{
         isNameValid=validateName(event.target.value)
        if(isNameValid){
            console.log("valid input");
            authDispatch({
                type:"NAME",
                payload:event.target.value,
            })

        }else{
            console.log("INVALID NAME");
        }
       
    }
    const handleEmailChange=(event)=>{
         isEmailValid=validateEmail(event.target.value);
        if(isEmailValid){
            console.log("valid input");
            authDispatch({
                type:"EMAIL",
                payload:event.target.value,
            })

        }else{
            console.log("INVALID EMAIL")
        }
       
    }
    const handlePasswordChange=(event)=>{
         isPasswordValid=validatePassword(event.target.value);
        if(isPasswordValid){
            console.log("valid input");
            authDispatch({
                type:"PASSWORD",
                payload:event.target.value,
            })

        }else{
            console.log("INVALID PASSWORD");
        }
      
    }
    const handleConfirmPasswordChange=(event)=>{
         isConfirmPasswordValid=validatePassword(event.target.value);
        if(isConfirmPasswordValid){
            console.log("valid input");
            authDispatch({
                type:"CONFIRM_PASSWORD",
                payload:event.target.value,
            })

        }else{
            console.log("INVALID CONFIRM PASSWORD");
        }
       
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();

        if (isNumberValid && isEmailValid && isConfirmPasswordValid && isNameValid && isPasswordValid){
            signupHandler(username,number,email,password);
        }
        authDispatch({
            type:"CLEAR_USER_DATA",
        })

    }
    return (
        <div className="auth-container">
            <form onSubmit={handleFormSubmit}>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Mobile Number <span className="asterisk">*</span></label>
                    <input defaultvalue={number} type="number" className="auth-input" maxLength="10" placeholder="Enter Mobile Number" required 
                    onChange={handleNumberChange} />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Name <span className="asterisk">*</span></label>
                    <input defaultvalue={username} className="auth-input" placeholder="Enter Name" type="text" required onChange={handleNameChange} />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Email <span className="asterisk">*</span></label>
                    <input defaultvalue={email} className="auth-input" placeholder="Enter Email" type="email" required onChange={handleEmailChange}/>
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Password <span className="asterisk">*</span></label>
                    <input defaultvalue={password} className="auth-input" placeholder="Enter Password" type="password" required onChange={handlePasswordChange} />
                </div>
                <div className="d-flex direction-column lb-in-container">
                    <label className="auth-label">Confirm Password <span className="asterisk">*</span></label>
                    <input defaultvalue={confirmPassword} className="auth-input" placeholder="Enter Password" type="password" required onChange={handleConfirmPasswordChange} />
                </div>
                <div>
                    <button className="button btn-primary btn-login cursor">Submit</button>
                </div>
                
            </form>
        </div>
    )
}