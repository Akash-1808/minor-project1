

import {Header} from "../components/header"

import { useNavigate } from "react-router-dom"
import  {Bottomwarning} from "../components/bottomwarning"
import { Button, TextField } from "@mui/material"

 export const Signup =() =>{
          
    return(<div className="flex justify-center bg-slate-300 align-center pb-6 h-screen ">
        {/* <Appbar label={"PAYtm"}/> */}
        <div className="bg-slate-200 mt-6 pl-12 pr-12 h-3/4 flex flex-col justify-center">
            <Header label={"Signup"} ></Header>
            <TextField id="firstname" label="firstname" variant="standard"/><br />
            <TextField id="username" label="username" variant="standard"/><br />
    <TextField id="password" label="password" variant="standard" /><br /><br />
    
    <Button variant="contained">Signup</Button>
            <Bottomwarning label={"Alredy have account?"} to={"/signin"} buttontext={"Signin"}/>
        </div>
    
    
    </div>)
}