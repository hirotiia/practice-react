'use client';

import Image from 'next/image';
import { styled } from 'styled-components';
import styles from './page.module.css';
import { ListItems } from '@/components/elements/list/list/list';
import { Header } from '@/components/layouts/header';

const P = styled.p`
  margin-top: 30px;
  color: #666666;

  & + p {
    margin-top: 10px;
  }
`;

const H2 = styled.h2`
  margin-block: 50px 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid #3ea8ff;
`;

export default function Home() {
  const materials = [
    {
      id: 1,
      time: '2024-02-24',
      href: 'https://nextjs.org/learn/react-foundations',
      text: 'react-foundations',
    },
    {
      id: 2,
      time: '2024-02-24',
      href: 'https://nextjs.org/learn/dashboard-app',
      text: 'Next.js を学ぶ',
    },
  ];

  const createPage = [
    {
      id: 2,
      time: '2024-03-09',
      href: '/stock',
      text: '最新の米国株ニュースを取得できるページ',
    },
  ];

  return (
    <>
      <Header></Header>
      <main className={styles.main}>
        <h1>React学習記録</h1>
        <P>このサイトはReactを学びながら、Next.jsの環境にもなれていくための学習記録サイトです。</P>
        <P>
          焦らず、着実に、気ままに、作りながら基礎がためをしていくためのプログラミング用のジムみたいなものです。
        </P>
        <H2>学習中の教材一覧</H2>
        <ListItems listData={materials}></ListItems>
        <H2>作成中のページ</H2>
        <ListItems listData={createPage}></ListItems>
      </main>
    </>
  );
}
