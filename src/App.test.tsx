import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";


test("renders App component", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  screen.debug();
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
  })

  test("How many banner exist in NavBar", () => {
    render(
      <BrowserRouter>
      <NavigationBar></NavigationBar>
      </BrowserRouter>
    );
    const banner = screen.getAllByRole("banner");
    expect(banner.length).toBe(1);
  })
})

