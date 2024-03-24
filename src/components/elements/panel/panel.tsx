'use client';

import { styled } from 'styled-components';

/**
 * JSONから返却される記事データの型
 */
type ArticlePanelProps = {
  articles: Feed[];
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
  margin-top: 20px;
`;

const Article = styled.div`
  overflow: hidden;
  background: rgba(255, 255, 255, 0.25); /* カード背景の色＋不透明度 */
  backdrop-filter: blur(10px); /* 背景のぼかし具合 */
  border-radius: 16px; /* 角の丸み */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /* 外側の影 */
  border: 1px solid rgba(255, 255, 255, 0.3); /* 縁のスタイル */

  + div {
    margin-top: 30px;
  }
`;

const Img = styled.img`
  aspect-ratio: 700 / 400;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Anchor = styled.a`
  display: grid;
  transition: opacity 0.2s ease-out;
  gap: 10px;

  @media screen and (min-width: 760px) {
    gap: 20px;
    grid-template-areas:
      'Image Title'
      'Image Published';
    grid-template-rows: 300px 1fr;
    grid-template-columns: 300px 1fr;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const Item1 = styled.div`
  order: 1;

  @media screen and (min-width: 760px) {
    grid-area: 'Image';
  }
`;

const Item2 = styled.div`
  order: 2;

  @media screen and (min-width: 760px) {
    grid-area: 'Title';
    font-size: 2rem;
  }
`;

const Item3 = styled.time`
  order: 3;

  @media screen and (min-width: 760px) {
    grid-area: 'Published';
    order: none;
  }
`;

export const ArticlePanel = ({ articles }: ArticlePanelProps) => {
  const articlePanelItems = articles.map((article, index) => {
    const dateString = article.time_published.split('T')[0];
    const yyyy = dateString.substring(0, 4);
    const mm = dateString.substring(4, 6);
    const dd = dateString.substring(6, 8);
    const kebabCase = `${yyyy}-${mm}-${dd}`;

    const dateObject = new Date(kebabCase);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}年${month}月${day}日`;
    const dateTimeValue = `${year}-${month}-${day}`;

    return (
      <Article
        role='article'
        aria-labelledby={`article-name${index}`}
        aria-describedby={`article-summary${index} article-date${index} article-author${index}`}
        key={article.title}
      >
        <Anchor href={article.url}>
          <Item2 id={`article-name${index}`}>{article.title}</Item2>
          <Item3 dateTime={dateTimeValue} id={`article-date${index}`}>
            {formattedDate}
          </Item3>
          <Item1>
            <Img src={article.banner_image} alt='' />
          </Item1>
        </Anchor>
      </Article>
    );
  });

  return (
    <>
      <Panel>{articlePanelItems}</Panel>
    </>
  );
};
