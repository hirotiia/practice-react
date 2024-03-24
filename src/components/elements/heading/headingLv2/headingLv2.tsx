import { styled } from 'styled-components';

const Heading2 = styled.h2`
  margin-block: 90px 20px;
  font-size: 2rem;
  text-align: center;
  color: #333;
`;

export const H2 = ({ children }: { children: string }) => {
  return <Heading2>{children}</Heading2>;
};
