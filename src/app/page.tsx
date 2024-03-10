'use client';

import { styled } from 'styled-components';
import { H1 } from '@/components/elements/heading/headingLv1/headingLv1';
import { ListItems } from '@/components/elements/list/list/list';

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
      <H1>React学習記録</H1>
      <P>このサイトはReactを学びながら、Next.jsの環境にもなれていくための学習記録サイトです。</P>
      <P>
        サンプルとして米国株APIをしようして、銘柄の最新情報を取得するアプリケーションを開発予定です。
      </P>
      <H2>学習中の教材一覧</H2>
      <ListItems listData={materials}></ListItems>
      <H2>作成中のページ</H2>
      <ListItems listData={createPage}></ListItems>
    </>
  );
}
