import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow2.svg";
import { ReactComponent as logo } from "../../assets/icons/iconLogo.svg";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffc43b;
  height: 742px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.div`
  display: flex;
  gap: 20px;
  color: #ffffff;
  font-size: 40px;
`;
export const Input = styled.div`
  width: 372px;
  height: 73px;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 46px;
  padding: 0 30px;
  box-sizing: border-box;
`;
Input.Input = styled.input`
  width: 280px;
  height: 70px;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;

  color: #979797;
`;
export const Arrow = styled(arrow)`
width: 33px;
`;
Title.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;


  color: #979797;
`;
export const Logo = styled(logo)`
  path {
    fill: #ffffff;
  }
`;
