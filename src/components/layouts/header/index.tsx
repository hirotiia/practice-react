'use client';
import Link from 'next/link';
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
        <Link href={'/lessons'}>Lessons ページへ</Link>
      </div>
    </StyledHeader>
  );
};
