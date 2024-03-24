import { styled } from 'styled-components';

const Text = styled.p`
  font-size: 0.8rem;
  margin-top: 30px;
  color: #666666;
  font-size: 0.9rem;

  @media screen and (min-width: 760px) {
    font-size: 1rem;
  }

  & + p {
    margin-top: 10px;
  }
`;

export function P({ children }: { children: string }) {
  return <Text>{children}</Text>;
}
