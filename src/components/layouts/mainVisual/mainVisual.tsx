'use client';

import { styled } from 'styled-components';

const Visual = styled.div`
  position: relative;
  height: 250px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  place-content: center;

  h1 {
    color: #fff;
    text-align: center;
    margin: auto;
    font-size: 1.5rem;

    @media screen and (min-width: 760px) {
      font-size: 2rem;
    }
  }

  img {
    display: block;
    position: absolute;
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
    margin: 0 calc(50% - 50vw); /* 画面幅いっぱいにはみ出させるためのネガティブマージン */
    width: 100vw;
  }
`;

export const MainVisual = ({ children }: { children: string }) => {
  return (
    <Visual>
      <h1>{children}</h1>
      <img src='/img/img_stock.jpg' alt='' width={2400} height={350} />
    </Visual>
  );
};
