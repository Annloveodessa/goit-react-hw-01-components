import styled from '@emotion/styled';

export const ListItem = styled.li`
  border: 1px solid #cac4db;
  border-radius: 5px;
  padding: 10px 40px;
  margin-top:10px;
`;

export const ListSpan = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
`;

export const ListImg = styled.img``;

export const ListP = styled.p``;
