import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import GlobalStyle from "./styles/GlobalStyles"
import ListForEach from "./components/ListForEach"

function App() {
  return (
    <>
      <GlobalStyle/> 
      <Header/>
     
      <Routes>
         <Route path="/" element={<Main/>}/>
         <Route path="/:id" element={<ListForEach/>}/>
      </Routes>
     
      <Footer/>
    </>
  )
}

export default App
