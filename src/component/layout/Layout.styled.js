import styled from "styled-components";

export const HeaderOne = styled.header(
  (props) => `
  background: ${props.primaryColor};
  padding: 20px 0;
  text-align: left;



  .logo {
    font-size: 30px;
    line-height: normal;
    font-weight: 900;
    color: ${props.whiteColor};
    text-transform: capitalize;
    line-height: 1;
    @media only screen and (max-width: 768px) {
      font-size: 22px;
      }
  }

  .header-title {
    font-size: 30px;
    font-weight: 700;
    color: ${props.whiteColor};
    position: relative;
    margin-left: 20px;
    &:before {
      content: '';
      position: absolute;
      left: -8px;
      top: -5px;
      background: ${props.secondaryColor};
      display: inline-block;
      width: 1px;
      height: 52px;
      margin-right: 10px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 18px;
      &:before {
      top: -15px;
      }
      }
  }
  `
);
export const FooterOne = styled.header(
  (props) => `
  background: ${props.blackColor};
  padding: 20px 0;
  text-align: left;

  .footer_section {
    strong  {
      font-weight: 700;
      color: ${props.whiteColor};
    }
    a  {
      font-weight: 700;
      color: ${props.primaryColor};
    }
    p {
      color: ${props.whiteColor};
      font-size: 14px;
      line-height: 1.7;
    }
    li,li::marker {
      color: ${props.whiteColor};
    }
 
  }
  `
);