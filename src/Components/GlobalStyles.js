import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    body{
        padding-top:50px;
        background-color:rgb(30,30,30,1);
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        color:white;

    }
`;

export default globalStyles;
