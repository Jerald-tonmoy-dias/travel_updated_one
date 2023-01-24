import styled from "styled-components";

export const GreatingSection = styled.div(
  (props) => `

  margin: 30px 0;
  .Section__content {
  position: relative;
  max-width: calc(9 / 12 * 100% - 200px);
  margin-left: 200px;

  @media only screen and (max-width: 1023px) {
  max-width: 100%;
  margin: 0 20px;
  }

  @media only screen and (max-width: 768px) {
  display: none;
  }
  }
  .HonestyNotice__Content {
  position: relative;
  padding-left: 40px;
  }
  .HonestyNotice svg {
  position: absolute;
  top: 10px; 
  left: 0; 
  width: 32px;
  height: 32px;
  color: ${props.primaryColor}
  }
  .HonestyNotice__Title {
  font-size:18px;
  font-weight:700;
  margin-right: 10px;
  color: ${props.primaryColor}
  }


  `
);


export const MainWrapper = styled.div(
  (props) => `
position: relative;
display:flex;
align-items: flex-start;
margin-top: 20px;
width: 100%;

display: flex;
justify-content: center;

strong {
  color: #ffffff;
}

.pdf_summary_wrapper {
  background: #FFF;
  color: #000000;
  p {
    color: #000000!important;
  }
  

  // loading effect starts
      .overlay {
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0,0,0,.5);
        z-index: 9999;
      }
      
      .overlay__inner {
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          position: absolute;
      }
      
      .overlay__content {
          left: 50%;
          position: absolute;
          top: 50%;
          transform: translate(-50%, -50%);
      }
      
      .spinner {
          width: 75px;
          height: 75px;
          display: inline-block;
          border-width: 2px;
          border-color: rgba(255, 255, 255, 0.05);
          border-top-color: #fff;
          animation: spin 1s infinite linear;
          border-radius: 100%;
          border-style: solid;
      }
      
      @keyframes spin {
        100% {
          transform: rotate(360deg);
        }
      }

      // loading effect ends
}
.summary_wrapper {
  display: flex;
  @media (max-width: 480px){
    display: block;
  }
  flex-direction: row;
  padding: 16px 0;
  h3 {
    color: #000000;
    font-size: 24px;
  }
  @media (min-width: 700px) {
    flex-direction: column;
  }
  .single_summary {
    padding: .75em 0;
    color: #000000;
    p {
      color: #000000;
      strong {
        text-transform: capitalize;
        color: #000000;
      }
    }
  }

}


.AssumptionsMade {
  width: 84%;
  color: #ffffff;
  position: relative;
  li{
    line-height: 2;
  }
}

.terms_conditions_section {
  padding-right: 100px;
  position: relative;
}

p {
  font-weight: 400;
}

.termsCondInputWrapper {
position: absolute;
right: 66px;
top: 50%;
transform: translateY(-50%);
width: 30px;
border-left: 2px solid #ffffff;

.form-group {
  display: block;
  margin-bottom: 15px;
  margin-left: 50px;
}

.form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
}

.form-group label {
  position: relative;
  cursor: pointer;
  color: #000000;
}

.form-group label:before {
  content:'';
  -webkit-appearance: none;
  border: 2px solid #ffffff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 15px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 5px;
  transition: .3s;
}
.form-group .checkRed:before {
  border-color:red;
}
.form-group input:checked + label:before {
  background: #000;
  border: 3px solid #000;
}
}
.form-group input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 3px;
  left: 14px;
  width: 6px;
  height: 14px;
  border: solid #FFF;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  
}

}
.border_with_section {
  width: 84%;
  @media (max-width: 480px){
    width: 100%;
  }
  border-radius: 6px;
  border: 1px solid #fff;
  margin-bottom:30px;

  h3 {
    font-size: 24px;
  }

  ${ContentWrapper} {
    width: initial;
  }
  .make_life_simple {
    padding: 20px;
    color: #fff;
    h3 {
      font-size: 24px;
      margin: 0;
      @media (max-width: 480px){
        color: #ffffff;
      }
    }
  }

  .header-title {
    background: #fff;
    padding: 12px;
    font-weight: bold;
    border-radius: 6px 6px 0 0;
    color: #FF6600;
  }
}
.thank-you {
  text-align:center;
  padding: 100px 30px;
}
.add_product_section {
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  @media (max-width: 480px){
    width: 100%;
  }
  // color: #ffffff;
  // // background: ${props.liteBlackColor};
  // p {
  //   color: #ffffff;
  // }
  .para_with_icons {
    position: relative;
    padding-left: 40px;
    line-height: 19px;
    margin: 13px 0;
    .icon {
      position: absolute;
      left: 0;
      width: 24px;
      fill: currentColor;
      font-size: 24px;
    }
  }
  }
}
.mobile_trigger {
    font-size: 21px;
    background: white;
    border: none;
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-right: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    display: none;
    position: absolute;
    right: 10px;
    top: 20px;
    transition: .3s;

    .trigger-icon {
      margin-top: 6px;
      display: inline-block;
    }
    @media (max-width: 991px) {
    display: inline-block;
  }
}
&.active {
  .mobile_trigger {
    background: ${props.primaryColor};
    color: ${props.whiteColor};
  }
}

// main wrapper hover Effect
@media (min-width: 992px) {
  flex-wrap: wrap;
  &:hover ${ToolTipWrapper} {
   opacity: 1;
   visible: visible;
 }
}   
@media (max-width: 991px) {
    flex-wrap: wrap;
    &.active ${ToolTipWrapper} {
     display: block;
    }
  }
`
);


