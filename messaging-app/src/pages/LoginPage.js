import Button from "../components/Button";
import { useState } from "react";
import {loginUser} from "../context/AuthContext";
import {signUpUser} from "../context/AuthContext";
//UNLESS WE GIVE CURLY BRACES TAKES IMPOT DECLARATION AS ALIAS AND LOOKS FOR DEFAULT IMPORT
//look at unique username, and stuff requried by django and error handling for it on frontend including renter passsword thingy
//we also have to do things of api 
//make an element error message and diaplay its state
//try with invalid email
//see if errir nessages reset aappropriately

export const LoginPage=()=>{
    const [error,setError]=useState()
    const [userState,changeState]=useState("Login")
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password, setPassword]=useState('');
    const [repassword,setRePassword]=useState('');
    const onClick=()=>{
        if (userState=="Login"){
            if(username!=''&&username!=null&&password!=''&&password!=null){
                loginUser(username,password);
                /*if(k==400){
                    setError('Invalid details');
                }*/
                


            }
            else{
                setError('No field may be null.')

            }
            
        }
        else{
            if(password==repassword){
           
            if(username!=null&&username!=''&&password!=null&&password!=''&&email!=null&&email!=''){
                signUpUser(email,username,password)
                /*if(b==304){
                    setError('Sorry username already taken');
                }*/

            }
            else{
                setError('No field may be null.')

            }
        }
        else{
            setError('Password and Re-password do not match.')

        }

        }
            console.log("Click");
    }
    const ChangingTheState=()=>{
        setError();
        setUsername('');// so fields cler out on switching modes
        setPassword('');
        if(userState==="Login"){changeState("Signin")}
        else{changeState("Login")}
    }
    
  
    return (
        
        <div className="flex items-center h-screen bg-gray-200 align-middle" >

        <div className="w-1/3 mx-auto  bg-white p-10 rounded-lg shadow-md text-center align-middle">
            <h2 className="text-xl font-bold text-gray underline">
                Welcome to EZ-msg</h2>
        <h1 className="font-bold">Login</h1>
        <form className="text-left p-2 ">
            <label for="username">
                Username:<br/>
            </label>
            <input className="w-full p-1 rounded-md border border-black mb-2" 
             id="username"
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
             ></input>
            <br/>
            {
                userState=="Signin"?<>
            <label for="email" className="leading-6">Email: </label><br/>
            <input className="w-full p-1 rounded-md border border-black mb-2"
            type="email" 
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}></input>
            <br/></>:<></>
             }
            <label for="Password">Password: </label><br/>
           
            <input className="p-1 rounded-md border border-black w-full mb-1 "
            type="password" 
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}></input>
            {
                userState=="Signin"?
                <><label for="Re-Password">Re-enter Password: </label><br/>
           
                <input className="p-1 rounded-md border border-black w-full "type="password" 
                id="Re-password"
                value={repassword}
                onChange={(e)=>setRePassword(e.target.value)}
                ></input></>
                :<></>
            }
            <p className="text-red-800">{error}</p>
        <Button text="Login" onClick={onClick}></Button>
            

        </form>
        
        <br/>
        <a href="#" className="underline" onClick={ChangingTheState}>{(userState==="Login")?"New User? Sign-Up":"Already Have an Account? Login"}</a>

        </div>
        </div>
    );
}

