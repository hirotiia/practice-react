'use client';

import { useState } from 'react';
import { styled } from 'styled-components';

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
      <h1>米国株最新ニュース検索</h1>
      <P>
        ティッカーシンボルを入力すると、その銘柄に関する最新のニュースのリストを一覧で確認できます。
      </P>
      <label>
        Ticker symbol
        <input
          type='text'
          onChange={(e) => {
            setSymbol(e.target.value);
          }}
          value={tickerSymbol}
        />
        <button onClick={getData}>ニュースを取得</button>
      </label>
      <h1>title: {title}</h1>
      <span>Ticker synbol:{tickerSymbol}</span>
    </>
  );
}
