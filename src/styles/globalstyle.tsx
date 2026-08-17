import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing:border-box;
    }

    html,
    body,
    #root{
        margin:0;
        min-height:100%;
    }

    body{
        background:#ececec;
        color:#333;
        font-family:
            MaruBuri,
            -apple-system,
            BlinkMacSystemFont,
            sans-serif;
    }

    img{
        display:block;
        max-width:100%;
    }

    a{
        color:inherit;
        text-decoration:none;
    }

    button{
        font:inherit;
        cursor:pointer;
    }

    .font_main {
    color: ${({ theme }) => theme.color.main} !important;
    }
    .font_gray {
        color: ${({ theme }) => theme.color.gray} !important;
    }
    .font_red {
        color: ${({ theme }) => theme.color.red} !important;
    }
    .font_blue {
        color: ${({ theme }) => theme.color.blue} !important;
    }
    .font_white {
        color: #fff !important;
    }
        `;

export default GlobalStyle;
