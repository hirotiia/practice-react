'use client';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px;

  a {
    color: #3ea8ff;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <a href='/'>React 練習用</a>
      </div>
    </StyledHeader>
  );
};
