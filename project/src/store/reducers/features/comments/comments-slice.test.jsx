import reducer, { fetchComments, postNewComment } from './comment-slice';

let initialState;
const fakeComments = [{ id: 1 }, { id: 3 }];

describe('Test comments slice', () => {
  describe('Test comments extra reducers', () => {
    beforeEach(() => {
      initialState = {
        comments: [],
        commentsLoadStatus: {
          isLoading: false,
          isSuccess: false,
          isError: false,
        },
      };
    });

    it('Test fetch comments pending', () => {
      const action = { type: fetchComments.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        commentsLoadStatus: {
          ...initialState.commentsLoadStatus, isLoading: true,
        },
      });
    });

    it('Test fetch comments fulfilled', () => {
      const action = { type: fetchComments.fulfilled.type, payload: fakeComments };
      const state = reducer(initialState, action);
      expect(state).toEqual({ ...initialState, comments: fakeComments });
    });

    it('Test fetch comments rejected', () => {
      const action = { type: fetchComments.rejected.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        commentsLoadStatus: {
          ...initialState.commentsLoadStatus, isError: true,
        },
      });
    });

    it('Test post comments pending', () => {
      const action = { type: postNewComment.pending.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        commentsLoadStatus: {
          ...initialState.commentsLoadStatus, isLoading: true,
        },
      });
    });

    it('Test post comments fulfilled', () => {
      const action = { type: postNewComment.fulfilled.type, payload: fakeComments };
      const state = reducer(initialState, action);
      expect(state).toEqual({ ...initialState, comments: fakeComments });
    });

    it('Test post comments rejected', () => {
      const action = { type: postNewComment.rejected.type };
      const state = reducer(initialState, action);
      expect(state).toEqual({
        ...initialState,
        commentsLoadStatus: {
          ...initialState.commentsLoadStatus, isError: true,
        },
      });
    });
  });
});
