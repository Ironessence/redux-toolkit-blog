import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'test title 1dgdgagdasgag',
    content:
      'loremaksfpoajkgfpos ajpaj pfj pasjfapsoj fpoasfhj aos hfjoaishfoiahsfo iahjsfoja fsojf aoijfaosj ao josa ',
  },
  {
    title: 'test2 opfjapso japsdogj aos fas ',
    content:
      'asfojaspo gjasp fjapsfj ap sjfpa tjapoigj083f2onfmodasfasf oahjf ajf poaij fapfjpas jfpasj fpasj fpasfj ',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
