import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link as L } from "react-router-dom";

export const GlobalStyles = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    background-color: lightseagreen;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');
  }
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  padding: 16px 0px;
`;

export const Container = styled.div`
  background-color: lightcoral;
  margin: 0px auto;
  padding: 16px;
  max-width: 600px;
`;

export const Heading = styled.h1`
  font-family: "Press Start 2P";
  font-size: 2rem;
  border-bottom: solid 3px yellow;
  padding-bottom: 4px;
  margin-bottom: 16px;
`;

export const Instructions = styled.p`
  font-family: "Verdana", sans-serif;
  line-height: 1.28;
  margin-bottom: 8px;
  padding: 16px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 1s ease-in-out;
`;

export const Button = styled.button`
  border: none;
  margin: 8px;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid yellow;
  box-shadow: none;
  background-color: blue;
  color: yellow;
`;

export const BodyText = styled.p`
  font-family: "Press Start 2P";
  font-size: 0.7rem;
  word-wrap: break-word;
  padding: 8px 0;
`;

export const SubHeading = styled(Heading)`
  padding-top: 16px;
  font-size: 1.2rem;
  padding-bottom: 2px;
  margin: 0px;
`;

export const Dateline = styled.h3`
  font-family: monospace;
  font-size: 0.8rem;
  font-style: italic;
  background-color: lightgray;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
  padding-top: 8px;
`;

export const Link = styled(L)`
  font-weight: bold;
  color: slateblue;
  border: 1px solid lightgray;
  margin-bottom: 6px;
  &:hover {
    border: 1px dashed yellow;
    color: cyan;
    background-color: black;
  }
`;

const LoadingStyle = styled.div`
  padding: 16px;
  color: cyan;
  background-color: black;
`;

export const Loading = () => <LoadingStyle>Loading...</LoadingStyle>;

export const A = styled.a`
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;

const CommentAuthor = styled.h4`
  font-family: "Press Start 2P";
  font-size: 0.75rem;
  margin-top: 8px;
`;

const CommentDate = styled.p`
  font-family: monospace;
  font-size: 0.75rem;
  color: gainsboro;
  margin-bottom: 8px;
`;

const CommentStyle = styled.div`
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: monospace;
  padding: none;
  background-color: darkgrey;
  padding: 16px;
  border: 1px solid darkblue;
`;

export const Comment = props => (
  <CommentStyle>
    <CommentAuthor>{props.author}</CommentAuthor>
    <CommentDate>comment on {props.date}</CommentDate>
    {props.commentText}
  </CommentStyle>
);
