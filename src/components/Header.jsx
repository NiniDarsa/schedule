import styled from "styled-components"

const Header=()=>{
return (
       <StHeader>
        <h1>schedule</h1>
       </StHeader>
)
}
export default Header

const StHeader = styled.div`
  text-transform: uppercase;
  font-size: clamp(1.5rem, 5vw, 3rem);
  color: #dca47c55;
  letter-spacing: clamp(0.2rem, 2vw, 2.4rem); /* Responsive letter-spacing */
`;

