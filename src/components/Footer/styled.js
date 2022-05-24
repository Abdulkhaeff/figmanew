import styled from "styled-components";
import { ReactComponent as first } from "../../assets/icons/icon1.svg";
import { ReactComponent as second } from "../../assets/icons/icon2.svg";
import { ReactComponent as third } from "../../assets/icons/icon3.svg";
import { ReactComponent as forth } from "../../assets/icons/icon4.svg";

export const Box=styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 577px;
background: #F2F2F2;
/* align-items: center; */
padding: 40px 0px;
gap: 40px;
`
export const Container =styled.div`

display: flex;
justify-content: space-around;
gap: 50px;

`
export const Title=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 44px;


text-align: center;

color: #2F281E;
`
export const Card=styled.div`
width: 233px;
height: 270px;
/* background-color: rebeccapurple; */
display: flex;
flex-direction: column;
justify-content: center;
gap: 30px;
`


Title.First=styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
/* identical to box height */


color: #2F281E;

`
Title.Second=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
/* or 162% */


color: #544837;
`

Title.Third=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 26px;


color: #544837;
`
export const Icon1=styled(first)``
export const Icon2=styled(second)``
export const Icon3=styled(third)``
export const Icon4=styled(forth)``

export const Button = styled.button`
margin: auto;
  display: flex;
  width: ${({ width }) => (width ?` ${width}px` : "100px")};
  height: ${({ height }) => (height ? `${height}px` : "30px")};
  background: ${({ bg }) => (bg ? "#3A5AFF" : "#FFFFFF")};
  color: ${({ bg }) => (bg ? "#FFFFFF" : "#979797")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #979797;
`;