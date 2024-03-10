import { ReactElement } from 'react';
import { styled } from 'styled-components';

const Box = styled.div`
  border: 1px solid #eb6299;
  border-radius: 5px;
  margin-top: 20px;
  padding: 20px;
  background-color: #f3c9d9;

  *:first-child {
    margin-top: 0 !important;
  }
`;

export const Box1 = ({ children }: { children: ReactElement }) => {
  return <Box>{children}</Box>;
};
