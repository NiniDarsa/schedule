import styled from "styled-components"
import Headline from "./Headline";
import Content from "./Content";
import SideBar from "./SideBar";
import UseLocalStorage from "./UseLocalStorage";
import { Stylediv } from "../styles/style";
import { initial } from "./info";


const Main=()=>{
  const [list, setList]=UseLocalStorage("list", initial)
  const canOpen=true

  
  return(
    <Stdiv>
        <Headline list={list} open={canOpen} />
        <Content list={list} setList={setList} open={open} />
        <SideBar list={list} setList={setList} initial={initial}/>
    </Stdiv>
  )
}
export default Main

const Stdiv=styled(Stylediv)`
`;