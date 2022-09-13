import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkGoBack = styled(Link)`
    padding: 5px;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    font-weight: 700;
    outline: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        transition: 1s;
    }
`;

