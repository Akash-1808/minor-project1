import { Container, Typography } from "@mui/material";
import MediaCard from "./card";
import {Button} from "@mui/material";

export function Body1(){
    return(<>
    <Container >
        <div className=" mt-20 font-semibold text-7xl justify-center align-middle ">
      <div className="h-fit block">Harness the Power of<br/> the Sun </div>
     <div className="h-fit"><Button variant="outlined">Proceed</Button></div>
   </div>
   <div className="flex justify-between">
   <MediaCard title={"Schemes"} imgurl={"../asset/solar1.png"} boby={"government Scheme"}/>
   <MediaCard title={"Calculater"} imgurl={"../asset/solar1.png"} boby={"Calculate Energy"}/>
    <MediaCard title={"Blogs"} imgurl={"../asset/solar1.png"} boby={"Konw about"}/>
    <MediaCard title={"Learn more"} imgurl={"../asset/solar1.png"} boby={"More About us."}/>
     </div>
    
    </Container>
   
   </>)
}