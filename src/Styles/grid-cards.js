import styled from 'styled-components';

export const Gridcards = styled.div`
span{
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    
    grid-column-gap: .5rem;
    grid-row-gap: 2rem;
    justify-items: center;
    }
`

// export const Cards = styled.div`
// img{
//     border-radius: 30rem;
//     overflow: hidden;
//     transition: 250ms;
// }

// img:hover{
//     border-radius: 9999rem;
//     color: white;
//     background-color: #fb42c7;
//     box-shadow: 0 0 1rem #fb42c7, 0 0 4rem #fb42c7, 0 0 8rem #fb42c7;

// }

// label{
//     display: flex;
//     justify-content: center;
//     font-family: 'Rubik Glitch', cursive;
// }

// span{
//     display: flex;
//     justify-content: center;
// }
// `