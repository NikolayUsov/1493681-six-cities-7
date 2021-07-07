import NameSpace from '../../name-space';

const selectComments = (state) => state[NameSpace.COMMENT].comments;
const selectLoadCommentsStatus = (state) => state[NameSpace.COMMENT].commentsLoadStatus;

export { selectComments, selectLoadCommentsStatus };
