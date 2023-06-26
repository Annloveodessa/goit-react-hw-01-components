import styled from '@emotion/styled';

export const ListItem = styled.li``;

export const ListSpan = styled.span`
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: block;
`;

export const ListImg = styled.img``;

export const ListP = styled.p``;
