import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';
import SocialLinks from '../socialMedia/SocialLinks';
import mail from '../../assets/images/icons/mail.png';
import mobile from '../../assets/images/icons/phone.png';
import route from '../../assets/images/icons/route.png';
import Image from '../Image';
import { Link } from 'gatsby';
import { breakpoint } from '../../styles/breakpoints';

export default function Footer({ company }) {
  const { city, phone, email, image } = company.info;
  return (
    <FooterStyles id='footer'>
      <Container>
        <div className='footer'>
          <div className='contact'>
            <h4>Contact</h4>
            <p>
              <img src={route} alt='icon' />
              {city}
            </p>
            <p>
              <img src={mobile} alt='icon' />
              <a href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              <img src={mail} alt='icon' />
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <div className='social-links'>
            <SocialLinks links={company.socialMediaLinks} />
          </div>
          <div className='newsletter'>
            <h4>Nieuwsbrief</h4>
            <input type='text' placeholder='Naam' />
            <input type='text' placeholder='Email' className='email' />
            <button>
              Inschrijven <p>voor het laatste nieuws</p>
            </button>
          </div>
        </div>
        <div className='copyright'>
          <Link to='/'>
            <Image mainImage={image} width={100} />
            <p>.com &copy; 2021</p>
          </Link>
        </div>
      </Container>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  background-color: var(--green);

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5rem 0;
  }

  h4 {
    font-family: 'Roboto500';
    color: var(--purple);
    margin-bottom: 1rem;
  }

  .contact {
    width: 30%;

    p {
      display: flex;
      align-items: center;
      color: var(--white);
      margin: 0.5rem 0;
      font-size: 1.8rem;

      img {
        width: 20px;
        margin-right: 1rem;
      }
      a {
        color: var(--white);
        font-family: 'RobotoRegular';

        &:hover {
          color: var(--purple);
        }
      }
    }
  }
  .social-links {
    display: flex;
    justify-content: center;
    margin: auto;
  }

  .newsletter {
    display: flex;
    flex-direction: column;
    width: 30%;
    input {
      padding: 1rem;
      border-radius: var(--borderRadius);
      outline: none;
      border: none;
      font-size: 1.6rem;
    }

    input.email {
      margin: 0.5rem 0;
    }

    button {
      padding: 1rem;
      border-radius: var(--borderRadius);
      border: 2px solid transparent;
      background-color: var(--purple);
      color: var(--white);
      font-size: 1.8rem;
      font-family: 'Roboto500';

      p {
        color: var(--white);
        opacity: 0.5;
        font-size: 1.3rem;
        display: block;
      }

      &:hover,
      :focus {
        border: 2px solid var(--white);
        background-color: transparent;
      }
    }
  }

  .copyright a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;

    p {
      font-size: 2rem;
      font-family: 'Roboto500';
    }

    img {
      width: 60px;
      object-fit: contain;
      margin: 0;
    }
  }

  /* BREAKPOINTS */
  @media ${breakpoint.md} {
    .footer {
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .contact {
      width: 50%;
    }

    .social-links {
      margin: 3rem 0;
      width: 100%;
      order: 3;
    }

    .newsletter {
      text-align: right;
      width: 50%;
      order: 2;

      input,
      button {
        width: 100%;
      }
    }
  }

  @media ${breakpoint.sm} {
    .contact,
    .newsletter {
      width: 100%;
      text-align: center;
      margin: 1rem 0;

      p {
        justify-content: center;
      }
    }
  }
`;
