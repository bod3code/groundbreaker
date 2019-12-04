/**
 *  You have _three_ tasks for this component.
 *  Please use the imported components from the component-lib,
 *  this isn't testing your CSS skills!
 *    1: Right now we are only showing the first post.
 *       The robots would like to see _all 10_ posts on this page.
 *        OK Robots, the page will now show *all* posts.
 *    2: Right now we are only showing the post's body text and posted date.
 *       The robots would also like to _see the author's name_ for each
 *       of the 10 posts, rather than the words "Unknown Author"
 *    3: Right now there's a _button that does nothing_!  Make it hide
 *       every post body (`post.body`) on the page so you can just see
 *       the author heading and dateline.
 *
 *  The following documentation will be helpful:
 *  Recompose:  https://github.com/acdlite/recompose/blob/master/docs/API.md
 *  react-apollo: https://www.apollographql.com/docs/react/api/react-hoc/#graphqlquery-configcomponent
 */

import React from "react";
import {
  branch,
  compose,
  mapProps,
  renderComponent,
  withState
} from "recompose";

import {
  Button,
  Dateline,
  Link,
  Loading,
  BodyText,
  SubHeading
} from "./component-lib";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

export default compose(
  graphql(
    gql`
      query postsQuery {
        posts {
          id
          body
          posted
        }
      }
    `,
    {
      options: props => {
        return {
          variables: {}
        };
      }
    }
  ),
  branch(({ data: { loading } }) => loading, renderComponent(Loading)),
  mapProps(props => ({
    ...props,
    posts: props.data.posts
  })),
  withState("hideBody", "setHideBody", false)
)(BlogPostsDisplay);

function BlogPostsDisplay({ posts }) {
  return posts.map(post => {
    return (
      <>
        <Button>Show Authors Only</Button>
        <SubHeading>Post by: Unknown Author</SubHeading>
        <Dateline>
          <div>on {post.posted}</div>
          <Link to={`/post/${post.id}#comments`}>Go to comments</Link>
        </Dateline>
        <BodyText>{post.body}</BodyText>
      </>
    );
  });
}
