import styled from "styled-components";
import { ReactComponent as img1 } from "../../assets/icons/img1.svg";
import { ReactComponent as img2 } from "../../assets/icons/img2.svg";
import { ReactComponent as img3 } from "../../assets/icons/img3.svg";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 130px;
  /* justify-content: center; */
  align-items: center;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  /* text-align: right; */

  /* $pmsBlack7 */

  color: #333333;
`;
Title.T = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  text-decoration-line: underline;

  /* $primary */

  color: #3a5aff;
`;

Title.Title = styled.div`
  margin-top: 112px;
  margin-bottom: 95px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  text-align: center;

  /* color: #2f28w  ; */
`;

export const Box = styled.div`
  display: flex;
  background: white;
`;

export const Left = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 20px;
  background-color: white;
`;

export const Right = styled.div`
  width: 50%;
  box-sizing: border-box;
  padding: 20px;
  background-color: white;
`;
export const BoxTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  color: black;
`;
BoxTitle.Title = styled.div`
  width: 490px;
  padding-right: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 40px;
  color: black;
  background: white;
`;

export const FirstIcon = styled(img1)`
  width: 516px;
  height: 484px;
`;
export const SecondIcon = styled(img2)`
  width: 516px;
  height: 484px;
`;
export const ThirdIcon = styled(img3)`
  width: 516px;
  height: 484px;
`;
