import styled from "styled-components";
import { GiExitDoor } from "react-icons/gi"


export const PageStyle = styled.div`
background-color: #101010;
justify-content: center;
align-items: center;
/* padding-bottom: 10px; */

`

export const Window = styled.div`
display: grid;
border: 1px solid #b8bdb7;
grid-template-columns: 3fr 1fr ;
grid-template-areas:  
    "header header"
    "main sidebar"
    "dialog dialog";
`

export const Title = styled.div`
display: grid;
grid-area: header;
grid-template-columns: 1fr ;
color: #b8bdb7;
justify-content: center;
align-items: center;
font-size: 40px;
`

export const Container = styled.div`
display: grid;
grid-area: main;
background-color: #101010;

`

export const Scenery = styled.img`
background-color: #101010;
`

export const Sidebar = styled.div`
display: grid;
grid-area: sidebar;
box-sizing: border-box;
grid-template-rows: 1fr 1fr;
align-items: center;
justify-content: center;
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
display: grid;
grid-area: dialog;
box-sizing: border-box;
background-color: #101010;
grid-template-rows: 2fr 1fr;
/* grid-template-columns: 1fr; */
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
