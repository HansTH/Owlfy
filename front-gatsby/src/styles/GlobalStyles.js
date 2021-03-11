import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
  --green: #24A56E;
  --purple:#3F3D56;
  --white:#ffffff;
  --borderRadius: 6px;

  --max-width:1000px;
}

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}

*:before, *:after {
    box-sizing: inherit;
  }

html {
  scroll-behavior: smooth;
}

img{
  width:100%;
}

.button{
  background-color: var(--green);
  color: var(--white);
  padding: 1rem 2rem;
  border-radius: var(--borderRadius);
  border: none;
  font-family:'Roboto500';
  font-size: 1.6rem;

  &:hover,
  :focus {
    background-color: var(--purple);
  }
}

`;

export default GlobalStyles;
