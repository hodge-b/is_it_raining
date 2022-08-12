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
    .card-main-content > * {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: auto;
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
        font-weight: 300;
        font-size: .9rem;
    }
    .card-sub-content{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin-top: 2rem;
        padding: .5rem;
        font-weight: 200;
        font-size: .8rem;
    }
    .card-sub-container > * {
        margin: .5rem 0;
    }
    .card-error{
        margin: 2rem 0;
        text-align: center;
        font-size: 1.2rem;
    }

    @media only screen and (min-width: 768px){
        .card-container{
            flex-direction: row;
            justify-content: space-evenly;
            max-width: 700px;
        }
        .card-sub-content > *{
            font-size: 1rem;
            margin: .5rem 0;
        }
        .card-container > * {
            margin: 1rem 0;
        }
        .card-city{
            margin-bottom: 1rem;
        }
    }
`