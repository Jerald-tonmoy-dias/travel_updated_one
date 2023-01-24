import styled from "styled-components";

// styles
export const Nav = styled.nav(
  (props) =>
    `
    margin:0;
    border-radius: 4px;
    overflow: hidden;
    background: ${props.secondaryColor};
    ol {
        margin: 20px 0;
        padding: 0;
        list-style: none;
        display: flex;
        li {
            display: flex;
            align-items: center;
            margin-right: 20px;
        }
        .menu-no {
            background: ${props.liteprimaryColor};
            font-size: 20px;
            line-height: 35px;
            width: 35px;
            height: 35px;
            text-align: center;
            color: ${props.litewhiteColor};
            border-radius: 50%;
            box-shadow: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin-right: 10px;
            &.active {
                background: ${props.primaryColor};
                font-weight: 700;
                color: ${props.whiteColor};
            }
            @media only screen and (max-width: 768px) {
                font-size: 14px;
                line-height: 30px;
                width: 30px;
                height: 30px;
                }
        }

        .menu-name {
            font-weight: 400;
            text-transform: capitalize;
            color: ${props.litewhiteColor};
            &.active {
                font-weight: 700;
                color: ${props.whiteColor};
            }    @media only screen and (max-width: 768px) {
                font-size: 14px;
          
                }
        }
    }
    `
);
