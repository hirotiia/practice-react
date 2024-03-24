'use client';

import { useState } from 'react';
import { styled } from 'styled-components';
import { ArticlePanel } from '@/components/elements/panel/panel';
import { P } from '@/components/elements/text/text';

const SearchBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  margin-top: 30px;
  margin-inline: auto;
  overflow: hidden;
  border-radius: 3px;
  background-color: #cae6f2;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 45px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    background-color: #3ea8ff;

    &::after {
      width: 20px;
      height: 20px;
      background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%20%3Cpath%20d%3D%22M23.7%2020.8%2019%2016.1c-.2-.2-.5-.3-.8-.3h-.8c1.3-1.7%202-3.7%202-6C19.5%204.4%2015.1%200%209.7%200S0%204.4%200%209.7s4.4%209.7%209.7%209.7c2.3%200%204.3-.8%206-2v.8c0%20.3.1.6.3.8l4.7%204.7c.4.4%201.2.4%201.6%200l1.3-1.3c.5-.5.5-1.2.1-1.6zm-14-5.1c-3.3%200-6-2.7-6-6s2.7-6%206-6%206%202.7%206%206-2.6%206-6%206z%22%20fill%3D%22%23bababa%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E');
      background-repeat: no-repeat;
      content: '';
    }
  }
`;
const Label = styled.label`
  input {
    height: 45px;
    padding: 5px 15px;
    border: none;
    box-sizing: border-box;
    background-color: #cae6f2;
    font-size: 1em;
    outline: none;
    color: #000;

    &::placeholder {
      color: #bababa;
    }
  }
`;

type ArticleData = {
  globalNews: { feed: Feed[] };
};

type Sentiment = {
  relevance_score: string;
  ticker: string;
  ticker_sentiment_label: string;
  ticker_sentiment_score: string;
};
type Topics = {
  relevance_score: string;
  score: string;
};

/**
 * JSONから返却される記事データの型
 */
type Feed = {
  authors: string[];
  banner_image: string;
  category_within_source: string;
  overall_sentiment_label: string;
  overall_sentiment_score: number;
  source: string;
  source_domain: string;
  summary: string;
  ticker_sentiment: Sentiment[];
  time_published: string;
  title: string;
  topics: Topics[];
  url: string;
};

export default function Page() {
  const [tickerSymbol, setSymbol] = useState('');
  const [data, setData] = useState<ArticleData>({ globalNews: { feed: [] } });

  async function getData(): Promise<void> {
    const response = await fetch(`/api/stock?ticker_symbol=${tickerSymbol}`);
    const responseData = await response.json();
    setData(responseData);
  }

  return (
    <>
      <P>ティッカーシンボルを入力すると、その銘柄に関する最新のニュースを一覧で確認できます。</P>
      <SearchBox>
        <Label>
          <input
            type='text'
            onChange={(e) => {
              setSymbol(e.target.value);
            }}
            placeholder='キーワードを入力'
          />
        </Label>
        <button onClick={getData} type='submit' aria-label='検索'></button>
      </SearchBox>
      <ArticlePanel articles={data.globalNews.feed}></ArticlePanel>
    </>
  );
}
