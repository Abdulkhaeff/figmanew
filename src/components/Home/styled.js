import styled from "styled-components";

import { ReactComponent as logo } from "../../assets/icons/pictureIcon.svg";
export const Container=styled.div`
display: flex;
width: 100%;
box-sizing: border-box;
padding: 120px 60px;
`
export const Left=styled.div`

display: flex;
flex-direction: column;
flex: 1;
justify-content: center;
gap: 40px;
`
export const Right=styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
`

export const Title=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 800;
font-size: 90px;
line-height: 100px;
color: #2F281E;

`

export const Card=styled.div`
display: flex;
flex-direction: column;
width: 552px;
height: 389px;
gap: 40px;

`
export const Titles=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 17px;

color: #000000;
`
export const Box=styled.div`
display: flex;
gap: 15px;
`
 export const Img=styled.img`
  cursor: pointer;
 `
Title.First=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 31px;
gap: 10px;


color: #544837;
`
export const Button = styled.button`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "100px")};
  height: ${({ height }) => (height ? `${height}px` : "30px")};
  background: ${({ bg }) => (bg ? "#3A5AFF" : "#FFFFFF")};
  color: ${({ bg }) => (bg ? "#FFFFFF" : "#979797")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #979797;
`;

export const Logo=styled(logo)`

`