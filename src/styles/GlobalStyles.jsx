import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
  body {
    width: 100vw;
    height: 100vh;
    background: #ffd09dba;
    font-family: "Inter", serif; 
  }
#root{
    width: 100%;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;
 
export default GlobalStyle;