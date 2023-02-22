import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from '../postsSlice';
import { selectAllUsers } from '../../users/usersSlice';

const AddPostComponent = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        dispatch(addNewPost({ title, body: content, userId })).unwrap();

        setTitle('');
        setContent('');
        setUserId('');
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => (
    <Option
      key={user.id}
      value={user.id}
    >
      {user.name}
    </Option>
  ));

  return (
    <FormContainer>
      <Title>Add a new post</Title>
      <Form>
        <Label>Title:</Label>
        <Input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <Label>Author:</Label>
        <Select
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {usersOptions}
        </Select>
        <Label>Content:</Label>
        <TextArea
          type="freeText"
          id="postContent"
          name="postContent"
          value={content}
          size={300}
          onChange={onContentChanged}
        />
        <Button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
          props={canSave}
        >
          Save Post
        </Button>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div``;

const Title = styled.h1`
  color: white;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  color: white;
  font-size: 1.5em;
  font-weight: 700;
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
  border-radius: 10px;
`;

const TextArea = styled.textarea`
  width: 70%;
  padding: 10px;
  resize: none;
  border-radius: 10px;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px 0px;
  color: white;
  background-color: ${(props) => (props.props ? 'transparent' : 'gray')};
  border: 1px solid white;
  border-radius: 10px;
  font-weight: 700;
  cursor: ${(props) => (props.props ? 'pointer' : 'auto')};
  transition: 0.7s ease all;
  margin-top: 20px;
  &:hover {
    background-color: ${(props) => (props.props ? 'white' : 'gray')};
    color: ${(props) => (props.props ? 'black' : 'white')};
  }
`;

const Option = styled.option`
  font-size: 130%;
`;

const Select = styled.select`
  width: 30%;
  padding: 5px 0px;
`;

export default AddPostComponent;
