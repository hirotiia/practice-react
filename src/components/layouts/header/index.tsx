'use client';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1260px;
  margin: auto;
  align-items: center;

  .link-lesson {
    color: #3ea8ff;
    transition: text-decoration 0.2s ease-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <a href='https://ja.react.dev/blog/2023/03/16/introducing-react-dev' target='_blank'>
          <Image
            src='/img/common/logo-react.svg'
            alt='Reactドキュメントページ'
            width={50}
            height={50}
          />
        </a>
      </div>
      <div>
        <Link className='link-lesson' href={'/lessons'}>
          Lessons ページへ
        </Link>
      </div>
    </StyledHeader>
  );
};
