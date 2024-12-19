import { Button, TextField } from "@mui/material";
import { Header } from "../components/header";
import { Bottomwarning } from "../components/bottomwarning";

export function Calculator(){
    
        return<div className="flex justify-center bg-slate-300 align-center pb-6 h-screen ">
            {/* <Appbar label={"PAYtm"}/> */}
            <div className="bg-slate-200 mt-6 pl-12 pr-12 h-3/4 flex flex-col justify-center">
                <Header label={"Calculator"} ></Header>
                <TextField id="orientation" label="orientation" variant="standard"/><br />
                <TextField id="panelEfficiency" label="panelEfficiency" variant="standard"/><br />
                <TextField id="tiltAngle" label="tiltAngle" variant="standard"/><br />
                <TextField id="panelSize" label="panelSize" variant="standard"/><br />
                <Button variant="contained">Calculate</Button>
                <Bottomwarning label={"Want to go back to signin?"} to={"/login"} buttontext={"Login"}/>
            </div>
            </div>
}
