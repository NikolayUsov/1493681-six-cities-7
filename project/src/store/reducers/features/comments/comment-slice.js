/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { reviewAdaptedToClient } from '../../../../utils/adapte-to-client';
import { ApiRoutes } from '../../../../const';

const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (id, { extra: apiInstance }) => {
    try {
      const { data } = await apiInstance.get(`${ApiRoutes.COMMENTS}/${id}`);
      return data.map(reviewAdaptedToClient);
    } catch (err) {
      throw new Error(err);
    }
  },
);

const postNewComment = createAsyncThunk(
  'comments/postNewComment',
  async ({ id, newCommentData }, { extra: apiInstance }) => {
    try {
      const { data } = await apiInstance.post(`${ApiRoutes.COMMENTS}/${id}`, newCommentData);
      return data.map(reviewAdaptedToClient);
    } catch (err) {
      throw new Error(err);
    }
  },
);
const initialState = {
  comments: [],
  commentsLoadStatus: {
    isLoading: false,
    isSuccess: false,
    isError: false,
  },
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.commentsLoadStatus.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.commentsLoadStatus.isLoading = false;
      state.comments = action.payload;
    },
    [fetchComments.rejected]: (state) => {
      state.commentsLoadStatus.isError = true;
    },

    [postNewComment.pending]: (state) => {
      state.commentsLoadStatus.isLoading = true;
    },
    [postNewComment.fulfilled]: (state, action) => {
      state.commentsLoadStatus.isLoading = false;
      state.comments = action.payload;
    },
    [postNewComment.rejected]: (state) => {
      state.commentsLoadStatus.isError = true;
    },
  },
});

export { fetchComments, postNewComment };
export default commentSlice.reducer;
