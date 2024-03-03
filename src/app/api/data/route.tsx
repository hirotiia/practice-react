import { comments } from '@/app/api/data/comments';

export async function GET() {
  const response = new Response(JSON.stringify(comments));
  return response;
}
