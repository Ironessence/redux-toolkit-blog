import { useSelector, useDispatch } from 'react-redux';
import PostComponent from './components/PostComponent';
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from './postsSlice';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PostsList = () => {
  let firstRender = useRef(false);
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (firstRender.current === false) {
      if (postsStatus === 'idle') {
        dispatch(fetchPosts());
      }

      return () => {
        firstRender.current = true;
      };
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postsStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostComponent
        post={post}
        key={`${post.id} + ${Math.random() * (1000 - 1 + 1) + 1}`}
      />
    ));
  } else if (postsStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <Section>
      <Title>Posts</Title>
      <PostsContainer>{content}</PostsContainer>
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
