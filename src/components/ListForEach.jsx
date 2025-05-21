import { useParams } from "react-router-dom"
import UseLocalStorage from "./UseLocalStorage"
import styled from "styled-components"
import Headline from "./Headline";
import Content from "./Content";
import SideBar from "./SideBar";
import { Stylediv } from "../styles/style";




const ListForEach=()=>{
    const {id}=useParams()
    const [listEach,setListEach]=UseLocalStorage(id,[])
    const canOpen=false;

    
    return(<StDiv>
        <Headline list={listEach} open={canOpen}/>
        <Content list={listEach} setList={setListEach} open={canOpen}/>
        <SideBar list={listEach} setList={setListEach} initial={[]}/>
    </StDiv>)
}
export default ListForEach

const StDiv=styled(Stylediv)``;