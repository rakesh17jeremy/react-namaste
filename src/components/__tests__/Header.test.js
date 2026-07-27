import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("Should test the header component", () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>,
  );

  //Querying
  const header = screen.getByRole("button");

  //Assertion
  expect(header).toBeInTheDocument();
});

it("Should test the header component", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const loginButton = screen.getByRole("button",{name:"Login"});
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button",{name:"Log Out"})
  expect(logoutButton).toBeInTheDocument();
});