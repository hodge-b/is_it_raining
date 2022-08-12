import styled from 'styled-components';

export const StyledHeader = styled.header`
    text-align: center;
    text-transform: capitalize;
    
    h2{
        font-weight: 300;
        font-size: 2rem;
    }
    p{
        font-size: .8rem;
    }

    @media only screen and (min-width: 425px){
        p{
            font-size: 1rem;
        }
    }

    @media only screen and (min-width: 768px){
        p{
            font-size: 1.2rem;
        }
    }
`