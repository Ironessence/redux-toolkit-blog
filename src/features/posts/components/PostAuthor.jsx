import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../users/usersSlice';

import React from 'react';
import styled from 'styled-components';

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <Span> by {author ? author.name : 'Unknown author'}</Span>;
};

const Span = styled.span`
  color: gray;
  font-weight: 500;
`;

export default PostAuthor;
