import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi"


export const PageStyle = styled.div`
background-color: #101010;
height: 100vh;
display: grid;
grid-template-columns: 1fr 4fr 1fr;
/* justify-content: center; */
/* align-items: center; */
`

export const Window = styled.div`
grid-column-start: 2;
grid-column-end: 2;
display: grid;
border: 1px solid #b8bdb7;
justify-self: center;
margin-top: 10px;
margin-bottom: 10px;
width: 90vh;
grid-template-columns: 3fr 1fr ;
grid-template-areas:  
    "header header"
    "main main"
    "dialog dialog";
`

export const Title = styled.div`
grid-area: header;
justify-self: center;
color: #b8bdb7;
font-size: 40px;
padding-top: 10px;
padding-bottom: 10px;
`

export const Container = styled.div`
grid-area: main;
display: grid;
grid-template-columns: 4fr 1fr;
background-color: #101010;

`

export const Scenery = styled.img`
object-fit: fill;
padding-left: 10px;
padding-right: 10px;
`

export const Sidebar = styled.div`
display: grid;
grid-column: 1fr;
grid-template-rows: 1fr 1fr;
/* align-items: center; */
/* justify-content: center; */
`

export const Avatar = styled.img`
  /* width: 120px;
  height: 120px; */
`;

export const Door = styled(GiExitDoor)`
color: #b8bdb7;
cursor: pointer;
`

export const DialogContainer = styled.div`
grid-area: dialog;
display: grid;
background-color: #101010;
grid-template-rows: 2fr 1fr;
padding-top: 10px;
padding-left: 5px;
padding-bottom: 5px;
box-shadow: 0 0 10px 2px;
color: #b8bdb7;
`

export const ButtonGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 10px;
`

export const OptionButton = styled.button`
background-color: #b8bdb7;
border: 1px solid #B8BDB7;
border-radius: 15px;
box-shadow: 2px 2px;
color: #101010;
height: 100px;

cursor: pointer;
  :hover {
    background-color: #101010;
    color: #b8bdb7;
  }
`
