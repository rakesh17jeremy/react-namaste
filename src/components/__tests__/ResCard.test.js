import { render, screen } from "@testing-library/react";
import ResCard from "../Restaurant";
import MOCK_DATA from "./mocks/ResCardMock.json";
import "@testing-library/jest-dom";

it("should test whether the ResCard loads", () => {
  render(<ResCard resData={MOCK_DATA} />);
  expect(screen.getByText("Pizza Paradise")).toBeInTheDocument();
});
