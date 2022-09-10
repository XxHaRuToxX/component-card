import React from 'react';
import styled from 'styled-components';

const GeneralContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: none;
    height: 100vh;
`
const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: initial;
    height: 100%;
`
const ContainerChildren = styled.div`
    
`
const Title = styled.h1`
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 0;
`
const TitleDesc = styled.p`
    font-size: 25px;
    margin-top: 5px;
`
const FooterDesc = styled.p`
    font-size: 20px;
    margin-bottom: 0;
`
const Button = styled.a`
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`

export interface params {
    title: string,
    titleDesc: string,
    footerDesc: string,
    button: string,
    style?: React.CSSProperties | undefined,
    children?: React.ReactNode,
    onClick?:React.MouseEventHandler<HTMLAnchorElement> | undefined
}

const MainContainer = (params: params): JSX.Element => {
    return (
        <GeneralContainer>
            <Container>
                <Title>{params.title}</Title>
                <TitleDesc>{params.titleDesc}</TitleDesc>
                <ContainerChildren style={params.style}>{params.children}</ContainerChildren>
                <FooterDesc>{params.footerDesc}</FooterDesc>
                <Button onClick={params.onClick}>{params.button}➡️</Button>
            </Container>
        </GeneralContainer>
    )
}

MainContainer.defaultProps = {
    title:"What describes you best?",
    titleDesc:"We'll personalise your setup experience based on this.",
    footerDesc:"Not your first time using Ghost?",
    button:"Skip onboarding help"
}

export default MainContainer;
