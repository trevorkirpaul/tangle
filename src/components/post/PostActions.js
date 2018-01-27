import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import styled from 'styled-components';

// button syles -- mat-ui
const btnStyle = {
  color: 'coral',
};

const Wrapper = styled.div`
  padding: 15px;
  margin: 10px;
  color: #f8f8f8;
  background: #383838;
`;
const Detail = styled.p`
  color: #f8f8f8;
  font-size: 0.8em;
`;

export const example = ({
  handleAddLike,
  handleRemoveLike,
  postID,
  userInfo,
  likes,
}) => {
  // const liked = likes.includes(userInfo._id);
  return null;
};

export default class PostActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      likes: 0,
    };
  }
  handleAction = () => {
    const likes = this.state.likes;
    if (this.state.liked) {
      this.handleRemoveLike();
      this.setState(() => ({ liked: false, likes: likes - 1 }));
    } else {
      this.handleAddLike();
      this.setState(() => ({ liked: true, likes: likes + 1 }));
    }
  };
  handleRemoveLike = () => {
    this.props.handleRemoveLike(this.props.postID);
  };
  handleAddLike = () => {
    this.props.handleAddLike(this.props.postID);
  };
  componentDidMount() {
    const likes = this.props.likes;
    const userID = this.props.userInfo._id || null;

    if (likes.includes(userID)) {
      this.setState(() => ({ liked: true, likes: likes.length }));
    } else {
      this.setState(() => ({ liked: false, likes: likes.length }));
    }
  }

  render() {
    return (
      <Wrapper>
        <Detail>Likes: {this.state.likes}</Detail>
        <FlatButton
          style={btnStyle}
          label={this.state.liked ? 'remove like' : 'add like'}
          onClick={this.handleAction}
        />
      </Wrapper>
    );
  }
}
