import React from 'react';
import styled from 'styled-components';

const GeneralContainer = styled.div`
    display: flex;
    width: 50vw;
    height: 90vh;
    margin: auto;
`
const ContainerView = styled.div`
    display: flex;
    justify-content: center;
    align-self: center;
`
const ContainerImage = styled.div`
    width: 45%;
    height: 45%;
    background-color: gray;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
`
const Title = styled.p`
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 20px;
    margin-bottom: 0;
`
const Desc = styled.p`
    font-size: 14px;
    margin-top: 5px;
`
const DescStrong = styled.strong`
    font-size: 14px;
    margin-top: 5px;
`
const Button = styled.a`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    background-color: green;
`
const Icon = styled.img`
    width: 50px;
    height: 50px;
`

export interface params {
    title: string,
    desc: string,
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
                    <Desc>
                        {params.desc}<DescStrong> {params.descStrong}</DescStrong>
                    </Desc>
                    <Button>
                        <Icon src="https://img.icons8.com/ios/344/download--v1.png" />
                        {params.button}
                    </Button>
                </Container>
            </ContainerView>
        </GeneralContainer>
    )
}

Card.defaultProps = {
    title: "Algo no fue bien en el primer intento de descarga",
    desc: "Por favor, confirma que no eres un robot. Para intentarlo de nuevo",
    descStrong: "haz clic en el botón de descargar",
    button: "Descargar"
}

export default Card;
