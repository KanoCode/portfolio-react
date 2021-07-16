import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    
margin:0;
padding:0;
background:#160E2E;
font-family: Open-sans, Helvetica, sans-serif;
color:white;
box-sizing:border-box;
overflow-x:hidden;

}
a:-webkit-any-link {
    color: white;
    text-decoration: none;
}
h1{
    font-weight: lighter;
}
button{
    
    font-weight: bold;
    font-size: 1.1rem;
    cursor:pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color:white;
    transition: all 0.5s ease;
    &:hover {
        color: white;
        background-color: #23d997;
    }
}


`;

export default GlobalStyle;
