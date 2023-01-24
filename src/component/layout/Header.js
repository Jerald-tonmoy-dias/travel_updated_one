import React, { useContext } from "react";
import { HeaderOne } from "../layout/Layout.styled";
import { ThemeContext } from "styled-components";
import { Wrapper } from "../../styles/Global.styled";
import myImage from '../../qme__logo.svg';

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <HeaderOne primaryColor={theme.primaryColor} whiteColor={theme.whiteColor}  secondaryColor={theme.secondaryColor}>
      <Wrapper>
        <div className="travel-header-wrapper">
          <span className="logo"><a target="_blank" href="https://quotemeeasy.co.uk/"><img style={{maxHeight: "30px",position: "relative",top: "8px"}} src={myImage} /></a></span>
          <span className="header-title">Travel insurance</span>
        </div>
      </Wrapper>
    </HeaderOne>
  );
}
