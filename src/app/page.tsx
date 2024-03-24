'use client';

import { styled } from 'styled-components';
import { H2 } from '@/components/elements/heading/headingLv2/headingLv2';
import { TimeList } from '@/components/elements/list/timeList/timeList';
import { P } from '@/components/elements/text/text';

const H3 = styled.h3`
  margin-block: 50px 20px;
  padding-bottom: 5px;
  border-bottom: 2px solid #3ea8ff;
  color: #333;
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
      <H2>React学習記録</H2>
      <P>このサイトはReactを学びながら、Next.jsの環境にもなれていくための学習記録サイトです。</P>
      <P>
        サンプルとして米国株APIをしようして、銘柄の最新情報を取得するアプリケーションを開発予定です。
      </P>
      <H3>学習中の教材一覧</H3>
      <TimeList listData={materials}></TimeList>
      <H3>作成中のページ</H3>
      <TimeList listData={createPage}></TimeList>
    </>
  );
}
