import React from "react";
import { render, screen, act } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import PostList from "./Pages/PostList";
import axios from "axios";

test("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.debug();
});
test("SnapShot testing ", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe("testing on Nav Bar", () => {
  test("Is NavBar component exist", () => {
    render(
      <BrowserRouter>
        <NavigationBar></NavigationBar>
      </BrowserRouter>
    );

    screen.debug();
  });

  test("Does NavBar component have text?", () => {
    render(
      <BrowserRouter>
        <NavigationBar></NavigationBar>
      </BrowserRouter>
    );
    const textElement = screen.getByText(/Post/);
    expect(textElement).toBeInTheDocument();
  });

  test("How many banner exist in NavBar", () => {
    render(
      <BrowserRouter>
        <NavigationBar></NavigationBar>
      </BrowserRouter>
    );
    const banner = screen.getAllByRole("banner");
    expect(banner.length).toBe(1);
  });

  test("snapshot testing", () => {
    const { container } = render(
      <BrowserRouter>
        <NavigationBar></NavigationBar>
      </BrowserRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

const DummyData = {
  author: "schoen",
  created_at: "2018-02-07T22:22:28.000Z",
  title: "John Perry Barlow has died",
  url: "https://www.eff.org/deeplinks/2018/02/john-perry-barlow-internet-pioneer-1947-2018",
  objectID: "1234",
};

describe("rendering PostList App", () => {
  test("PostList component", () => {
    const listProps = {
      postData: DummyData,
      selectedPage: 1,
      setSelectedPage: 1,
    };
    render(
      <BrowserRouter>
        <PostList {...listProps} />
      </BrowserRouter>
    );
  });
  screen.debug();
});

jest.mock("axios");

// describe(" Integration testing of axios", () => {
//   test(" testing on axios", async () => {
//     const resolvedPromise = Promise.resolve({ data: { hits: DummyData } });
//     axios.get.mockImplementation(() => resolvedPromise);
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );
//     screen.debug();
//   });
// });
