import React from 'react';
import styled from 'styled-components';
import PostAuthor from './PostAuthor';
import ReactionButtons from './ReactionButtons';
import TimeAgo from './TimeAgo';

const PostComponent = ({ post }) => {
  return (
    <Article>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.body}</PostContent>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </Article>
  );
};

const Article = styled.article`
  border-radius: 10px;
  border: 1px solid white;
  padding: 10px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const PostTitle = styled.h2`
  color: white;
`;

const PostContent = styled.p`
  color: white;
`;

export default PostComponent;
