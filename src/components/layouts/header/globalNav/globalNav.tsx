import Link from 'next/link';
import { styled } from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      text-decoration: none;
      color: #3ea8ff;
      font-size: 0.9rem;

      @media screen and (min-width: 760px) {
        font-size: 1rem;
      }

      &:hover {
        text-decoration: none;
      }
    }
  }
`;

export function GlobalNav({
  listData,
}: {
  listData: Array<{ id: number; href: string; text: string }>;
}) {
  const listItems = listData.map((data) => {
    const isAbsoluteURL = data.href.startsWith('http');
    const targetBlank = isAbsoluteURL ? { target: '_blank' } : {};

    return (
      <li key={data.id}>
        <div>
          <Link href={data.href} {...targetBlank}>
            {data.text}
          </Link>
        </div>
      </li>
    );
  });
  return <List>{listItems}</List>;
}
