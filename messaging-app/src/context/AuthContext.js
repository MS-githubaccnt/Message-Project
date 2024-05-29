//use env for urls
//put in try catch blocks
import { Navigate, useNavigate } from "react-router-dom";


export const loginUser=async(username,password)=>{
    
    const response=await fetch("http://127.0.0.1:8000/authentication/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username,password
        })

        
    });
    const navigate=useNavigate();
    //const data= await response.json();//.json takes json and gives java script object
    
    if (response.status===200){
        navigate("/home");
        console.log("cheese")


    }
    else if(response.status===400){
        //setError("Invalid login details")
        return 400;


    }

}

export const signUpUser=async(email,username,password)=>{
    const response=await fetch("http://127.0.0.1:8000/authentication/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email,username,password
        })
        
    });
    //const data= await response.json();//.json takes json and gives java script object
    if (response.status===201){
        <Navigate to='/home'/>


    }
    else if(response.status===304){
        return 304;
        //setError("Sorry that username is taken")


    }



}
