"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const GeneralContainer = styled_components_1.default.div `
    display: flex;
    justify-content: center;
    text-align: center;
    background-color: none;
    height: 100vh;
`;
const Container = styled_components_1.default.div `
    font-family: Arial, Helvetica, sans-serif;
    color: initial;
    height: 100%;
`;
const ContainerChildren = styled_components_1.default.div `
    
`;
const Title = styled_components_1.default.h1 `
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 0;
`;
const TitleDesc = styled_components_1.default.p `
    font-size: 25px;
    margin-top: 5px;
`;
const FooterDesc = styled_components_1.default.p `
    font-size: 20px;
    margin-bottom: 0;
`;
const Button = styled_components_1.default.a `
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`;
const MainContainer = (params) => {
    return (react_1.default.createElement(GeneralContainer, null,
        react_1.default.createElement(Container, null,
            react_1.default.createElement(Title, null, params.title),
            react_1.default.createElement(TitleDesc, null, params.titleDesc),
            react_1.default.createElement(ContainerChildren, { style: params.style }, params.children),
            react_1.default.createElement(FooterDesc, null, params.footerDesc),
            react_1.default.createElement(Button, { onClick: params.onClick },
                params.button,
                "\u27A1\uFE0F"))));
};
MainContainer.defaultProps = {
    title: "What describes you best?",
    titleDesc: "We'll personalise your setup experience based on this.",
    footerDesc: "Not your first time using Ghost?",
    button: "Skip onboarding help"
};
exports.default = MainContainer;
