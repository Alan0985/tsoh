import { createGlobalStyle } from 'styled-components';

interface Props {
  theme: any;
}

export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    background: ${({ theme }: Props) => theme.colors.body};
    color: hsl(192, 100%， 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0
}

ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li{
    list-style: none;
}

p{
    opacity: 0.6;
    line-height: 1.5;
}

a{
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
}

img{
    max-width: 100%;
}
`;
