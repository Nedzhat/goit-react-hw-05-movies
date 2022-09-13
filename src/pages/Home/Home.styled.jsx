import styled from "styled-components";

export const MainTitle = styled.h1`
    text-transform: uppercase;
    text-align: center;
`;

export const ListOfFilms = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;
    padding: 0;
    gap: 40px;
    list-style: none;
`;

export const FilmItem = styled.li`
    width: 200px;
`;

export const NameOfFilm = styled.p`
    margin: 0;
    padding: 10px;
    text-transform: uppercase;
    color: black;
    font-weight: 700;
`;