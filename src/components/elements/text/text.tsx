import { styled } from 'styled-components';

const Text = styled.p`
  font-size: 1rem;
  margin-top: 30px;
  color: #666666;

  & + p {
    margin-top: 10px;
  }
`;

export function P({ children }: { children: string }) {
  return <Text>{children}</Text>;
}
