import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color: inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        background-color:rgb(30,30,30,1);
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;
