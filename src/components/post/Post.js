import React from 'react';
import Progress from 'material-ui/CircularProgress';
import PostDetails from './PostDetails';
import Comments from './Comments';
import AddCommentContainer from '../addComment/AddCommentContainer';

export default ({
  post,
  comments,
  loading,
  error,
  handleLocalAdd,
  handleLocalDelete,
}) => {
  if (loading) {
    return (
      <div>
        <Progress />
      </div>
    );
  } else if (post) {
    return (
      <div>
        <PostDetails title={post.title} author={post.author} body={post.body} />
        <Comments comments={comments} handleLocalDelete={handleLocalDelete} />
        <AddCommentContainer
          postID={post._id}
          handleLocalAdd={handleLocalAdd}
        />
      </div>
    );
  } else if (error) {
    return (
      <div>
        <h1>ERROR!</h1>
      </div>
    );
  } else {
    return <h1>error</h1>;
  }
};
