import styled from 'styled-components';

const IconsStyles = styled.svg`
  fill: ${({ color }) => color};
  width: ${({ width }) => width};

  &:hover {
    fill: ${({ hoverColor }) => hoverColor};
  }
`;

export default IconsStyles;
