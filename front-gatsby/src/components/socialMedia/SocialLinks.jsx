import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// social links icons
import InstagramIcon from './icons/InstagramIcon';
import FaceBookIcon from './icons/FaceBookIcon';
import LinkedinIcon from './icons/LinkedinIcon';

export default function SocialLinks({
  links,
  flexDirection = 'row',
  color = 'var(--purple)',
  hoverColor = 'var(--white)',
  width = 41,
}) {
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');
  const [linkedin, setLinkedin] = useState('');

  useEffect(() => {
    links &&
      links.map((link) => {
        if (link.name.toLowerCase() === 'instagram')
          return setInstagram(link.url);
        if (link.name.toLowerCase() === 'facebook')
          return setFacebook(link.url);
        if (link.name.toLowerCase() === 'linkedin')
          return setLinkedin(link.url);
        return null;
      });
  }, [links]);

  return (
    <SocialLinksStyles flexDirection={flexDirection} width={width}>
      <div className='social-link'>
        <a href={linkedin}>
          <LinkedinIcon color={color} hoverColor={hoverColor} />
        </a>
      </div>
      <div className='social-link'>
        <a href={facebook}>
          <FaceBookIcon color={color} hoverColor={hoverColor} />
        </a>
      </div>
      <div className='social-link'>
        <a href={instagram}>
          <InstagramIcon color={color} hoverColor={hoverColor} />
        </a>
      </div>
    </SocialLinksStyles>
  );
}

const SocialLinksStyles = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: center;
  justify-content: space-between;

  .social-link {
    margin: 0 1rem;

    a {
      height: ${({ width }) => width};
    }
  }
`;
