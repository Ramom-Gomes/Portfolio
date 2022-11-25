import styled from "styled-components";

type PropsDiv = {
    bg?: string
}

export const Container = styled.div<PropsDiv>`
    color: black;
    background-color: ${props => props.bg};
`;

export const Menu = styled.div<PropsDiv>`
    background-color: #00008B;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 116px;
    position: fixed;

    @media (max-width: 768px) {
        display: ${props => props.bg}
    }
`;