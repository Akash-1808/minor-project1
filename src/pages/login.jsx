import { Button, TextField } from "@mui/material";
import { Bottomwarning } from "../components/bottomwarning";
import { Header } from "../components/header";

export  function Login (){
    
    return (<>
    <div className="flex bg-slate-300 align-center pb-6 h-screen justify-center ">
    
    <div className="bg-slate-200 mt-6 pl-12 pr-12 h-1/2 flex flex-col justify-center ">
    <Header label={"Login"}/>
    <TextField id="username" label="username" variant="standard"/><br />
    <TextField id="password" label="password" variant="standard" /><br /><br />
    <Button variant="contained">Login</Button>
    <Bottomwarning to={"/signup"} label={"Don't have an Account?"} buttontext={"Signup"}/>
    </div></div></>)
}