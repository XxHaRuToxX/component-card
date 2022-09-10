import React from 'react';
import styled from 'styled-components';

const GeneralContainer = styled.div`
    display: flex;
    width: 40vw;
    height: 90vh;
    margin: auto;
    border: 0.5px solid gray;
`
const ContainerView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
const ContainerImage = styled.div`
    display: flex;
    width: 20vw;
    height: 20vh;
    border: 0.1px solid #f3f0f0;
    border-radius: 8px;
    box-shadow: 4.0px 8.0px 8.0px hsl(0deg 0% 0% / 0.38);
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    align-self: center;
    opacity: 0.3;
`
const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    border: 0.5px solid gray;
    width: 100%;
    margin: 20px;
`
const Title = styled.p`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 0;
    line-height: 40px;
    text-align: justify;
    
`
const DescOne = styled.p`
    font-size: 19px;
    margin-top: 10px;
    line-height: 30px;
`
const DescTwo = styled.p`
    font-size: 19px;
    line-height: 30px;
    margin-top: -18px;
`
const DescStrong = styled.strong`
    font-size: 19px;
    margin-top: 5px;
`
const ContainerButton = styled.div`
    position: relative;
`
const Button = styled.button`
    font-size: 18px;
    width: 150px;
    height: 50px;
    cursor: pointer;
    background-color: #66b466;
    border-radius: 5px;
    color: white;
    flex-direction: row;
    text-align: center;
    padding: 2px;
    border: none;
`
const Icon = styled.img`
    position: absolute;
    left: 15px;
    bottom: 15px;
    width: 25px;
    height: 25px;
    margin-right: 10px;
`
const DescButton = styled.strong`
    position: absolute;
    left: 45px;
    font-size: 18px;
    bottom: 15px;
`
export interface params {
    title: string,
    descOne: string,
    descTwo: string,
    descStrong: string,
    button: string,
    style?: React.CSSProperties | undefined,
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}
/**
 * 
 * @param params
 * @param params.title:string
 * @param params.titleDesc:string
 * @param params.footerDesc:string
 * @param params.button:string
 * @param params.style:doing style to your MAINCONTAINER
 * @param params.children:Insert any element that you want inside the MAINCONTAINER
 * @param params.onClick:Event handler for the button param
 * 
 * @example 
 * import MainContainer from "./components"

function App() {

    return (
        <MainContainer
            // title="What describes you best?"
            // titleDesc="We'll personalise your setup experience based on this."
            // footerDesc="Not your first time using Ghost?"
            // button="Skip onboarding help"
        >
            {childrens}
        </MainContainer>
    )
}

export default App
 * @returns 
 */

const Card = (params: params): JSX.Element => {
    return (
        <GeneralContainer>
            <ContainerView>
                <ContainerImage>
                    <Image src="https://img.icons8.com/sf-ultralight/344/gallery.png" />
                </ContainerImage>
                <Container>
                    <Title>{params.title}</Title>
                    <DescOne>
                        {params.descOne}
                    </DescOne>
                    <DescTwo>
                        {params.descTwo}<DescStrong> {params.descStrong}</DescStrong>
                    </DescTwo>
                    <ContainerButton>
                        <Button>
                            <Icon src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNDMuNzgxMjUsMTM5Ljc1di0yNi44NzVjMCwtMi4yODQzNyAtMS43NDY4NywtNC4wMzEyNSAtNC4wMzEyNSwtNC4wMzEyNWMtMi4yODQzOCwwIC00LjAzMTI1LDEuNzQ2ODggLTQuMDMxMjUsNC4wMzEyNXYyMi44NDM3NWgtOTkuNDM3NXYtMjIuODQzNzVjMCwtMi4yODQzNyAtMS43NDY4OCwtNC4wMzEyNSAtNC4wMzEyNSwtNC4wMzEyNWMtMi4yODQzOCwwIC00LjAzMTI1LDEuNzQ2ODggLTQuMDMxMjUsNC4wMzEyNXYyNi44NzVjMCwyLjI4NDM4IDEuNzQ2ODcsNC4wMzEyNSA0LjAzMTI1LDQuMDMxMjVoMTA3LjVjMi4yODQzOCwwIDQuMDMxMjUsLTEuNzQ2ODcgNC4wMzEyNSwtNC4wMzEyNXpNODYsMjguMjE4NzVjLTIuMjg0MzcsMCAtNC4wMzEyNSwxLjc0Njg3IC00LjAzMTI1LDQuMDMxMjV2NTcuNTEyNWwtMTMuMzAzMTIsLTEzLjMwMzEzYy0xLjYxMjUsLTEuNjEyNSAtNC4xNjU2MywtMS42MTI1IC01LjY0Mzc1LDBjLTEuNjEyNSwxLjYxMjUgLTEuNjEyNSw0LjE2NTYzIDAsNS42NDM3NWwyMC4xNTYyNSwyMC4xNTYyNWMwLjgwNjI1LDAuODA2MjUgMS44ODEyNSwxLjIwOTM4IDIuODIxODgsMS4yMDkzOGMwLjk0MDYyLDAgMi4wMTU2MywtMC40MDMxMyAyLjgyMTg3LC0xLjIwOTM4bDIwLjE1NjI1LC0yMC4xNTYyNWMxLjYxMjUsLTEuNjEyNSAxLjYxMjUsLTQuMTY1NjMgMCwtNS42NDM3NWMtMS42MTI1LC0xLjYxMjUgLTQuMTY1NjIsLTEuNjEyNSAtNS42NDM3NSwwbC0xMy4zMDMxMiwxMy4zMDMxM3YtNTcuNTEyNWMwLC0yLjI4NDM4IC0xLjc0Njg4LC00LjAzMTI1IC00LjAzMTI1LC00LjAzMTI1eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" />
                            <DescButton>{params.button}</DescButton>
                        </Button>
                    </ContainerButton>
                </Container>
            </ContainerView>
        </GeneralContainer>
    )
}

Card.defaultProps = {
    title: "Algo no fue bien en el primer intento de descarga",
    descOne: "Por favor, confirma que no eres un robot.",
    descTwo: "Para intentarlo de nuevo",
    descStrong: "haz clic en el botón de descargar",
    button: "Descargar"
}

export default Card;
