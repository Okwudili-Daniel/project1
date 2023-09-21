import styled from "styled-components";
import img from "../../asset/download.svg"
import img2 from "../../asset/dev.svg"
import img3 from "../../asset/bird.png"
import img5 from "../../asset/zap.svg"
import img6 from "../../asset/sale.svg"
import img7 from "../../asset/mali.svg"

const Sliding = () =>{
    return(
        <div>
            <Container>
                <Wrapper>
                    <Text>
                        Integrations
                    </Text>
                    <Images>
                        <First>
                            <Img src={img}/>
                        </First>
                        <First>
                            <Img src={img2}/>
                        </First>
                        <First>
                            <Img src={img3}/>
                        </First>
                        <First>
                            <Img src={img5}/>
                        </First>
                        <First>
                            <Img src={img6}/>
                        </First>
                        <First>
                            <Img src={img7}/>
                        </First>
                    </Images>
                    <Button>
                        All Integrations
                    </Button>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Sliding;
const Button = styled.button`
display: none;

@media screen and (max-width: 500px){
    display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 16px;
    color: white;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 10px;
    width: 150px;
    height: 45px;
}
`

const First = styled.div`
    /* background-color: green; */
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and(max-width: 500px){
        width: 40%;
    }
`

const Img = styled.img`
width: 100%;
height: 100px;
object-fit: contain;

@media screen and(max-width: 500px){
    height: 1200px;
}
`

const Images = styled.div`
/* background-color: blue; */
width: 70%;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
overflow-y: auto;

&::-webkit-scrollbar{
    display: none;
}

@media screen and (max-width: 500px){
    width: 100%;
    align-items: center;
    justify-content: space-between;
}
`

const Text = styled.div`
    font-size: 40px;
    font-weight: 900;
    color: white;    
    
    @media screen and (max-width: 500px){
        width: 100%;
        text-align: center;
        font-size: 30px;
        font-weight: 400;
    }
    `

const Wrapper = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px 20px;
/* flex-wrap: wrap; */

@media screen and (max-width: 500px){
    justify-content: center;
    flex-wrap: wrap;
}
`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: black;
margin-top: 50px;
`