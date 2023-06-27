import styled from '@emotion/styled';

export const Table = styled.table`
 
  margin: 0 auto;
`;

export const Tr = styled.tr`
  justify-content: center;

  align-items: center;
  text-align: center;
  padding-left: 100px;
  font-size: 13px;
  font-weight: bold;
  &:nth-child(even) {
    background-color: lightgrey;
  }
  &:nth-child(odd) {
    background-color: grey;
  }
`;
export const Trthead = styled.tr`
  background-color: aqua;
`;
