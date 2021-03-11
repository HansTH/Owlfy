import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';

function Overlay({ toggleModalOpen, handleToggleModalOpen }) {
  return (
    <OverlayStyles
      toggleModalOpen={toggleModalOpen}
      onClick={handleToggleModalOpen}
    />
  );
}

export default function Modal({
  modalContent,
  toggleModalOpen,
  handleToggleModalOpen,
}) {
  return (
    <>
      <Overlay
        toggleModalOpen={toggleModalOpen}
        handleToggleModalOpen={handleToggleModalOpen}
      />
      <ModalStyles toggleModalOpen={toggleModalOpen}>
        <button onClick={handleToggleModalOpen}>+</button>
        {modalContent && (
          <>
            <h4 style={{ color: 'var(--green' }}>
              {modalContent && modalContent.title}
            </h4>
            <PortableText
              blocks={modalContent.body}
              styles={PortableTextStyles}
            />
          </>
        )}
      </ModalStyles>
    </>
  );
}

const PortableTextStyles = styled.div`
  p {
    margin: 0 auto;
    margin-top: 1rem;
    color: var(--purple);
    font-size: 1.8rem;
    max-width: 250px;
    text-align: left;

    &:not(:first-child) {
      margin: 2rem 0;
    }
  }

  strong {
    font-family: 'Roboto500';
    color: var(--purple);
  }
`;

const OverlayStyles = styled.div`
  display: ${({ toggleModalOpen }) => (toggleModalOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--purple);
  opacity: 0.8;
  z-index: 100;
`;

const ModalStyles = styled.div`
  display: ${({ toggleModalOpen }) => (toggleModalOpen ? 'block' : 'none')};
  position: fixed;
  width: 300px;
  top: calc(50% - 100px);
  left: calc(50% - 150px);
  background-color: var(--white);
  z-index: 150;
  padding: 2rem;
  border-radius: var(--borderRadius);

  h4 {
    color: var(--green);
    margin: 2rem 0 1rem;
    font-size: 2.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    background-color: var(--green);
    color: var(--white);
    outline: none;
    cursor: pointer;
    font-size: 3.5rem;
    transform: rotate(45deg);

    &:hover,
    :focus {
      transform: scale(1.1) rotate(45deg);
    }
  }
`;
