import styled from 'styled-components';
import './App.css';
import AddPostComponent from './features/posts/components/AddPostComponent';
import PostsList from './features/posts/PostsList';

function App() {
  return (
    <Container>
      <AddPostComponent />
      <PostsList />
    </Container>
  );
}

const Container = styled.div``;

export default App;
