export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticker_symbol = searchParams.get('ticker_symbol');

  const { API_KEY } = process.env;
  const res = await fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker_symbol}&apikey=${API_KEY}`,
  );
  const globalNews = await res.json();

  return Response.json({ globalNews });
}
