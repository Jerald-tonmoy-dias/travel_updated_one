import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { StoreContext } from "../../context/Store";
import { Wrapper } from "../../styles/Global.styled";
import {
  Nav,
  OrderList,
  List,
  Anchor,
  SpanOne,
  SpanTwo,
} from "./Navbar.styled";

export default function Navbar({ navItem }) {
  const theme = useContext(ThemeContext);

  let {
    loading,
    setLoading,
    navList,
    setnavList,
    vehicleDetails,
    setvehicleDetails,
  } = useContext(StoreContext);

  return (
    <Nav 
    secondaryColor={theme.secondaryColor} 
    primaryColor={theme.primaryColor}
    liteprimaryColor={theme.liteprimaryColor}
    grayColor={theme.grayColor}
    liteBlackColor={theme.liteBlackColor}
    whiteColor={theme.whiteColor}
    litewhiteColor={theme.litewhiteColor}
    blackColor={theme.blackColor}

    >
      <Wrapper>
        <ol>
          <li>
            <span className={`${navItem==1 ? 'active' : ''} menu-no`}>1</span>
            <span className={`${navItem==1 ? 'active' : ''} menu-name`}>about your trip</span>
          </li>
          <li>
            <span className={`${navItem==2 ? 'active' : ''} menu-no`}>2</span>
            <span className={`${navItem==2 ? 'active' : ''} menu-name`}>summary</span>
          </li>
        </ol>
      </Wrapper>
    </Nav>
  );
}
