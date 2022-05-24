import styled from "styled-components";
import { ReactComponent as icon } from "../../assets/icons/iconLogo.svg";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as setting } from "../../assets/icons/settings.svg";
export const Container = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;
export const Body = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
  gap: 30px;
  font-family: "Vibur";
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  line-height: 72px;

  color: #000000;
`;
export const Icon = styled(icon)`
  width: 60px;
  height: 60px;
`;

export const Right = styled.div`
  display: flex;
  gap: 30px;
  font-family: "Montserrat";
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #333333;
`;
export const Arrow = styled(arrow)``;

export const Button = styled.button`
  display: flex;
  width: ${({ width }) => (width ?` ${width}px` : "100px")};
  height: ${({ height }) => (height ?` ${height}px` : "30px")};
  background: ${({ bg }) => (bg ? "#3A5AFF" : "#FFFFFF")};
  color: ${({ bg }) => (bg ? "#FFFFFF" : "#979797")};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #979797;
`;
export const Setting = styled(setting)``;