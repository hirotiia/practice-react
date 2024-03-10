'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import { Box1 } from '@/components/elements/box/box1/box1';
import { H1 } from '@/components/elements/heading/headingLv1/headingLv1';

const P = styled.p`
  margin-top: 30px;
  color: #666666;

  & + p {
    margin-top: 10px;
  }
`;

export default function Page() {
  const [tickerSymbol, setSymbol] = useState('');
  const [title, setTitle] = useState('');

  async function getData(): Promise<void> {
    const res = await fetch(`/api/stock?ticker_symbol=${tickerSymbol}`);
    const data = await res.json();
    setSymbol(tickerSymbol);
    setTitle(data.globalNews.feed[0].title);
  }

  return (
    <>
      <H1>米国株最新ニュース検索</H1>
      <P>
        ティッカーシンボルを入力すると、その銘柄に関する最新のニュースのリストを一覧で確認できます。
      </P>
      <Box1>
        <P>米国株以外には現状対応しておりません。</P>
      </Box1>
      <label>
        Ticker symbol
        <input
          type='text'
          onChange={(e) => {
            setSymbol(e.target.value);
          }}
          value={tickerSymbol}
        />
      </label>
      <button onClick={getData}>ニュースを取得</button>
      <h1>title: {title}</h1>
      <span>Ticker synbol:{tickerSymbol}</span>
    </>
  );
}
