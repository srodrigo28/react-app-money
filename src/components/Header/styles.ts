import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
    padding-top: 4rem;
`;

export const Content = styled.div`
    max-width: 1080px;
    margin: auto;

    padding: 0 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size: 1rem;
        color: #fff;
        background-color: var(--blue-light);
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        border: none;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }

    }
`