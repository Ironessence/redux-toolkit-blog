import { useDispatch } from 'react-redux';
import { reactionAdded } from '../postsSlice';
import React from 'react';
import styled from 'styled-components';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '💖',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      {Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
          <Button
            key={name}
            type="button"
            onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
          >
            {emoji} {post.reactions[name]}
          </Button>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default ReactionButtons;
