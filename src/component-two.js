import React from "react";
import {
  branch,
  compose,
  mapProps,
  renderComponent,
  withHandlers,
  withState
} from "recompose";

import {
  Button,
  Comment,
  Dateline,
  Loading,
  BodyText,
  SubHeading
} from "./component-lib";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

export default compose(
  graphql(
    gql`
    query postById($id: ID!) {
      post(id: $id) {
        id
        body
        posted
        author {
          name
        }
        comments {
          id
          body
          posted
          author {
            name
          }
        }
      }
    }
    `,
    {
      options: props => {
        return {
          variables: { id: props.match.params.id }
        };
      }
    }
    ),
    branch(({ data: { loading } }) => loading, renderComponent(Loading)),
    mapProps(props => ({
      ...props,
      post: props.data.post,
      comments: props.data.post.comments
    })),
    withState("hideComments", "setHideComments", false),
    withHandlers({
      toggle: ({ hideComments, setHideComments }) => () => {
        setHideComments(!hideComments);
      }
    })
    )(BlogPostWithComments);
    
    function BlogPostWithComments({ post, comments, toggle, hideComments }) {
      return (
        <>
        <SubHeading>Post by: {post.author.name}</SubHeading>
        <Dateline>
        <div>on {post.posted}</div>
        </Dateline>
        <BodyText>{post.body}</BodyText>
        { !comments.length ?
          <div>No Comments</div>
          :
            <Button onClick={toggle}>
            {hideComments ? "Show Comments" : "Hide Comments"}
            </Button>
    }
            {(!hideComments  &&
              comments
              .sort((a, b) => new Date(b.posted) - new Date(a.posted))
              .map(comment => {
                return (
                  <Comment
                  key={comment.id}
                  author={comment.author.name}
                  commentText={comment.body}
                  date={new Date(comment.posted).toISOString()}
                  />
                  );
                }
                )
                )}
              </>
              );
            }
