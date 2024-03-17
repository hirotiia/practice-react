'use client';

import Link from 'next';
import { styled } from 'styled-components';

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

const Panel = styled.div`
  border: 1px solid #eb6299;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ArticlePanel = (props: Feed[]) => {
  return (
    <Panel>
      <Link></Link>
    </Panel>
  );
};
