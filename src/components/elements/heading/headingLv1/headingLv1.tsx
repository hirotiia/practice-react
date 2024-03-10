import { styled } from 'styled-components';

const Heading1 = styled.h1`
  margin-block: 30px 20px;
`;

export const H1 = ({ children }: { children: string }) => {
  return <Heading1>{children}</Heading1>;
};
