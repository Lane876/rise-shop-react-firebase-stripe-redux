import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const OptionContainerStyle = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70%;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyle}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyle}
`;
