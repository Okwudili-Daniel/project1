import react from "react"
import styled from "styled-components"
import Hero from "./Hero";
import Temp from "./Template";
import Sliding from "./Inter";
import Feat from "./Features";

const HomeScreen = () =>{
    return(
        <div>
            <Hero/>
            <Temp/>
            <Sliding/>
            <Feat/>
        </div>
    )
}

export default HomeScreen;