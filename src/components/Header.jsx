import styled from "styled-components"

const Header=()=>{
return (
       <StHeader>
        <h1>schedule</h1>
       </StHeader>
)
}
export default Header

const StHeader=styled.div`
    text-transform: uppercase;
    font-size: 3rem;
    color: #dca47c55;
    letter-spacing: 2.4rem;
    margin-right:-2.4rem;
`;