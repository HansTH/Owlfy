import { createGlobalStyle } from 'styled-components';

// Fonts
import VollkornBlack from '../assets/fonts/Vollkorn-Black.woff';
import Roboto500 from '../assets/fonts/roboto-v20-latin-500.woff';
import Roboto700 from '../assets/fonts/roboto-v20-latin-700.woff';
import RobotoRegular from '../assets/fonts/roboto-v20-latin-regular.woff';
import { breakpoint } from './breakpoints';

const Typography = createGlobalStyle`

  @font-face {
    font-family: 'VollkornBlack';
    src: url(${VollkornBlack});
  }

  @font-face {
    font-family: 'Roboto500';
    src: url(${Roboto500});
  }
  @font-face {
    font-family: 'Roboto700';
    src: url(${Roboto700});
  }
  @font-face {
    font-family: 'RobotoRegular';
    src: url(${RobotoRegular});
  }

  html{
    font-size:10px;
  }


  h1{
    font-size:5rem;
    color:var(--green)
  }
  h2{
    font-size:4rem;
  }
  h3{
    font-size:3rem;
  }
  h4{
    font-family:'RobotoRegular';
    font-size:2rem;

  }

  h1,h2,h3{
    font-family:'VollkornBlack';
    line-height:1;
    letter-spacing: -0.5px;
  }


  p, textarea, label{
    font-family:'RobotoRegular';
    font-size:1.6rem;
    line-height:1.3;
    color:var(--purple);
  }

  a{
    text-decoration: none;
    font-family:'Roboto500';
    font-size: 1.8rem;
  }

  /* BREAKPOINTS */
  @media ${breakpoint.md} {
    h1{
      font-size: 4.5rem;
    }
  }

  @media ${breakpoint.xs} {
    h1 {
      font-size: 4rem;
    }
  }
  
`;

export default Typography;
