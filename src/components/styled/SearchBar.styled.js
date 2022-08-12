import styled from 'styled-components';

export const StyledSearchBar = styled.div`
    width: 90%;
    padding: .5rem;
    margin: 1rem auto;
    background-color: rgba(200,200,200,.5);
    border-radius: 30px;

    .search-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    i{
        font-size: 1.3rem;
        padding: .2rem;
        cursor: pointer;
    }
    i:active{
        color: rgba(200,200,200,.5);
    }
    input{
        width: 90%;
        padding: .5rem;

        color: white;
        font-size: .8rem;
        background-color: transparent;
        border: none;
        border-radius: 30px;
    }

    @media only screen and (min-width: 768px){
        max-width: 700px;
    }
`