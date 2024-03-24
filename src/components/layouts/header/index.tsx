'use client';
import Image from 'next/image';
import Link from 'next/link';
import { styled } from 'styled-components';
import { GlobalNav } from '@/components/layouts/header/globalNav/globalNav';

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

  div {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      > span {
        color: #333;
        font-size: 0.8rem;
        @media screen and (min-width: 760px) {
          font-size: 1rem;
        }
      }
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Header = () => {
  const globalNav = [
    {
      id: 1,
      time: '',
      href: '/',
      text: 'TOP',
    },
    {
      id: 2,
      time: '',
      href: '/lessons',
      text: 'lesson',
    },
    {
      id: 3,
      time: '',
      href: '/stock',
      text: '銘柄関連検索',
    },
  ];
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
          <span>Hroya Nakano dev...</span>
        </a>
      </div>
      <Nav>
        <GlobalNav listData={globalNav}></GlobalNav>
      </Nav>
    </StyledHeader>
  );
};
