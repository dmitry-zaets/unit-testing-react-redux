// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logos: require("../assets/logos.png"),
  firstTests: require("../assets/firstTests.png"),
  firstTestsFail: require("../assets/firstTestsFail.png"),
  pullRequest: require("../assets/pullRequest.png"),
  ciFail: require("../assets/ciFail.png"),
  testResults: require("../assets/testResults.png"),
  cov: require("../assets/cov.png"),
  aha: require("../assets/aha.gif"),
  followRules: require("../assets/followRules.gif"),
  dance: require("../assets/dance.gif"),
  cool: require("../assets/cool.gif"),
  qr: require("../assets/qr.jpg"),
  conventions: require("../assets/conventions.png"),
  actions: require("../assets/actions.png"),
  faq: require("../assets/faq.png"),
  lodgify: require("../assets/lodgify.png")
};

preloader(images);

const theme = createTheme({
  primary: "transparent",
  secondary: "white",
  tertiary: "white",
  quartenary: "white"
}, {
  primary: "Open Sans"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="number">
          <Slide>
            <Heading size={1} fit caps lineHeight={1.5}>
              Unit Testing
            </Heading>
            <Heading size={1} fit caps>
              in React + Redux Applications
            </Heading>
            <Image src={images.logos.replace("/", "")} margin="40px auto 0px" height="120px"/>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Chapter I
            </Heading>
            <Heading size={2} caps lineHeight={1}>
              Great start
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Brand new Application
            </Heading>
          </Slide>

           <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Requirements
            </Heading>
            <List>
              <ListItem>Embeddable into existing UI</ListItem>
              <ListItem>Work well with CI/CD cycle</ListItem>
              <ListItem>Long-term support</ListItem>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Technology stack
            </Heading>
             <Heading size={1} fit caps lineHeight={1}>
              Webpack / ES6 / React / Redux
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Do testing from the begining!
            </Heading>
            <Image src={images.aha.replace("/", "")} margin="40px auto 0px" height="400px" />
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1.5}>
              Testing Stack
            </Heading>
             <Heading size={1} fit caps lineHeight={1}>
              Webpack / Karma / Mocha / Expect
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} caps lineHeight={1}>
              First tests!
            </Heading>
            <Image src={images.firstTests.replace("/", "")} margin="40px auto 0px" height="480px"/>
          </Slide>

          <Slide>
            <Heading size={2} fit caps lineHeight={1}>
              And next commit...
            </Heading>
            <Image src={images.firstTestsFail.replace("/", "")} margin="40px auto 0px" height="500px"/>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              How to prevent
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              breaking tests?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Run tests on CI!
            </Heading>
            <Image src={images.followRules.replace("/", "")} margin="40px auto 0px" height="480px"/>
          </Slide>

           <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              But this did not help :(
            </Heading>
            <Image src={images.ciFail.replace("/", "")} margin="40px auto 0px" height="500px" />
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Any other solution?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Pull Request Checks!
            </Heading>
            <Image src={images.pullRequest.replace("/", "")} margin="40px auto 0px" width="800px"/>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Chapter II
            </Heading>
            <Heading size={2} caps lineHeight={1}>
              Motivation
            </Heading>
          </Slide>

          <Slide notes="No motivation">
            <Heading size={1} fit caps lineHeight={1}>
              Nobody wants to write tests!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              How to motivate to write tests?
            </Heading>
          </Slide>

          <Slide notes="Trying to exmplain to teammembers why Unit testing is so cool">
            <Heading size={1} fit caps lineHeight={1}>
              Explain why Unit testing is so cool!
            </Heading>
             <Image src={images.cool.replace("/", "")} margin="40px auto 0px" width="800px"/>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Advantages of unit testing
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Ensure that code works as expected
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Do refactoring safely
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Prevent delivery of broken code
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Write better structured code
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Understand existing code faster
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              But talks not always works...
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Any other way?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Require tests on code reviews!
            </Heading>
          </Slide>

           <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              But which parts we want to test?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              A list of things
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              That mandatory to test
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Mandatory to test
            </Heading>
            <List>
              <ListItem>Reducers</ListItem>
              <ListItem>Action Creators</ListItem>
              <ListItem>Container Components</ListItem>
              <ListItem>Business logic</ListItem>
              <ListItem><span style={{"textDecoration": "line-through"}}>React</span></ListItem>
            </List>
          </Slide>

          <CodeSlide
            className={"codeSlides"}
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/reducer.example")}
            ranges={[
              { loc: [0, 0], title: "Reducers" },
              { loc: [3, 7], title: "Initial State Structure" },
              { loc: [10, 14], title: "Action Handlers" },
              { loc: [22, 31], title: "Test" }
            ]}
          />

          <CodeSlide
            className={"codeSlides"}
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/actions.example")}
            ranges={[
              { loc: [0, 0], title: "Actions" },
              { loc: [12, 18], title: "Simple Action Creators" },
              { loc: [37, 47], title: "Async Action Creators" }
            ]}
          />

          <Slide notes="To test Async action creators we was using redux-mock-store">
            <Heading size={1} fit caps lineHeight={1}>
              Async Action Creators
            </Heading>
            <CodePane bgColor="primary" textSize={"1.3rem"}
              lang="js"
              source={require("raw!../assets/code/actions.spec.example")}
              margin="20px auto"
            />
          </Slide>

          <CodeSlide
            className={"codeSlides"}
            transition={[]}
            lang="js"
            code={require("raw!../assets/code/connector.example")}
            ranges={[
              { loc: [0, 0], title: "Redux Connection Component" },
              { loc: [0, 6], title: "map state to props" },
              { loc: [7, 17], title: "map dispath to props" }
            ]}
          />

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              New way of storing:
            </Heading>
            <Heading size={2} caps fit lineHeight={1}>
              Selectors
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Any other code
            </Heading>
            <CodePane bgColor="primary"
              lang="js"
              source={require("raw!../assets/code/localize.spec.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Chapter III
            </Heading>
            <Heading size={2} caps lineHeight={1}>
              Game of Tests
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              How to make testing fun?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Add Test Results Graph to CI
            </Heading>
            <Image src={images.testResults.replace("/", "")} margin="40px auto 0px" width="800px"/>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Add Test Coverage Report to CI
            </Heading>
            <Image src={images.cov.replace("/", "")} margin="40px auto 0px" width="800px"/>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Chapter IV
            </Heading>
            <Heading size={2} caps lineHeight={1}>
              But...
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              We want to write tests!
            </Heading>
             <Heading size={1} fit caps lineHeight={1}>
              But...
            </Heading>
          </Slide>

          <Slide>
             <Heading size={1} fit caps lineHeight={1}>
              Don't know how!
            </Heading>
          </Slide>

          <Slide>
             <Heading size={1} fit caps lineHeight={1}>
              Create a unit testing manual
            </Heading>
          </Slide>

          <Slide>
             <Heading size={1} fit caps lineHeight={1}>
              Naming conventions and structure explanation
            </Heading>
            <Image src={images.conventions.replace("/", "")} margin="40px auto 0px" height="500px"/>
          </Slide>

          <Slide>
             <Heading size={1} fit caps lineHeight={1}>
              Examples of tests for all parts
            </Heading>
            <Image src={images.actions.replace("/", "")} margin="40px auto 0px" height="300px"/>
          </Slide>

          <Slide>
             <Heading size={1} caps lineHeight={1}>
              FAQ
            </Heading>
            <Image src={images.faq.replace("/", "")} margin="40px auto 0px" height="500px"/>
          </Slide>

          <Slide note="So we have manual. And are writing tests, but">
            <Heading size={1} fit caps lineHeight={1}>
              We are writing tests!
            </Heading>
             <Heading size={1} fit caps lineHeight={1}>
              But...
            </Heading>
          </Slide>

          <Slide>
            <Heading size={2} caps lineHeight={1}>
              Tests execution
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              is very slow!
            </Heading>
          </Slide>

          <Slide note="One of the main benefints of Webpack is bundling. But it takes time to create bundle and run tests.">
            <Heading size={2} caps lineHeight={1}>
              Webpack bundling is slow
            </Heading>
            <Heading size={4} lineHeight={1} textColor="red">
              180s Average
            </Heading>
          </Slide>

          <Slide note="We start to search a way to build bundles faster">
            <Heading size={2} caps lineHeight={1}>
              How to minimize time?
            </Heading>
          </Slide>

          <Slide note="Weak points of bundles">
            <Heading size={2} caps lineHeight={1}>
              The Weak point
            </Heading>
            <Heading size={2} fit caps lineHeight={1}>
              Resources
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Create tweaked webpack config for tests
            </Heading>
            <CodePane bgColor="primary" textSize={"1.3rem"}
              lang="js"
              source={require("raw!../assets/code/webpack.config.test.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide note="">
            <Heading size={2} caps lineHeight={1}>
              2x Boost as result
            </Heading>
            <Heading size={4} lineHeight={1} textColor="green">
              90s Average
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              We are writing tests!
            </Heading>
             <Heading size={1} fit caps lineHeight={1}>
              But...
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              We want to
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              do it easier
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Use utils and base test functions
            </Heading>
            <CodePane bgColor="primary" textSize={"1.3rem"}
              lang="js"
              source={require("raw!../assets/code/baseReducerTests.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              We are writing tests!
            </Heading>
             <Heading size={1} fit caps lineHeight={1}>
              But...
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              What about React?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Nightmare of React testing
            </Heading>
            <CodePane bgColor="primary" textSize={"1.2rem"}
              lang="js"
              source={require("raw!../assets/code/react.test.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Searching utils for
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              React Testing...
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Enzyme
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              First React tests
            </Heading>
            <CodePane bgColor="primary" textSize={"1.1rem"}
              lang="jsx"
              source={require("raw!../assets/code/enzyme.test.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Refactor and Reorganize
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              Containers / Components
            </Heading>
          </Slide>

          <Slide>
           <Heading size={1} fit caps lineHeight={1}>
              Finally
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              We can start to test React Components
            </Heading>
          </Slide>

          <Slide note="Should we test all exirting components? Definitely - no!">
            <Heading size={1} fit caps lineHeight={1}>
              Should we test all Components?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Which parts of Component should we test?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Lifecycle hooks
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Handlers
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              State changes
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} caps lineHeight={1}>
              Rendering
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Is React components testing useful?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Chapter V
            </Heading>
            <Heading size={2} fit caps lineHeight={1}>
              "Reducing Boilerplate"
            </Heading>
          </Slide>

          <Slide notes="We was using async actions and tests was looking like this">
             <Heading size={1} fit caps lineHeight={1}>
              Async Action Creators
            </Heading>
            <CodePane bgColor="primary" textSize={"1.2rem"}
              lang="js"
              source={require("raw!../assets/code/asyncAction.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide notes="We was using async actions and tests was looking like this">
             <Heading size={1} fit caps lineHeight={1}>
              Tests for Async Action Creators
            </Heading>
            <CodePane bgColor="primary" textSize={"1.2rem"}
              lang="js"
              source={require("raw!../assets/code/actions.spec.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
             <Heading size={1} fit caps lineHeight={1}>
              Nested Async Action Creators
            </Heading>
            <CodePane bgColor="primary" textSize={"0.9rem"}
              lang="js"
              source={require("raw!../assets/code/nestedActions.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide>
             <Heading size={1} fit caps lineHeight={1}>
              Tests for Nested Async Action Creators
            </Heading>
            <CodePane bgColor="primary" textSize={"0.9rem"}
              lang="js"
              source={require("raw!../assets/code/nestedActions.spec.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide notes="We decicded to simplify tests">
            <Heading size={1} fit caps lineHeight={1}>
              Create utils
            </Heading>
            <Heading size={1} fit caps lineHeight={1}>
              To simplify actions testing
            </Heading>
          </Slide>

          <Slide>
            <Table>
              <TableRow>
                <TableHeaderItem fit textSize={"2rem"}>redux-mock-store</TableHeaderItem>
                <TableHeaderItem fit textSize={"2rem"}>Desired</TableHeaderItem>
              </TableRow>
              <TableRow>
                <TableItem>
                  <CodePane bgColor="primary" textSize={"0.9rem"}
                    lang="js"
                    source={require("raw!../assets/code/nestedActions.spec.example")}
                    margin="20px auto"
                  />
                </TableItem>
                <TableItem>
                  <CodePane bgColor="primary" textSize={"1.1rem"}
                    lang="js"
                    source={require("raw!../assets/code/assertions.example")}
                    margin="20px auto"
                  />
                </TableItem>
              </TableRow>
            </Table>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              How to achieve that?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Build action tree
            </Heading>
             <Heading size={1} fit caps lineHeight={1}>
              By dispatching all the actions
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Flatten tree
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Compare result with expected
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              And It works!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Fluent Assertions for
            </Heading>
            <List>
              <ListItem>chai</ListItem>
              <ListItem>expect</ListItem>
              <ListItem>expect.js</ListItem>
              <ListItem>should</ListItem>
              <ListItem>pure javascript</ListItem>
            </List>
          </Slide>

          <Slide >
            <Heading size={1} fit lineHeight={1}>
              redux-actions-assertions
            </Heading>
            <Table>
              <TableRow>
                <TableHeaderItem>
                  <Image src={images.qr.replace("/", "")} margin="40px auto 0px" height="300px"/>
                </TableHeaderItem>
                <TableHeaderItem>
                  http://bit.ly/r-a-a
                </TableHeaderItem>
              </TableRow>
            </Table>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Chapter VI
            </Heading>
            <Heading size={2} caps lineHeight={1}>
              Summary
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              What is important in testing?
            </Heading>
            <List>
              <Appear><ListItem>Choose the right time to start</ListItem></Appear>
              <Appear><ListItem>Involve all developers</ListItem></Appear>
              <Appear><ListItem>Run tests on CI</ListItem></Appear>
              <Appear><ListItem>Avoid testing of experimental parts</ListItem></Appear>
              <Appear><ListItem>Simplify way of testing by using utils and tools</ListItem></Appear>
              <Appear><ListItem>Make test execution fast and comfortable</ListItem></Appear>
              <Appear><ListItem>Understand where tests are not needed</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              What is not important?
            </Heading>
            <List>
              <Appear><ListItem>The framework which you use</ListItem></Appear>
              <Appear><ListItem>Testing of all parts</ListItem></Appear>
              <Appear><ListItem>Percentage of the coverage</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              That's all!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Write tests and have a fun!
            </Heading>
            <Image src={images.dance.replace("/", "")} margin="40px auto 0px" height="400px"/>
          </Slide>

          <Slide>
            <Heading size={1} fit caps lineHeight={1}>
              Thank you!
            </Heading>
            <Text textSize="1.3em" margin="6rem 0px 40px" textColor="tertiary" bold>
              Dmitry Zaets
            </Text>
            <Text textSize="1.5em" margin="40px 0px 40px" textColor="tertiary" bold>
              @dmitryzaets
            </Text>
            <Image src={images.lodgify.replace("/", "")} margin="20px auto 0px" height="80px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
