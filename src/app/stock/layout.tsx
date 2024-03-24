import { MainVisual } from '@/components/layouts/mainVisual/mainVisual';

export default function StockLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <MainVisual>関連銘柄ニュース検索</MainVisual>
      {children}
    </section>
  );
}