export const ContentWrapper = styled.div(
  (props) => `
  // *************component own styles*********** //
  display:flex;
  margin-top: 40px;
  @media (max-width: 992px) {
  flex-direction: column;
  flex-wrap: wrap;
  }

  // see_your_quote_summary

  .see_your_quote_summary {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
          display: flex;
        
          span {
            text-transform: capitalize;
            &:last-child {
              font-weight: 700;
          }
            flex: 1 1;
          }
      }
    }
  }
  // *************component global styles*********** //
  .small-icon-btn {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  line-height: 24px;
  position: relative;
  outline: none;
  border: none;
  margin: 0;
  svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  }
  }
  // tooltip button
  .tooltop-trigger-btn {
  background: ${props.primaryColor};
  color : ${props.whiteColor};
  cursor: pointer;
  display:inline-block;
  font-weight: 700;
  font-size: 18px;
  &:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  }
  }

  // *************left side styles*********** //
  .left-side {
  flex-basis: 20%;

  .section_header_title {
  margin: 0;
  margin-bottom: 30px;
  color: ${props.primaryColor};
  &:after {
  content: "";
  display: block;
  width: 70px;
  border-bottom: 2px solid;
  margin-top: 18px;
  @media only screen and (max-width: 768px) {
    font-size:24px;
    }
  }
  }
  }

  // *************right side styles*********** //
  .next-page-wrappper {
    max-width: calc(9 / 12 * 100% - 200px);
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-bottom: 60px;

    @media (max-width: 992px) {
      max-width: calc(9 / 12 * 100% - 60px);
      }
      @media only screen and (max-width: 767px) {
      max-width: 100%;
      width: 100%;
      }
    .nextPageBtn,.backPageBtn {
      background: ${props.primaryColor};
      padding: 12px 40px;
      border-radius: 30px;
      color: ${props.whiteColor};
      outline: none;
      border: none;
      font-size: 18px;
      text-transform: capitalize;
      font-weight: 700;
      cursor: pointer;
      transition: .3s;
      &:hover {
        background: ${props.blackColor};
      }
    }
    .backPageBtn {
      background: ${props.blackColor};
      margin-right: 10px;
      &:hover {
        background: ${props.primaryColor};
      }
    }

  }
  .right-side {
  max-width: calc(9 / 12 * 100% - 200px);
  background: ${props.whiteColor};
  flex-basis: 80%;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);

  @media (max-width: 992px) {
  max-width: calc(9 / 12 * 100% - 60px);
  }
  @media only screen and (max-width: 767px) {
  max-width: 100%;
  width: 100%;
  }

  // *************single card wrapper styles*********** //
  .single-card-wrapper {
  position: relative;
  padding: 30px;
  border-bottom: 1px solid #d1e3f4;

  // text-content-wrapper-para
  .text-content-wrapper-para {
  p {
  font-size: 18px;
  line-height: 1.5;
  strong {
  color: ${props.primaryColor};
  }
  &.sm-text {
  font-size: 14px;
  }
  }
  }


  // add-another-traveller
  .add-another-traveller {
  color: ${props.primaryColor};
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
  text-decoration: none;
  }

  }

  // see_cover_details
  .see_cover_details {
    a {
      color: ${props.primaryColor};
    }
  p {
  font-size: 14px;
  line-height: 1.5;


  strong {
  font-size: 14px;
  color: ${props.primaryColor};
  }

  }
  ul,ol li {
  font-size: 14px;
  line-height: 1.8;
  }
  }

  // show_input_status
  .show_input_status {
  position:  absolute;
  z-index: 0;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color : ${props.primaryColor};
  font-size: 20px;
  .warning {
  color: ${props.warningColor};
  }
  }
  // warning text
  .warning-text {
  color: ${props.warningColor};
  font-size: 16px;
  font-weight: 700;
  }

  .notsure {
  display: flex;
  align-items:center;
  color: ${props.blackColor};
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
  &.active {
  color: ${props.primaryColor};
  }
  &:hover {
  color: ${props.primaryColor};
  }
  }

  .notSureInfo {
  background : ${props.grayColor};
  padding : 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  p {
  font-size: 12px; 
  line-height: 1.7;
  a {
  color: ${props.primaryColor};
  }
  }
  }
  .sm-text {
  font-size: 14px;
  margin: 0;
  line-height: 1.2;
  margin-top: 10px;
  }
  &:hover {
  background: ${props.hoverColor};
  }
  &.active {
  ${ToolTipWrapper} {
  display: block;
  }
  }

  // tooltip design
  ${ToolTipWrapper} {
  position: absolute;
  right: -39%;
  top: 0;
  display: none;
  &:after {
  content: '';
  position: absolute;
  top: 11px;
  left: -12px;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 12px solid ${props.primaryColor};
  }

  @media only screen and (max-width: 767px) {
  position: static;
  margin-bottom: 30px;
  width: 90%;
  &:after {
  content: inherit;

  }
  }
  }


  // active class design
  &.active {
  .openIcon {
  display:none;
  }
  .closeIcon {
  display:block;
  }
  }
  .openIcon {
  display:block;
  }
  .closeIcon {
  display:none;
  }

  // card-title-wrapper
  .card-title-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  }
  .title {
  display: inline-block;
  font-size: 18px;
  margin: 0;
  margin-right: 20px;
  color: ${props.primaryColor};
  }

  }

  // toggleCountryRegion
  .toggleCountryRegion {
  display: block;
  margin-top: 20px;
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  color: ${props.primaryColor};

  .icon {
  display: inline-block;
  position: relative;
  right: -9px;
  top: 4px;

  }
  }
  `
);

