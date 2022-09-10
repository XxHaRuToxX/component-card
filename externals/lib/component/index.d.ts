import React from 'react';
export interface params {
    title: string;
    titleDesc: string;
    footerDesc: string;
    button: string;
    style?: React.CSSProperties | undefined;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
}
declare const MainContainer: {
    (params: params): JSX.Element;
    defaultProps: {
        title: string;
        titleDesc: string;
        footerDesc: string;
        button: string;
    };
};
export default MainContainer;
