import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import GlobalStyle from "./styles/GlobalStyles"
import ListForEach from "./components/ListForEach"
import styled from "styled-components"

function App() {
  return (
    <StApp>
      <GlobalStyle/> 
      <Header/>
     
      <Routes>
         <Route path="/" element={<Main/>}/>
         <Route path="/:id" element={<ListForEach/>}/>
      </Routes>
     
      <Footer/>
    </StApp>
  )
}

export default App
const StApp=styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
