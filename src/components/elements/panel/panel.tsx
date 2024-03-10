import { ReactElement } from 'react';
import { styled } from 'styled-components';

const Box = styled.div`
  border: 1px solid #eb6299;
  border-radius: 5px;
  margin-top: 20px;
`;

export const Panel = ({ children }: { children: ReactElement }) => {
  return <Box>{children}</Box>;
};
