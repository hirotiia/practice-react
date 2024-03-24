import Link from 'next/link';
import { styled } from 'styled-components';

const List = styled.ul`
  margin-top: 20px;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      text-decoration: underline;
      color: #3ea8ff;

      &:hover {
        text-decoration: none;
      }
    }

    time {
      color: #666666;
    }

    & + li {
      margin-top: 20px;
    }
  }
`;

export function LinkList({
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
