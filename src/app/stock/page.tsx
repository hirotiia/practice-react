'use client';

import { useState } from 'react';
import { Box1 } from '@/components/elements/box/box1/box1';
import { H1 } from '@/components/elements/heading/headingLv1/headingLv1';
import { ArticlePanel } from '@/components/elements/panel/panel';
import { P } from '@/components/elements/text/text';

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
    setSymbol(tickerSymbol);
    setData(responseData);
    console.log(data.globalNews.feed);
  }

  return (
    <>
      <H1>関連銘柄ニュース検索</H1>
      <P>ティッカーシンボルを入力すると、その銘柄に関する最新のニュースを一覧で確認できます。</P>
      <Box1>
        <P>※米国株以外には現在対応しておりません。</P>
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
      <ArticlePanel articles={data.globalNews.feed}></ArticlePanel>
      <span>Ticker symbol:{tickerSymbol}</span>
    </>
  );
}
