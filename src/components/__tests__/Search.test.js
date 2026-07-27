import { MemoryRouter } from "react-router-dom";
import Body from "../Body";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MOCK_DATA } from "./mocks/mockResListData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the search functionality", async () => {
  await act(async () =>
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>,
    ),
  );

  const cards = screen.getByTestId("resCard");
  expect(cards.length).toBe(9);

  const searchInput = screen.getByPlaceholderText("Search Here");
  const searchBtn = screen.getByTestId("searchBtn");

  fireEvent.change(searchInput, { target: { value: "Spice" } });
  fireEvent.click(searchBtn);

  expect(cards.length).toBe(2);
});