export const RadioButtons = styled.div(
  (props) => `
  display:flex;
  flex-wrap: wrap;

  input[type="radio"] {
  display: none;
  }

  label {
  text-align: center;
  display:inline-block;
  background: ${props.whiteColor};
  color: ${props.blackColor};
  text-transform: capitalize;
  max-width: 380px;
  width: 18.33%;
  font-weight: 700;
  padding: 30px 35px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgb(33 35 38 / 10%) 0px 1px 20px 0px;
  margin: 0 10px 10px 0 ;
  &.only-text-label {
  padding: 20px 35px;

  .input-title {
  margin-top: 0px;
  } 
  }

  @media only screen and (max-width: 1200px) {
  width: 15.33%;

  }
  @media only screen and (max-width: 992px) {
  width: 31%;
  }
  @media only screen and (max-width: 768px) {
  width: 90%;
  }

  .input-title {
  color: ${props.blackColor};
  font-size: 15px;
  font-weight: 700;
  display:block;
  margin-top: 10px;
  }

  svg {
  display:block;
  width: 40px;
  margin: 0 auto;
  fill: ${props.blackColor};
  }

  &.lg-label {
  text-align: justify;
  font-weight: 400;

  h4 {
  margin: 0;
  font-weight: 700;
  }
  }
  }

  input[type="radio"]:checked+label {
  background: ${props.primaryColor};
  color: ${props.whiteColor}
  }

  input[type="radio"]:checked+label .input-title {
  color: ${props.whiteColor};
  }

  input[type="radio"]:checked+label svg {
  fill: ${props.whiteColor};
  }

  }

  `
);

