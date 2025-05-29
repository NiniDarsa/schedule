
import styled from "styled-components"


const Select=({select,handleSelectChange})=>{
   
    return(<>
        <label htmlFor="sortSelect">options:</label>
        <StyledSelect id="sortSelect" defaultValue={select} onChange={handleSelectChange}>
            <option value="default">Sort By Default</option>
            <option value="checked">Sort By Checked</option>
            <option value="unchecked">Sort By Unchecked</option>
       </StyledSelect></>
    )
}
export default Select

const StyledSelect=styled.select`
    width: 80%;
    height: 2rem;
    border: 1px solid #c0c0c0b0;
    background-color: #f4f2eec7;
    cursor: pointer;
    margin-bottom: 1rem;
  
    &:focus{
        outline: none;
    }
`