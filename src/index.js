import React from "react";
import ReactDOM from "react-dom";

import { Switch, Route, Link } from "react-router-dom";
import {
  Background,
  Button,
  Container,
  Heading,
  Instructions,
  A
} from "./component-lib";
import Providers from "./providers.js";
import ComponentOne from "./component-one.js";
import ComponentTwo from "./component-two.js";

function App() {
  return (
    <Providers>
      <Background>
        <Container>
          <Heading>
            <Link to="/">The Robot Blog</Link>
          </Heading>
          <InstructionsBlock />
          <Switch>
            <Route exact path="/" component={ComponentOne} />
            <Route exact path="/post/:id" component={ComponentTwo} />
            <Route render={() => <div>Error 404!</div>} />
          </Switch>
        </Container>
      </Background>
    </Providers>
  );
}

const InstructionsBlock = () => {
  const [showInstructions, setShowInstructions] = React.useState(true);

  return (
    <>
      {showInstructions ? (
        <Instructions>
          Welcome to the robot blog. Robots are boring bloggers: They blog in
          binary, and their names are all just hex strings! But it turns out
          that they are pretty bad at React, and they need your help!
          <br />
          <br />
          Your Instructions are to help out our robot friends with their React
          app.
          <br />
          <br />
          First, open the file `component-one.js` and read the comments. They
          will guide you through the changes the robots need you to make.
          <br />
          <br />
          Second, the robots would like you to build a post details page in
          `component-two.js` with the following user story: "When I click the
          `Go to Comments` link for a single post on the home page, I should be
          taken to a page that displays that single post at the top, as well as
          every comment related to that post underneath it, including the author
          name, and the date the comment was posted (ISO format straight from
          the api is fine, they are robots after all!). The comments should be
          displayed in reverse date order (that is, newest first). If there are
          no comments associated with that post, the page should so state. There
          should be a button that hides all the comments, if there are
          comments."
          <br />
          <br />
          There's a graphql{" "}
          <A href="https://react-flex-api.pckil.now.sh/graphql">
            API playground available
          </A>{" "}
          to help, and you can email{" "}
          <A href="mailto:patrick@groundbreaker.co">Patrick</A> if you have
          questions!. <br />
          <br />
          When you are done, please save the URL of your sandbox and send it
          back to your contact at groundbreaker (or email Patrick above and
          he'll sort it out).
        </Instructions>
      ) : null}
      <Button
        type="button"
        onClick={() => setShowInstructions(!showInstructions)}
      >
        {showInstructions ? "Hide Instructions" : "Show Instructions"}
      </Button>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
