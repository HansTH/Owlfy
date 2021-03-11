import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';
import useForm from '../../helpers/useForm';
import { breakpoint } from '../../styles/breakpoints';

export default function Contact() {
  const { updateInputValues, inputs, resetForm } = useForm({
    name: '',
    email: '',
    message: '',
  });

  function submitForm(inputs) {
    console.log(inputs);
  }

  return (
    <ContactStyles id='contact'>
      <Container>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm(inputs);
            resetForm();
          }}
        >
          <div className='contact'>
            <div className='contact-left'>
              <h1>Contact</h1>
              <label htmlFor='name'>* Naam</label>
              <input
                type='text'
                id='name'
                name='name'
                onChange={updateInputValues}
                value={inputs.name}
              />
              <label htmlFor='email'>* Email</label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={updateInputValues}
                value={inputs.email}
              />
            </div>
            <div className='contact-right'>
              <label htmlFor='messagr'>* Uw bericht</label>
              <textarea
                id='message'
                name='message'
                onChange={updateInputValues}
                value={inputs.message}
              />
            </div>
          </div>
          <div className='submit'>
            <p>* Verplichte velden</p>
            <button>Verstuur</button>
          </div>
        </form>
      </Container>
    </ContactStyles>
  );
}

const ContactStyles = styled.div`
  padding: 10rem 0;
  background-color: var(--purple);

  label {
    display: block;
    color: var(--white);
    opacity: 60%;
    font-size: 1.4rem;
  }

  input {
    font-size: 1.6rem;
    padding: 0.5rem 0;
    background-color: var(--purle);
    border: none;
    border-bottom: 2px solid var(--green);
    outline: none;
    color: var(--white);
    font-size: 1.8rem;
    width: 80%;

    &:not(:last-of-type) {
      margin-bottom: 4rem;
    }
  }

  textarea {
    font-size: 1.6rem;
    padding: 1rem;
    background-color: var(--purle);
    border: none;
    outline: none;
    color: var(--white);
    font-size: 1.8rem;
    height: 100%;
  }

  button {
    background-color: var(--green);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: var(--borderRadius);
    border: none;
    font-family: 'Roboto500';
    font-size: 1.6rem;

    &:hover,
    :focus {
      background-color: var(--white);
      color: var(--green);
    }
  }

  p {
    color: var(--green);
    font-size: 1.4rem;
  }

  button,
  p {
    margin-top: 3rem;
  }

  .contact {
    display: flex;
  }

  .contact-left,
  .contact-right {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .contact-left {
    h1 {
      margin-bottom: 3rem;
    }
  }

  .contact-right {
    border-left: 2px solid var(--green);
    label {
      margin-left: 1rem;
    }
  }

  .submit {
    display: flex;
    justify-content: space-between;
    button {
      width: 50%;
      font-size: 1.8rem;
      font-family: 'Roboto500';
    }
  }

  /* BREAKPOINTS */
  @media ${breakpoint.sm} {
    .contact {
      flex-direction: column;
    }

    .contact-right {
      border-left: none;
      border-bottom: 2px solid var(--green);

      label {
        margin-left: 0;
        margin-top: 5rem;
      }

      textarea {
        height: 100px;
        padding: 1rem 0;
      }
    }
  }
`;