export const ToolTipWrapper = styled.div(
  (props) => `
  padding: 20px;
  z-index: 99;
  width: 44%;
  background: ${props.whiteColor};
  box-shadow: rgba(33, 35, 38, 0.1) 0px 0px 10px 2px;
  border: 1px solid ${props.primaryColor};
  border-radius: 5px;
  border-radius: 5px;
  color: ${props.color};
  text-align: left;
  p {
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  margin: 10px 0;
  strong {
  font-weight: 700;
  }
  }

  `
);

export const TextInputs = styled.div(
  (props) => `
  .single-text-input {
  border: 1px solid ${props.primaryColor};
  border-bottom-width: 4px;
  height: 57px;
  line-height: 1;
  font-weight: bold;
  padding: 0px 17px;
  max-width: 100%;
  width: 54%;
  border-radius: 3px;
  color: ${props.primaryColor};
  outline: none;
  background: ${props.hoverColor};
  &:focus {
  border: 1px solid ${props.primaryColor};
  border-bottom-width: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  background: ${props.whiteColor};
  }

  @media only screen and (max-width: 425px) {
  height: 43px;
  }
  }
  .add-btn {
  position: relative;
  left: -10px;
  top: 1px;
  border: 1px solid ${props.primaryColor};
  height: 62px;
  line-height: 1;
  font-weight: bold;
  padding: 0px 17px;
  background: ${props.primaryColor};
  color: ${props.whiteColor};
  text-transform: capitalize;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 425px) {
  height: 48px;
  }
  }
  `
);
export const ShowCountryList = styled.div(
  (props) => `
  margin-bottom: 20px;
  .show-country-list {
  display:flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  flex-wrap: wrap;

  .country-name {
  text-transform: capitalize;
  font-weight: 700;
  font-size: 14px;
  }

  .rmv-btn {
  color: ${props.primaryColor};
  text-transform: capitalize;
  font-weight: 700;
  font-size: 16px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  padding: 4px;

  &:hover {
  background: ${props.primaryColor};
  border-radius: 5px;
  color: ${props.whiteColor};
  }
  }
  `
);

