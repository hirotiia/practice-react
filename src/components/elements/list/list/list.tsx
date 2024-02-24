import { styled } from 'styled-components';

const RessonsList = styled.ul`
  margin-top: 20px;

  li {
    list-style-type: none;
    display: flex;
    align-items: flex-start;
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

export function ListItems({
  listData,
}: {
  listData: Array<{ id: number; time: string; href: string; text: string }>;
}) {
  const listItems = listData.map((data) => {
    return (
      <li key={data.id}>
        <div>
          <time dateTime={data.time}>{data.time.replaceAll('-', '.')}</time>
        </div>
        <div>
          <a href={data.href} target='_blank'>
            {data.text}
          </a>
        </div>
      </li>
    );
  });
  return <RessonsList>{listItems}</RessonsList>;
}
