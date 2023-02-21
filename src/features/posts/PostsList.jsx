import { useSelector } from 'react-redux';
import PostComponent from './components/PostComponent';
import { selectAllPosts } from './postsSlice';
import React from 'react';
import styled from 'styled-components';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  return (
    <Section>
      <Title>Posts</Title>
      <PostsContainer>
        {posts.map((post) => (
          <PostComponent
            post={post}
            key={post.title}
          />
        ))}
      </PostsContainer>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  text-shadow: 2px 3px 3px black;
  letter-spacing: 1px;
  text-align: center;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default PostsList;
