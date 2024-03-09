export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const api_key = process.env.API_KEY;
  const res = await fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${api_key}`,
  );
  const product = await res.json();

  return Response.json({ product });
}
