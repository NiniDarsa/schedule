import { Link } from "react-router-dom"
import styled from "styled-components"
import { RiArrowGoBackLine } from "react-icons/ri";


const Headline=({list,open})=>{
    
return(
    <StyleHeader>
        {!open?<div className="btn"><button><Link to="/"><RiArrowGoBackLine /></Link></button></div>:
        <div className="dotsContainer">
            <span />
            <span />
            <span />
        </div>
        }
        <div><b>{(list.filter((item)=>item.checked===true).length)}</b>/<span>{list.length}</span> items packed</div>
    </StyleHeader>
)
}
export default Headline

const StyleHeader=styled.header`
   background-color: #ffdcb76d;
   grid-column: 1 / 7;
   padding: 1rem;
   border-bottom:1px solid #dad1d1c5;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .dotsContainer{
    display: flex;
    justify-content: center;
    align-items: center;
     span{
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: #88735c6c;
        margin-right: 2px; 
      }
   }
   
   .btn{
    height: 100%;
    button{
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    a{
        text-decoration: none;
        color:#88735c6c ;
    }
   }}
   
`