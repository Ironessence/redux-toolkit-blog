import React from 'react';
import styled from 'styled-components';
import PostAuthor from './PostAuthor';

const PostComponent = ({ post }) => {
  console.log(post);
  return (
    <Article key={Number(post.id)}>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>{post.content}</PostContent>
      <PostAuthor userId={post.userId} />
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
