import styled from 'styled-components';

export const StyledCard = styled.section`
    .card-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: rgb(10,100,150);
        margin: auto;
        width: 90%;
        border-radius: 5px;
        box-shadow: 0px 0px 1px .2px black;
    }
    .card-container > * {
        margin: .5rem 0;
        font-weight: 300;
    }
    .card-city{
        font-size: 1.5rem;
    }
    .card-temp{
        padding-left: 1rem;
        font-size: 3rem;
    }
    .card-icon{
        font-size: 3rem;
    }
    .card-description{
        font-size: 1.5rem;
    }
    .card-time{
        margin-top: 2rem;
        font-weight: 200;
        font-size: .9rem;
    }
    .card-sub-container{
        display: grid;
        grid-template-columns: repeat(1,1fr);

        padding: .5rem;
        font-weight: 200;
        font-size: .8rem;
    }
    .card-sub-container > * {
        margin: .5rem 0;
    }
`