import { styled } from 'styled-components';

const Heading2 = styled.h2`
  margin-block: 40px 20px;
  font-size: 1.8rem;
  text-align: center;
  color: #333;

  @media screen and (min-width: 760px) {
    font-size: 2rem;
    margin-block: 90px 20px;
  }
`;

export const H2 = ({ children }: { children: string }) => {
  return <Heading2>{children}</Heading2>;
};
