'use client';

import { useState } from 'react';

export default function Page() {
  const [tickerSymbol, setSymbol] = useState('');
  const [title, setTitle] = useState('');

  async function getData(): Promise<void> {
    const res = await fetch(`/api/stock?ticker_symbol=${tickerSymbol}`);
    const data = await res.json();
    setSymbol(data.globalNews.Information);
    setTitle(data.globalNews.Information);
  }

  return (
    <div>
      <label htmlFor='symbol'>
        Ticker symbolで入力してください
        <input
          type='text'
          id='symbol'
          onChange={(e) => {
            setSymbol(e.target.value);
          }}
          value={tickerSymbol}
        />
        <button onClick={getData}>ニュースを取得</button>
      </label>
      <h1>title: {title}</h1>
      <span>Ticker synbol:{tickerSymbol}</span>
    </div>
  );
}