export const Checkboxes = styled.div(
  (props) => `

  .termsCondInputWrapper {
  margin-top: 20px;
  
  .form-group {
  display:flex;
  align-items: flex-start;

  cursor: pointer;
  padding: 12px;
  border: 2px solid ${props.primaryColor};
  border-radius: 5px;
  .text-content-wrapper {
  margin-left: 15px;
  }
  .region-name {
  font-size:  18px;
  color: ${props.primaryColor};
  font-weight: 700;
  position: relative;
  top: 3px;
  }
  &.active {
  background: ${props.primaryColor};
  .region-name,.sm-text {
  color: ${props.whiteColor};
  }
  }
  }
  .form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
  }

  .form-group label {
  position: relative;
  cursor: pointer;
  display:flex;
  }

  .form-group label:before {
  content:'';
  -webkit-appearance: none;
  border: 2px solid ${props.primaryColor};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 15px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 5px;
  }

  .form-group.active input:checked + label:before {
  background: ${props.whiteColor};
  }

  .form-group.active input:checked + label:after {
  content: '';
  display: block;
  position: absolute;
  top: 6px;
  left: 14px;
  width: 6px;
  height: 14px;
  border: solid ${props.primaryColor};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  }

  }


  ${props.componentName === "optional_ins_cover_wrapper"
      ? [
        `
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .termsCondInputWrapper {
  width: 47%;
  margin-right: 10px;
  @media only screen and (max-width: 992px) {
  width: 90%;
  }
  }

  `,
      ]
      : ""
    }

  ${props.componentName === "contact_with_wrapper"
      ? [
        `
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .form-group .text-content-wrapper {
  margin-left: 6px!important;
  }
  .termsCondInputWrapper {
  width: 31.33%;
  margin-right: 10px;
  @media only screen and (max-width: 1250px) {
  width: 47%;
  }
  @media only screen and (max-width: 768px) {
  width: 97%;
  }
  }

  `,
      ]
      : ""
    }
  ${props.componentName === "accept_terms_and_conditon_wrapper"
      ? [
        `
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .form-group .text-content-wrapper {
  margin-left: 6px!important;
  }
  .termsCondInputWrapper {
  width: 31.33%;
  margin-right: 10px;
  @media only screen and (max-width: 1250px) {
  width: 47%;
  }
  @media only screen and (max-width: 768px) {
  width: 97%;
  }
  }

  `,
      ]
      : ""
    }


  `
);
export const CheckboxesForChoose = styled.div(
  (props) => `

  .termsCondInputWrapper {
  margin-top: 20px;

  .form-group {
  display:flex;
  align-items: flex-start;

  cursor: pointer;
  padding: 12px;
  border: 2px solid ${props.primaryColor};
  border-radius: 5px;
  .text-content-wrapper {
  margin-left: 15px;
  }
  .region-name {
  font-size:  18px;
  color: ${props.primaryColor};
  font-weight: 700;
  position: relative;
  top: 3px;
  }
  &.active {
  background: ${props.primaryColor};
  .region-name,.sm-text {
  color: ${props.whiteColor};
  }
  }
  }
  .form-group input {
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
  }

  .form-group label {
  position: relative;
  cursor: pointer;
  display:flex;
  }

  .form-group .active_checkbox_set_label:before {
  content:'';
  -webkit-appearance: none;
  border: 2px solid ${props.primaryColor};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 15px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 5px;
  }

 .active_checkbox_set_label.active:before {
  background: ${props.whiteColor};
  }

 .active_checkbox_set_label.active:after {
  content: '';
  display: block;
  position: absolute;
  top: 6px;
  left: 14px;
  width: 6px;
  height: 14px;
  border: solid ${props.primaryColor};
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  }

  }


  ${props.componentName === "optional_ins_cover_wrapper"
      ? [
        `
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .termsCondInputWrapper {
  width: 47%;
  margin-right: 10px;
  @media only screen and (max-width: 992px) {
  width: 90%;
  }
  }

  `,
      ]
      : ""
    }

  ${props.componentName === "contact_with_wrapper"
      ? [
        `
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .form-group .text-content-wrapper {
  margin-left: 6px!important;
  }
  .termsCondInputWrapper {
  width: 31.33%;
  margin-right: 10px;
  @media only screen and (max-width: 1250px) {
  width: 47%;
  }
  @media only screen and (max-width: 768px) {
  width: 97%;
  }
  }

  `,
      ]
      : ""
    }
  ${props.componentName === "accept_terms_and_conditon_wrapper"
      ? [
        `
  display:flex;
  flex-wrap: wrap;
  align-items: flex-start;
  .form-group .text-content-wrapper {
  margin-left: 6px!important;
  }
  .termsCondInputWrapper {
  width: 31.33%;
  margin-right: 10px;
  @media only screen and (max-width: 1250px) {
  width: 47%;
  }
  @media only screen and (max-width: 768px) {
  width: 97%;
  }
  }

  `,
      ]
      : ""
    }


  `
);

export const DateInput = styled.div(
  (props) => `
  input {
  border: 1px solid ${props.primaryColor};
  border-bottom-width: 4px;
  height: 58px;
  line-height: 1;
  font-weight: bold;
  padding: 0px 17px;
  max-width: 100%;
  width: 23%;
  border-radius: 3px;
  color: ${props.primaryColor};
  outline: none;
  background: ${props.hoverColor};
  &:focus {
  border: 1px solid ${props.primaryColor};
  border-bottom-width: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  background: ${props.whiteColor};
  }
  @media only screen and (max-width: 425px) {
  width: 47%;
  }
  }
  `
);

export const SelectorInput = styled.div(
  (props) => `
  .selectClass {
  max-width: 380px;
  padding-bottom: 0.5px;
  padding-right: 37px;
  -webkit-appearance: none;
  background-size: 17px 17px;
  background-repeat: no-repeat;
  background-position: center right 10px;
  text-overflow: ellipsis;
  width: 100%;
  height: 56px;
  padding: 0 10px;
  border: 1px solid ${props.primaryColor};
  border-bottom-width: 4px;
  color: ${props.blackColor};
  background-color: ${props.whiteColor};
  font-size: 15px;
  font-weight: bold;
  line-height: 24px;
  border-radius: 3px;
  box-shadow: none;
  transition: color 0.25s, background-color 0.25s, border 0.25s, box-shadow 0.25s;
  margin-top: 30px;
  &:focus-visible {
  outline: none;
  }
  }


  `
);
