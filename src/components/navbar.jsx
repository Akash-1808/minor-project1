import { Button, ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";

import { useNavigate} from "react-router-dom";

export function Navbar(){
    const navigate =useNavigate()
   return <div className="flex grid grid-cols-6">
        <div className="flex col-span-4 gap-5 text-2xl">
            logo
            <Button  variant="text">Home</Button>
            <Button variant="text" onClick={()=>{navigate("/about")}}>About</Button>
        </div>
        <div className="flex col-span-2 gap-5 justify-end">

            <Button variant="text" onClick={()=>{navigate("/calculator")}} >Calculator</Button>
            <Button sx={{":hover":{bgcolor:"variant.outlined"}}} variant="contained" onClick={()=>{navigate("/login")}} >Login</Button>
           
        </div>
    </div>
}