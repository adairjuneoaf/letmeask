import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-purple:  #835AFD;
    --gray-font: #29292E;
    --gray-shadow: #050206;
    --gradient-blue-pink: linear-gradient(#485BFF, #FD59F8);
    --danger: #E73F5D;
    
    --gray-dark: #737380;
    --gray-medium: #A8A8B3;
    --gray-light: #DBDCDD;

    --white-background: #F8F8F8;
    --white-details: #FEFEFE;

    --pink-dark: #E559F9;
    --pink-light: #D67EE2;

    --hover-purple: #6F4BD8;
    --hover-danger: #D73754;
    --hover-gray-medium: #7E7E86;
    --hover-gray-light: #CECECE;
}

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

html{ 
    @media(max-width: 1080px){
        font-size: 93.75%;
    }

    @media(max-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--white-background); ;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

span{
    color: var(--hover-purple)
}

h1, h2, h3, h4, h5, h6, strong{
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

button {
    cursor: pointer;
}
`;
