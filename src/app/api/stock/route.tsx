export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const { API_KEY } = process.env;
  const res = await fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${API_KEY}`,
  );
  const product = await res.json();

  return Response.json({ product });
}
